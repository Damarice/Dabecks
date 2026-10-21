import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo-utils";

export const metadata: Metadata = buildMetadata({
  title: "Contact Dabecks | Get a Quote | Nairobi Kenya",
  description:
    "Contact Dabecks for commercial laundry, kitchen, and HVAC enquiries. Located in Lunga Lunga Square, Nairobi. Call +254 729 212 254 or email info@dabeckslaundry.com.",
  keywords: [
    "contact Dabecks",
    "commercial equipment quote Kenya",
    "HVAC support Nairobi",
    "laundry equipment contact",
  ],
  path: "/contact",
  ogImage: "/hero-contact.jpg",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
