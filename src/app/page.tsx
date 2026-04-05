import { Metadata } from "next";
import PageRenderer from "@/components/PageRenderer";
import { siteData } from "@/data";

export default function Page() {
  return <PageRenderer sections={siteData.homepage.slices} />;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: siteData.homepage.meta.title,
    description: siteData.homepage.meta.description,
  };
}
