import type { Metadata } from "next";

import PageRenderer from "@/components/PageRenderer";
import { siteData } from "@/data";

export default function ProjectsPage() {
  return <PageRenderer sections={siteData.projectsPage.slices} />;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: siteData.projectsPage.meta.title,
    description: siteData.projectsPage.meta.description,
  };
}

