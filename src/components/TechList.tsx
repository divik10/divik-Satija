"use client";

import React, { useLayoutEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import type { TechListSection } from "@/data";

gsap.registerPlugin(ScrollTrigger);

export default function TechList({ heading, items }: TechListSection) {
  const component = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) =>
            index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400),
        },
        {
          x: (index) =>
            index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400),
          ease: "power1.inOut",
        },
      );
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <section className="wrapper overflow-hidden" ref={component}>
      <Bounded as="div">
        <Heading size="xl" className="mb-8" as="h2">
          {heading}
        </Heading>
      </Bounded>

      {items.map(({ techColor, techName }, index) => (
        <div
          key={`${techName}-${index}`}
          className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
          aria-label={techName}
        >
          {Array.from({ length: 15 }, (_, itemIndex) => (
            <React.Fragment key={itemIndex}>
              <span
                className="tech-item text-8xl font-extrabold uppercase tracking-tighter"
                style={{
                  color: itemIndex === 7 && techColor ? techColor : "inherit",
                }}
              >
                {techName}
              </span>
              <span className="text-3xl">
                <MdCircle />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
}

