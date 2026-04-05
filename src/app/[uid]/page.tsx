import { Metadata } from "next";
import { notFound } from "next/navigation";

import PageRenderer from "@/components/PageRenderer";
import { siteData } from "@/data";

type Params = { uid: string };

export default function Page({ params }: { params: Params }) {
  const page = siteData.pages.find((entry) => entry.uid === params.uid);

  if (!page) {
    notFound();
  }

  return <PageRenderer sections={page.slices} />;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const page = siteData.pages.find((entry) => entry.uid === params.uid);

  if (!page) {
    notFound();
  }

  return {
    title: page.meta.title,
    description: page.meta.description,
  };
}

export async function generateStaticParams() {
  return siteData.pages.map((page) => ({ uid: page.uid }));
}
