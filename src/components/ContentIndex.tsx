import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import ContentList from "@/components/ContentList";
import { siteData, type ContentIndexSection } from "@/data";

export default function ContentIndex({
  heading,
  contentType,
  description,
  viewMore,
  fallbackItemImage,
}: ContentIndexSection) {
  const items = siteData.projects;
  const urlPrefix = "/projects";

  return (
    <Bounded>
      <Heading size="xl" className="mb-10 leading-[0.9] md:max-w-[13ch]">
        {heading}
      </Heading>
      {description.length > 0 && (
        <div className="mb-14 max-w-[72rem] text-slate-300">
          {description.map((paragraph) => (
            <p
              key={paragraph}
              className="text-[1.8rem] leading-[1.45] md:text-[2.15rem] lg:text-[2.35rem]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}
      <ContentList
        items={items}
        fallbackItemImage={fallbackItemImage}
        viewMoreText={viewMore}
        urlPrefix={urlPrefix}
      />
    </Bounded>
  );
}
