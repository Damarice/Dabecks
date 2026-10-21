import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo-utils";

export const metadata: Metadata = buildMetadata({
  title: "VRF VRV Systems Kenya | Multi-Zone HVAC | Dabecks",
  description:
    "Variable refrigerant flow systems for large commercial buildings in Kenya. Up to 64 indoor units on one outdoor system. Energy savings up to 30%.",
  keywords: [
    "VRF systems Kenya",
    "VRV systems",
    "multi-zone AC",
    "variable refrigerant flow Kenya",
    "commercial HVAC",
  ],
  path: "/solutions/air-conditioning/vrf-vrv-systems",
  ogImage: "/hero-ac.jpg",
});

export default function VRFVRVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
