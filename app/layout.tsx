import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { buildOrganizationSchema } from "@/lib/seo-utils";

/* ── Font loading ──────────────────────────────────────────
   Both fonts are subset to latin and loaded with display:swap
   for fast first paint. Variable-weight Manrope gives us
   full 400–800 range from a single file.
   ─────────────────────────────────────────────────────────── */

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Dabecks Laundry & Kitchen Solutions | Commercial Equipment East Africa",
    template: "%s | Dabecks",
  },
  description:
    "Leading provider of commercial laundry, kitchen, and air conditioning systems across East Africa since 2011. Authorized dealer for Electrolux Professional, Alliance Laundry Systems, and Pellerin Milnor.",
  keywords: [
    "commercial laundry",
    "commercial kitchen",
    "air conditioning",
    "HVAC",
    "East Africa",
    "Kenya",
    "Nairobi",
    "Electrolux Professional",
    "Alliance Laundry Systems",
  ],
  metadataBase: new URL("https://www.dabeckslaundry.com"),
  openGraph: {
    siteName: "Dabecks Laundry & Kitchen Solutions",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Dabecks Laundry & Kitchen Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dabecks",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  alternates: {
    canonical: "https://www.dabeckslaundry.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = buildOrganizationSchema();

  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen font-body antialiased" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
