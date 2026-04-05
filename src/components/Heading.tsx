import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm";
  children: React.ReactNode;
  className?: string;
};

export default function Heading({
  as: Comp = "h1",
  className,
  children,
  size = "lg",
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        "font-bold leading-tight tracking-tight  text-slate-300",
        size === "xl" && "text-[4.2rem] md:text-[8rem]",
        size === "lg" && "text-[3.6rem] md:text-[7rem]",
        size === "md" && "text-[3.2rem] md:text-[5.6rem]",
        size === "sm" && "text-[2rem] md:text-[3.8rem]",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
