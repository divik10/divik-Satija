import { MetadataRoute } from "next";
import { siteData } from "@/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteRoot = siteData.siteUrl;

  const homepageRoute = {
    url: siteRoot,
    lastModified: siteData.projects[0]?.date ?? new Date().toISOString(),
  };

  const pagesRoutes = siteData.pages.map((page) => ({
    url: siteRoot + "/" + page.uid,
    lastModified: new Date().toISOString(),
  }));

  const projectsIndexRoute = {
    url: siteRoot + "/projects",
    lastModified: new Date().toISOString(),
  };

  const projectsRoutes = siteData.projects.map((project) => ({
    url: siteRoot + "/projects/" + project.uid,
    lastModified: project.date,
  }));

  return [
    homepageRoute,
    ...pagesRoutes,
    projectsIndexRoute,
    ...projectsRoutes,
  ];
}
