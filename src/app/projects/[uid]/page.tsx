import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ContentBody from "@/components/ContentBody";
import { siteData } from "@/data";

type Params = { uid: string };

export default function ProjectPage({ params }: { params: Params }) {
  const project = siteData.projects.find((entry) => entry.uid === params.uid);

  if (!project) {
    notFound();
  }

  return <ContentBody page={project} />;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const project = siteData.projects.find((entry) => entry.uid === params.uid);

  if (!project) {
    notFound();
  }

  return {
    title: project.meta.title,
    description: project.meta.description,
  };
}

export async function generateStaticParams() {
  return siteData.projects.map((project) => ({ uid: project.uid }));
}

