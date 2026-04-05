"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import Bounded from "@/components/Bounded";
import { Shapes } from "@/components/HeroShapes";
import type { HeroSection } from "@/data";

export default function Hero({
  firstName,
  lastName,
  tagLine,
}: HeroSection) {
  const component = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          ".name-animation",
          { x: -100, opacity: 0, rotate: -10 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,
            ease: "elastic.out(1,0.3)",
            duration: 1,
            transformOrigin: "left top",
            stagger: { each: 0.1, from: "random" },
          },
        )
        .fromTo(
          ".job-title",
          {
            y: 20,
            opacity: 0,
            scale: 1.2,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scale: 1,
            ease: "elastic.out(1,0.3)",
          },
        );
    }, component);

    return () => ctx.revert();
  }, []);

  const renderLetters = (name: string, key: string) =>
    name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key}-index inline-block opacity-0 `}
      >
        {letter}
      </span>
    ));

  return (
    <Bounded ref={component} className="pt-4 md:pt-8">
      <div className="grid min-h-[74vh] grid-cols-1 items-center gap-6 md:grid-cols-[0.92fr,1.08fr] lg:gap-2">
        <Shapes />
        <div className="col-start-1 -mt-4 md:row-start-1 md:-mt-8">
          <h1
            className="mb-8 text-[clamp(4.1rem,17vw,9.4rem)] font-extrabold leading-[0.82] tracking-tighter md:text-[clamp(5.6rem,11vw,10.2rem)] xl:text-[clamp(6.2rem,11.5vw,11rem)]"
            aria-label={`${firstName} ${lastName}`}
          >
            <span className="block text-slate-300">
              {renderLetters(firstName, "first")}
            </span>
            <span className="-mt-[.2em] block text-slate-500">
              {renderLetters(lastName, "last")}
            </span>
          </h1>
          <span className="job-title block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-[1.25rem] font-bold uppercase tracking-[.2em] text-transparent opacity-100 md:text-[1.7rem] xl:text-[1.85rem]">
            {tagLine}
          </span>
        </div>
      </div>
    </Bounded>
  );
}
