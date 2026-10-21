import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo-utils";

export const metadata: Metadata = buildMetadata({
  title: "Commercial Laundry Equipment | Washers, Dryers, Ironers | Dabecks",
  description:
    "Heavy-duty commercial laundry equipment in Kenya. Washer extractors, industrial tumble dryers, and flatwork ironers. Supply, installation, and maintenance from Dabecks.",
  keywords: [
    "commercial laundry Kenya",
    "washer extractor",
    "tumble dryer industrial",
    "flatwork ironer",
    "laundry equipment Nairobi",
  ],
  path: "/solutions/laundry",
  ogImage: "/hero-laundry.jpg",
});

export default function LaundryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
