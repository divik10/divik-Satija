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
        <div key={index} className="ml-6 mt-8 max-w-[72rem] md:ml-12 md:mt-16 lg:max-w-[84rem]">
          <Heading as="h3" size="sm">
            {item.title}
          </Heading>

          <div className="mt-2 flex w-fit items-center gap-2 text-[2.15rem] font-semibold tracking-tight text-slate-400 md:text-[2.5rem] lg:text-[2.7rem]">
            <span>{item.timePeriod}</span>
            {item.institution ? (
              <>
                <span className="text-[2.8rem] font-extralight">/</span>
                <span>{item.institution}</span>
              </>
            ) : null}
          </div>
          <div className="mt-5 max-w-[84rem] text-slate-200">
            {item.description.map((paragraph) => (
              <p
                key={paragraph}
                className="mb-8 text-[1.75rem] leading-[1.45] md:text-[2.1rem] lg:text-[2.3rem]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      ))}
    </Bounded>
  );
}
