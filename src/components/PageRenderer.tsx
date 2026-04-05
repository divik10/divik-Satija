import Biography from "@/components/Biography";
import ContentIndex from "@/components/ContentIndex";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import TechList from "@/components/TechList";
import type { PageSection } from "@/data";

export default function PageRenderer({ sections }: { sections: PageSection[] }) {
  return (
    <>
      {sections.map((section, index) => {
        switch (section.type) {
          case "hero":
            return <Hero key={index} {...section} />;
          case "biography":
            return <Biography key={index} {...section} />;
          case "tech_list":
            return <TechList key={index} {...section} />;
          case "experience":
            return <Experience key={index} {...section} />;
          case "content_index":
            return <ContentIndex key={index} {...section} />;
          default:
            return null;
        }
      })}
    </>
  );
}

