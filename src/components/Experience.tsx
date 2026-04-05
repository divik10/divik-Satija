import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import type { ExperienceSection } from "@/data";

export default function Experience({ heading, items }: ExperienceSection) {
  return (
    <Bounded>
      <Heading as="h2" size="lg">
        {heading}
      </Heading>
      {items.map((item, index) => (
        <div key={index} className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
          <Heading as="h3" size="sm">
            {item.title}
          </Heading>

          <div className="mt-2 flex w-fit items-center gap-2 text-[1.7rem] font-semibold tracking-tight text-slate-400 md:text-[1.9rem]">
            <span>{item.timePeriod}</span>
            {item.institution ? (
              <>
                <span className="text-3xl font-extralight">/</span>
                <span>{item.institution}</span>
              </>
            ) : null}
          </div>
          <div className="prose prose-2xl prose-invert mt-5 max-w-3xl">
            {item.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      ))}
    </Bounded>
  );
}
