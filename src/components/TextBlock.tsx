import type { TextBlock as TextBlockProps } from "@/data";

const urlPattern = /(https?:\/\/[^\s]+[^\s.,!?;:])/g;
const isUrl = (value: string) =>
  /^https?:\/\/[^\s]+[^\s.,!?;:]$/.test(value);

export default function TextBlock({ text }: TextBlockProps) {
  const renderParagraph = (paragraph: string) => {
    const parts = paragraph.split(urlPattern);

    return parts.map((part, index) => {
      if (isUrl(part)) {
        return (
          <a
            key={`${part}-${index}`}
            href={part}
            target="_blank"
            rel="noreferrer"
            className="break-all font-semibold text-yellow-300 underline underline-offset-4 transition-colors duration-150 hover:text-yellow-200 sm:break-words"
          >
            {part}
          </a>
        );
      }

      return <span key={`${part}-${index}`}>{part}</span>;
    });
  };

  return (
    <div className="max-w-none text-slate-200">
      {text.map((paragraph) => (
        <p
          key={paragraph}
          className="mb-8 break-words text-[1.7rem] leading-[1.45] md:text-[2.05rem] lg:text-[2.2rem]"
        >
          {renderParagraph(paragraph)}
        </p>
      ))}
    </div>
  );
}
