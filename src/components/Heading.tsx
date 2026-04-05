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
        size === "xl" && "text-[5.5rem] md:text-[10.5rem]",
        size === "lg" && "text-[4.75rem] md:text-[9.25rem]",
        size === "md" && "text-[4.25rem] md:text-[7.25rem]",
        size === "sm" && "text-[2.6rem] md:text-[5.2rem]",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
