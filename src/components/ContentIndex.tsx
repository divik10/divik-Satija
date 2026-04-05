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
  const items =
    contentType === "Blog" ? siteData.blogPosts : siteData.projects;
  const urlPrefix = contentType === "Blog" ? "/blog" : "/projects";

  return (
    <Bounded>
      <Heading size="xl" className="mb-10 leading-[0.9] md:max-w-[13ch]">
        {heading}
      </Heading>
      {description.length > 0 && (
        <div className="prose prose-2xl md:prose-[2rem] prose-invert mb-14 max-w-4xl text-slate-300">
          {description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
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
