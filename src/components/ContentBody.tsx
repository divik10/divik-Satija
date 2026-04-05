import Heading from "@/components/Heading";
import Bounded from "@/components/Bounded";
import { formatDate } from "@/utils/formatDate";
import ImageBlock from "@/components/ImageBlock";
import TextBlock from "@/components/TextBlock";
import type { ContentItem } from "@/data";

export default function ContentBody({
  page,
}: {
  page: ContentItem;
}) {
  const formattedDate = formatDate(page.date);
  return (
    <Bounded as="article">
      <div className="rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20">
        <Heading as="h1">{page.title}</Heading>
        <div className="flex gap-4 text-yellow-400">
          {page.tags.map((tag, index) => (
            <span key={index} className="text-2xl font-bold">
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-8 border-b border-slate-600 text-2xl font-medium text-slate-300">
          {formattedDate}
        </p>
        <div className="prose prose-[1.95rem] md:prose-[2.35rem] prose-invert mt-12 w-full max-w-none md:mt-20">
          {page.slices.map((slice, index) => {
            switch (slice.type) {
              case "text_block":
                return <TextBlock key={index} {...slice} />;
              case "image_block":
                return <ImageBlock key={index} {...slice} />;
              default:
                return null;
            }
          })}
        </div>
      </div>
    </Bounded>
  );
}
