import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo-utils";

export const metadata: Metadata = buildMetadata({
  title: "Price List | Commercial Equipment Kenya | Dabecks",
  description:
    "Request pricing for commercial laundry, kitchen, and air conditioning equipment in Kenya. Transparent pricing from Dabecks, East Africa's trusted equipment partner.",
  keywords: [
    "commercial equipment price Kenya",
    "laundry equipment pricing",
    "HVAC quotes East Africa",
    "kitchen equipment cost",
  ],
  path: "/price-list",
  ogImage: "/hero.jpg",
});

export default function PriceListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
