import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo-utils";

export const metadata: Metadata = buildMetadata({
  title: "Our Clients | Hotels, Hospitals & Institutions | Dabecks Kenya",
  description:
    "Dabecks serves hotels, hospitals, universities, and government institutions across East Africa. Trusted by Radisson Blu, Safari Park Hotel, NAS Servair, and more.",
  keywords: [
    "clients Kenya",
    "commercial clients",
    "hotels restaurants",
    "hospitals institutions",
  ],
  path: "/clients",
  ogImage: "/hero-clients.jpg",
});

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
