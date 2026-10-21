# SEO & Favicon Implementation Plan for Dabecks Laundry & Kitchen Solutions

## Context & Findings

**Project Structure:** Next.js 15 with App Router (React 19)  
**Base URL:** https://www.dabeckslaundry.com  
**Logo:** c:\Users\Damarice\dabecks\public\logo.png (673 KB PNG)  
**Total Pages:** 118 page.tsx files  
**Client Components:** 8 pages with 'use client' directive (about, contact, projects, price-list, laundry, vrf-vrv-systems)  
**Server Components:** 110 pages (can export metadata directly)

The site is organized into three main solution categories (Laundry, Kitchen, Air Conditioning) with deeply nested product/subcategory pages under each. Most pages are server components capable of exporting metadata, but six key pages use client interactivity and require wrapper patterns.

---

## Implementation Plan

### Phase 1: Favicon & SEO Infrastructure

- [ ] **1. Copy logo and configure favicon**
      
      Copy public/logo.png → public/favicon.ico (the Next.js Metadata API will serve it as favicon.ico)
      and create public/apple-touch-icon.png (same source, for iOS homescreen).
      
      Files created/modified:
      - public/favicon.ico (copy of logo.png)
      - public/apple-touch-icon.png (copy of logo.png)
      
      Verify: Check that both files exist in the public folder (no build output required at this step).

- [ ] **2. Create SEO utilities library**
      
      Create lib/seo-utils.ts with a buildMetadata() helper that generates consistent Metadata objects with site metadata, robots, canonical URL construction. This avoids duplication across 118 pages and standardizes schema generation logic.
      
      Files created:
      - lib/seo-utils.ts (buildMetadata function, buildSchema helpers, Organization/BreadcrumbList JSON-LD generators)
      
      Verify: Run `npm run build` and confirm TypeScript compilation succeeds with no errors.

- [ ] **3. Expand root layout metadata and add Organization JSON-LD**
      
      Update app/layout.tsx to export comprehensive Metadata (title template, description, keywords, openGraph, twitter card, robots, metadataBase, alternates canonical).
      Add Organization schema JSON-LD script in the root layout's <head>.
      
      Files modified:
      - app/layout.tsx (metadata export expanded, Organization JSON-LD script added)
      
      Verify: Run `npm run build` and confirm TypeScript compilation succeeds.

---

### Phase 2: Homepage & 'Use Client' Pages (Metadata Pattern)

- [ ] **4. Convert homepage to support metadata export**
      
      Create a new server component wrapper app/page.tsx (or keep 'use client' and export metadata separately).
      **Decision:** Split into app/(homepage)/layout.tsx (server, exports metadata) + app/(homepage)/page.tsx ('use client', no metadata).
      This preserves interactivity while adding metadata export.
      
      Files modified/created:
      - app/(homepage)/layout.tsx (new, server component, exports metadata for homepage)
      - app/page.tsx (moved to app/(homepage)/page.tsx, remains 'use client')
      - Update any imports in components if needed
      
      Metadata for homepage:
      - Title: "Dabecks Laundry & Kitchen Solutions | Commercial Equipment East Africa"
      - Description: "Leading provider of commercial laundry, kitchen, and air conditioning systems across East Africa since 2011. Trusted partner for hotels, hospitals, and institutions."
      - OG Image: /hero.jpg (or another representative image)
      
      Verify: Run `npm run build` and confirm no errors; `npm run dev` and verify homepage loads with metadata in source.

- [ ] **5. Add metadata to about page**
      
      Apply the same split pattern to app/about:
      - Create app/about/layout.tsx (server, exports metadata for About page)
      - Keep existing app/about/page.tsx as 'use client' (no metadata export)
      
      Metadata:
      - Title: "About Dabecks | Commercial Equipment & Solutions | East Africa"
      - Description: "Learn about Dabecks' 13+ years delivering commercial laundry, kitchen, and HVAC solutions to hotels, hospitals, and institutions across East Africa."
      - OG Image: /about-team.jpg
      
      Files modified/created:
      - app/about/layout.tsx (new, server component)
      - app/about/page.tsx (already 'use client', no changes)
      
      Verify: Run `npm run build` and confirm no errors.

- [ ] **6. Add metadata to contact page**
      
      Create app/contact/layout.tsx (server, exports metadata).
      Keep app/contact/page.tsx as 'use client'.
      
      Metadata:
      - Title: "Contact Dabecks | Request a Quote & Site Assessment"
      - Description: "Get in touch with Dabecks for enquiries, quotes, and support. Reach our Nairobi-based team for laundry, kitchen, and HVAC solutions."
      - OG Image: /hero-contact.jpg
      
      Files created:
      - app/contact/layout.tsx (new, server component)
      
      Verify: Run `npm run build`.

- [ ] **7. Add metadata to projects page**
      
      Create app/projects/layout.tsx (server, exports metadata).
      
      Metadata:
      - Title: "Our Projects | Commercial Equipment Installations | Dabecks"
      - Description: "Explore our portfolio of completed commercial laundry, kitchen, and HVAC projects across East Africa."
      
      Files created:
      - app/projects/layout.tsx
      
      Verify: Run `npm run build`.

- [ ] **8. Add metadata to price-list page**
      
      Create app/price-list/layout.tsx (server, exports metadata).
      
      Metadata:
      - Title: "Price List & Quotation | Dabecks Commercial Equipment"
      - Description: "Browse our pricing for commercial laundry, kitchen, and air conditioning equipment with transparent quotes and flexible terms."
      
      Files created:
      - app/price-list/layout.tsx
      
      Verify: Run `npm run build`.

---

### Phase 3: Core Solution Pages

- [ ] **9. Add metadata to partners page**
      
      app/partners/page.tsx is already a server component (no 'use client').
      Add metadata export directly to the file.
      
      Metadata:
      - Title: "Our Partners | Authorized Dealerships | Dabecks"
      - Description: "Authorized dealer for Electrolux Professional, Alliance Laundry Systems, and Pellerin Milnor Corporation. Trusted partner in East Africa."
      
      Files modified:
      - app/partners/page.tsx
      
      Verify: Run `npm run build`.

- [ ] **10. Add metadata to price-list page (if server component)**
      
      Check if this is a server component; if so, add metadata export.
      If it uses 'use client', add layout.tsx wrapper (already covered in Phase 2 step 8).
      
      Verify: Run `npm run build`.

- [ ] **11. Add metadata to clients page**
      
      app/clients/page.tsx is a server component.
      Add metadata export directly.
      
      Metadata:
      - Title: "Our Clients | Hotels, Hospitals & Institutions | Dabecks"
      - Description: "Trusted by leading hospitality, healthcare, and educational institutions across East Africa. See who relies on Dabecks."
      
      Files modified:
      - app/clients/page.tsx
      
      Verify: Run `npm run build`.

- [ ] **12. Add metadata to solutions landing page**
      
      app/solutions/page.tsx is a server component.
      Add metadata export with BreadcrumbList JSON-LD for /solutions.
      
      Metadata:
      - Title: "Commercial Solutions | Laundry, Kitchen & HVAC | Dabecks"
      - Description: "Browse our complete range of commercial laundry, kitchen equipment, and air conditioning solutions trusted across East Africa."
      
      Files modified:
      - app/solutions/page.tsx (add metadata and BreadcrumbList JSON-LD)
      
      Verify: Run `npm run build`.

---

### Phase 4: Category & Subcategory Pages

- [ ] **13. Add metadata to laundry category and all subcategories**
      
      Metadata template:
      - app/solutions/laundry/page.tsx: "Commercial Laundry Equipment | Washers, Dryers, Ironers | Dabecks"
      - app/solutions/laundry/commercial-washers/page.tsx: "Commercial Washers | Heavy-Duty Laundry Equipment | Dabecks"
      - app/solutions/laundry/washer-extractors/page.tsx: "Washer Extractors | Industrial Laundry | Dabecks"
      - app/solutions/laundry/industrial-dryers/page.tsx: "Industrial Tumble Dryers | High-Capacity Laundry | Dabecks"
      - app/solutions/laundry/ironers-presses/page.tsx: "Flatwork Ironers & Presses | Laundry Equipment | Dabecks"
      - app/solutions/laundry/folding-equipment/page.tsx: "Folding Equipment | Laundry Automation | Dabecks"
      - app/solutions/laundry/accessories/page.tsx: "Laundry Accessories & Chemicals | Detergents & Supplies | Dabecks"
      
      For each, include appropriate description and category-specific keywords.
      All category pages are server components.
      
      Individual product pages (e.g., /washer-extractors/wb6-70/page.tsx) also need metadata:
      - Title: "[Product Name] | Commercial Laundry Equipment | Dabecks"
      - Description: Product-specific description (sourcing from page content)
      - Product JSON-LD schema (name, description, brand, image URL)
      
      Files modified:
      - app/solutions/laundry/page.tsx
      - app/solutions/laundry/commercial-washers/page.tsx
      - app/solutions/laundry/washer-extractors/page.tsx
      - app/solutions/laundry/industrial-dryers/page.tsx
      - app/solutions/laundry/ironers-presses/page.tsx
      - app/solutions/laundry/folding-equipment/page.tsx
      - app/solutions/laundry/accessories/page.tsx
      - All product detail pages under laundry/ (15+ product pages)
      
      Verify: Run `npm run build` to confirm all TypeScript updates compile.

- [ ] **14. Add metadata to kitchen category and all subcategories**
      
      Metadata template:
      - app/solutions/kitchen/page.tsx: "Commercial Kitchen Equipment | Ovens, Ranges, Fryers | Dabecks"
      - app/solutions/kitchen/commercial-ovens/page.tsx: "Commercial Ovens | Professional Cooking Equipment | Dabecks"
      - app/solutions/kitchen/cooking-ranges/page.tsx: "Commercial Cooking Ranges | Kitchen Equipment | Dabecks"
      - app/solutions/kitchen/dishwashers/page.tsx: "Commercial Dishwashers | High-Capacity Washers | Dabecks"
      - app/solutions/kitchen/fryers/page.tsx: "Commercial Deep Fryers | Kitchen Equipment | Dabecks"
      - app/solutions/kitchen/grills-griddles/page.tsx: "Commercial Grills & Griddles | Cooking Equipment | Dabecks"
      
      Individual product pages for each subcategory (e.g., /commercial-ovens/skyline-combi/page.tsx, /fryers/fryer-900xp-gas-15l/page.tsx, etc.) also need metadata with Product JSON-LD.
      
      Files modified:
      - app/solutions/kitchen/page.tsx
      - app/solutions/kitchen/commercial-ovens/page.tsx
      - app/solutions/kitchen/cooking-ranges/page.tsx
      - app/solutions/kitchen/dishwashers/page.tsx
      - app/solutions/kitchen/fryers/page.tsx
      - app/solutions/kitchen/grills-griddles/page.tsx
      - All product detail pages under kitchen/ (30+ product pages)
      
      Verify: Run `npm run build`.

- [ ] **15. Add metadata to air-conditioning category and all subcategories**
      
      Metadata template:
      - app/solutions/air-conditioning/page.tsx: "Air Conditioning Systems | Split Units, VRF/VRV | Dabecks"
      - app/solutions/air-conditioning/split-units/page.tsx: "Commercial Split Unit AC | Air Conditioning | Dabecks"
      - app/solutions/air-conditioning/cassette-units/page.tsx: "Cassette Unit Air Conditioners | Ceiling AC | Dabecks"
      - app/solutions/air-conditioning/ducted-systems/page.tsx: "Ducted Air Conditioning | Concealed HVAC Systems | Dabecks"
      - app/solutions/air-conditioning/vrf-vrv-systems/page.tsx: "VRF/VRV Systems | Variable Refrigerant Flow | Dabecks"
      - app/solutions/air-conditioning/installation-services/page.tsx: "AC Installation & Commissioning Services | Dabecks"
      - app/solutions/air-conditioning/maintenance-repair/page.tsx: "Air Conditioning Maintenance & Repair Services | Dabecks"
      
      **Special handling:** app/solutions/air-conditioning/vrf-vrv-systems/page.tsx is marked as 'use client'. Create a layout.tsx wrapper for metadata.
      
      Individual product pages (e.g., /split-units/sirair-12000-inverter-alpha/page.tsx, /vrf-vrv-systems/daikinVRV4/page.tsx, etc.) need Product JSON-LD metadata.
      
      Files modified/created:
      - app/solutions/air-conditioning/page.tsx
      - app/solutions/air-conditioning/split-units/page.tsx
      - app/solutions/air-conditioning/cassette-units/page.tsx
      - app/solutions/air-conditioning/ducted-systems/page.tsx
      - app/solutions/air-conditioning/vrf-vrv-systems/page.tsx (keep as 'use client')
      - app/solutions/air-conditioning/vrf-vrv-systems/layout.tsx (new, server component with metadata)
      - app/solutions/air-conditioning/installation-services/page.tsx
      - app/solutions/air-conditioning/maintenance-repair/page.tsx
      - All product detail pages under air-conditioning/ (20+ product pages)
      
      Verify: Run `npm run build`.

- [ ] **16. Add metadata to consultancy page**
      
      app/solutions/consultancy/page.tsx is a server component.
      
      Metadata:
      - Title: "Commercial Consultancy Services | Facility Planning | Dabecks"
      - Description: "Expert consultancy for commercial facility design, equipment selection, and optimization across laundry, kitchen, and HVAC systems."
      
      Files modified:
      - app/solutions/consultancy/page.tsx
      
      Verify: Run `npm run build`.

---

### Phase 5: SEO XML Files

- [ ] **17. Create robots.txt**
      
      Create public/robots.txt allowing all crawlers, disallowing /api/, referencing sitemap at /sitemap.xml.
      
      Files created:
      - public/robots.txt
      
      Verify: Navigate to https://www.dabeckslaundry.com/robots.txt in a browser (after deployment) and verify content is served.

- [ ] **18. Create sitemap.ts**
      
      Create app/sitemap.ts using Next.js sitemap generation to return all static URLs (118 pages).
      Include lastModified and changeFrequency for each entry.
      Reference sitemap in robots.txt.
      
      Files created:
      - app/sitemap.ts (static route handler generating sitemap.xml)
      
      Verify: Run `npm run build` and check that sitemap generation completes without errors. Inspect .next output to confirm sitemap.xml is generated.

---

### Phase 6: Breadcrumb & Product Schema

- [ ] **19. Add BreadcrumbList JSON-LD to all nested category pages**
      
      For every subcategory and product detail page, add BreadcrumbList structured data.
      Use the buildSchema helper created in lib/seo-utils.ts.
      
      Examples:
      - /solutions/laundry/washer-extractors/wb6-70/ breadcrumbs: Home → Solutions → Laundry → Washer Extractors → WB6-70
      - /solutions/kitchen/commercial-ovens/skyline-combi/ breadcrumbs: Home → Solutions → Kitchen → Commercial Ovens → Skyline Combi
      
      Breadcrumb schema is added as a JSON-LD script tag in the layout or page component.
      
      Files modified: All category and product detail pages (approx. 70 files)
      
      Verify: Run `npm run build` and confirm no TypeScript errors.

- [ ] **20. Add Product JSON-LD to all product detail pages**
      
      For every individual product page, add Product schema including name, description, brand, image, aggregateRating (if available), and offers.
      Extract product information from the page content.
      
      Examples:
      - WB6-70 product page: Product schema with name, description, image, brand (Electrolux Professional)
      - Skyline Combi oven page: Product schema with name, description, image, brand
      
      Files modified: All product detail pages (approx. 50+ files)
      
      Verify: Run `npm run build`.

---

### Phase 7: Review & Verification

- [ ] **21. Build the entire project and verify no errors**
      
      Run `npm run build` to ensure all TypeScript, metadata exports, and SEO utilities compile successfully.
      Verify:
      - No TypeScript compilation errors
      - No missing imports in lib/seo-utils.ts or page files
      - Sitemap generation completes
      - favicon.ico and apple-touch-icon.png exist in public/
      
      Verify: `npm run build` completes with exit code 0.

- [ ] **22. Test local dev server**
      
      Run `npm run dev` and manually inspect:
      - Homepage loads with correct metadata (check source code for <title>, <meta>, <link rel="canonical">)
      - About page loads with metadata
      - Contact page loads with metadata
      - VRF/VRV page loads with metadata (from layout.tsx)
      - Multiple product pages load with Product JSON-LD and BreadcrumbList
      - Favicon appears in browser tab
      - Robots.txt is accessible at http://localhost:3000/robots.txt
      - Sitemap is generated (check .next/static for sitemap.xml reference)
      
      Verify: All pages render without console errors and metadata is present in page source.

- [ ] **23. Commit changes to git**
      
      Stage all modified and new files (favicon, seo-utils.ts, updated layouts/pages, robots.txt, sitemap.ts).
      Create a single commit with message: "chore: add favicon, comprehensive SEO metadata, JSON-LD schemas, and sitemap"
      
      Do NOT push (local commit only).
      
      Verify: `git log -1 --oneline` shows the commit; `git status` shows clean working tree.

---

## Metadata Content Summary

### Metadata for All Root-Level Pages

| Page | Title | Description |
|------|-------|-------------|
| / (Homepage) | Dabecks Laundry & Kitchen Solutions \| Commercial Equipment East Africa | Leading provider of commercial laundry, kitchen, and air conditioning systems across East Africa since 2011. Trusted partner for hotels, hospitals, and institutions. |
| /about | About Dabecks \| Commercial Equipment & Solutions \| East Africa | Learn about Dabecks' 13+ years delivering commercial laundry, kitchen, and HVAC solutions to hotels, hospitals, and institutions across East Africa. |
| /contact | Contact Dabecks \| Request a Quote & Site Assessment | Get in touch with Dabecks for enquiries, quotes, and support. Reach our Nairobi-based team for laundry, kitchen, and HVAC solutions. |
| /projects | Our Projects \| Commercial Equipment Installations \| Dabecks | Explore our portfolio of completed commercial laundry, kitchen, and HVAC projects across East Africa. |
| /price-list | Price List & Quotation \| Dabecks Commercial Equipment | Browse our pricing for commercial laundry, kitchen, and air conditioning equipment with transparent quotes and flexible terms. |
| /partners | Our Partners \| Authorized Dealerships \| Dabecks | Authorized dealer for Electrolux Professional, Alliance Laundry Systems, and Pellerin Milnor Corporation. Trusted partner in East Africa. |
| /clients | Our Clients \| Hotels, Hospitals & Institutions \| Dabecks | Trusted by leading hospitality, healthcare, and educational institutions across East Africa. See who relies on Dabecks. |

### Category Page Metadata

**Laundry:**
- /solutions/laundry: "Commercial Laundry Equipment \| Washers, Dryers, Ironers \| Dabecks"
- /solutions/laundry/commercial-washers: "Commercial Washers \| Heavy-Duty Laundry Equipment \| Dabecks"
- /solutions/laundry/washer-extractors: "Washer Extractors \| Industrial Laundry \| Dabecks"
- /solutions/laundry/industrial-dryers: "Industrial Tumble Dryers \| High-Capacity Laundry \| Dabecks"
- /solutions/laundry/ironers-presses: "Flatwork Ironers & Presses \| Laundry Equipment \| Dabecks"
- /solutions/laundry/folding-equipment: "Folding Equipment \| Laundry Automation \| Dabecks"
- /solutions/laundry/accessories: "Laundry Accessories & Chemicals \| Detergents & Supplies \| Dabecks"

**Kitchen:**
- /solutions/kitchen: "Commercial Kitchen Equipment \| Ovens, Ranges, Fryers \| Dabecks"
- /solutions/kitchen/commercial-ovens: "Commercial Ovens \| Professional Cooking Equipment \| Dabecks"
- /solutions/kitchen/cooking-ranges: "Commercial Cooking Ranges \| Kitchen Equipment \| Dabecks"
- /solutions/kitchen/dishwashers: "Commercial Dishwashers \| High-Capacity Washers \| Dabecks"
- /solutions/kitchen/fryers: "Commercial Deep Fryers \| Kitchen Equipment \| Dabecks"
- /solutions/kitchen/grills-griddles: "Commercial Grills & Griddles \| Cooking Equipment \| Dabecks"

**Air Conditioning:**
- /solutions/air-conditioning: "Air Conditioning Systems \| Split Units, VRF/VRV \| Dabecks"
- /solutions/air-conditioning/split-units: "Commercial Split Unit AC \| Air Conditioning \| Dabecks"
- /solutions/air-conditioning/cassette-units: "Cassette Unit Air Conditioners \| Ceiling AC \| Dabecks"
- /solutions/air-conditioning/ducted-systems: "Ducted Air Conditioning \| Concealed HVAC Systems \| Dabecks"
- /solutions/air-conditioning/vrf-vrv-systems: "VRF/VRV Systems \| Variable Refrigerant Flow \| Dabecks"
- /solutions/air-conditioning/installation-services: "AC Installation & Commissioning Services \| Dabecks"
- /solutions/air-conditioning/maintenance-repair: "Air Conditioning Maintenance & Repair Services \| Dabecks"
- /solutions/consultancy: "Commercial Consultancy Services \| Facility Planning \| Dabecks"

---

## Key Implementation Decisions

1. **Favicon Approach:** Copy public/logo.png as public/favicon.ico and public/apple-touch-icon.png to ensure multiplatform support (desktop, iOS homescreen).

2. **'Use Client' Pages Pattern:** For pages marked 'use client' (about, contact, projects, price-list, laundry, vrf-vrv-systems), use Next.js directory-scoped layouts. Create a layout.tsx file in the same directory that acts as a server component and exports metadata, while the page.tsx remains 'use client'. This preserves interactivity and allows metadata export without violating the app router's metadata API constraint.

3. **SEO Utilities:** Centralize metadata generation in lib/seo-utils.ts to avoid duplication across 118 pages. Helper functions include buildMetadata() (for consistent metadata objects), buildOrganizationSchema(), and buildBreadcrumbSchema().

4. **Product Schema:** Every individual product page (50+ pages) gets Product JSON-LD with name, description, brand, image, and aggregateRating (if applicable).

5. **Breadcrumb Schema:** Every nested category and product detail page (70+ pages) gets BreadcrumbList JSON-LD showing the hierarchy from Home to the current page.

6. **Sitemap Generation:** Use Next.js 15 sitemap.ts API (a static route handler) to generate sitemap.xml dynamically with all 118 pages.

7. **robots.txt:** Simple allow-all crawler directive with sitemap reference, disallow /api/ to prevent indexing of API routes.

---

## Testing Checklist

- [ ] Favicon appears in browser tab for all pages
- [ ] `npm run build` completes with no errors
- [ ] Homepage has correct metadata in page source (title, description, og:image)
- [ ] About, contact, projects pages load with metadata (from layout.tsx wrappers)
- [ ] VRF/VRV Systems page loads with metadata (from layout.tsx wrapper)
- [ ] At least 3 product pages have Product JSON-LD visible in page source
- [ ] At least 2 category pages have BreadcrumbList JSON-LD visible in page source
- [ ] robots.txt is served at /robots.txt
- [ ] sitemap.xml is generated and served at /sitemap.xml
- [ ] No console errors in browser for any page
- [ ] All hyperlinks (internal and external) are correct
- [ ] Mobile responsiveness is preserved
- [ ] Local dev server runs without warnings

