import Avatar from "@/components/Avatar";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import type { BiographySection } from "@/data";

export default function Biography({
  heading,
  description,
  buttonText,
  buttonLink,
  avatar,
}: BiographySection) {
  return (
    <Bounded>
      <div className="grid gap-x-6 gap-y-6 md:grid-cols-[2.6fr,0.9fr]">
        <Heading size="xl" className="col-start-1">
          {heading}
        </Heading>

        <div className="col-start-1 max-w-[72rem] text-slate-200">
          {description.map((paragraph) => (
            <p
              key={paragraph}
              className="mb-8 text-[1.6rem] leading-[1.45] md:text-[2rem] lg:text-[2.2rem]"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <Button link={buttonLink} label={buttonText} />

        <Avatar
          image={avatar}
          className="row-start-1 max-w-lg md:max-w-xl lg:max-w-2xl md:col-start-2 md:row-end-3"
        />
      </div>
    </Bounded>
  );
}
