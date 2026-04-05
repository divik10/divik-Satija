import React from "react";
import { MdArrowOutward } from "react-icons/md";
import clsx from "clsx";
import Link from "next/link";

type ButtonProps = {
  link: string;
  label: string;
  showIcon?: boolean;
  className?: string;
};

export default function Button({
  link,
  label,
  showIcon = true,
  className,
}: ButtonProps) {
  const isExternal = link.startsWith("http") || link.startsWith("mailto:");

  return (
    <Link
      href={link}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={clsx(
        "group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 text-[0.88rem] font-bold transition-transform ease-out hover:scale-105 md:px-4.5 md:py-2.5 md:text-[0.95rem]",
        className,
      )}
    >
      <span
        className={clsx(
          "absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0",
        )}
      />
      <span className="relative flex items-center justify-center gap-2">
        {label} {showIcon && <MdArrowOutward className="inline-block" />}
      </span>
    </Link>
  );
}
