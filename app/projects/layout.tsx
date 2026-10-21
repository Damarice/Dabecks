import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo-utils";

export const metadata: Metadata = buildMetadata({
  title: "Our Projects | Commercial Installations East Africa | Dabecks",
  description:
    "Browse Dabecks completed projects across East Africa — hotels, hospitals, universities, and industrial facilities fitted with commercial laundry, kitchen, and HVAC equipment.",
  keywords: [
    "commercial projects Kenya",
    "laundry installations East Africa",
    "HVAC projects portfolio",
    "commercial equipment installations",
  ],
  path: "/projects",
  ogImage: "/hero-projects.jpg",
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
