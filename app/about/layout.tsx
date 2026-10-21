import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo-utils";

export const metadata: Metadata = buildMetadata({
  title: "About Dabecks | Commercial Equipment Partner Since 2011 | Kenya",
  description:
    "Learn about Dabecks Laundry & Kitchen Solutions — a Kenyan-owned company serving East Africa since 2011. Authorized dealer for Electrolux Professional, Alliance Laundry Systems, and Pellerin Milnor.",
  keywords: [
    "about Dabecks",
    "commercial equipment Kenya",
    "laundry solutions East Africa",
    "Electrolux Professional dealer",
  ],
  path: "/about",
  ogImage: "/about-team.jpg",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
