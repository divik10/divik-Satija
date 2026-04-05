"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

import type { ContentItem, ImageAsset } from "@/data";

gsap.registerPlugin(ScrollTrigger);

type ContentListProps = {
  items: ContentItem[];
  fallbackItemImage: ImageAsset;
  viewMoreText: string;
  urlPrefix: string;
};

export default function ContentList({
  items,
  fallbackItemImage,
  viewMoreText = "Read More",
  urlPrefix,
}: ContentListProps) {
  const component = useRef(null);
  const itemsRef = useRef<Array<HTMLLIElement | null>>([]);
  const revealRef = useRef<HTMLDivElement | null>(null);
  const [currentItem, setCurrentItem] = useState<null | number>(null);
  const [hovering, setHovering] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            ease: "elastic.out(1,0.3)",
            stagger: 0.2,
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100px",
              end: "bottom center",
              toggleActions: "play none none none",
            },
          },
        );
      });
    }, component);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mousePos = { x: e.clientX, y: e.clientY + window.scrollY };
      const speed = Math.sqrt(Math.pow(mousePos.x - lastMousePos.current.x, 2));

      if (currentItem !== null) {
        const maxY = window.scrollY + window.innerHeight - 350;
        const maxX = window.innerWidth - 250;

        gsap.to(revealRef.current, {
          x: gsap.utils.clamp(0, maxX, mousePos.x - 110),
          y: gsap.utils.clamp(0, maxY, mousePos.y - 160),
          rotation: speed * (mousePos.x > lastMousePos.current.x ? 1 : -1),
          ease: "back.out(2)",
          duration: 1.3,
        });
        gsap.to(revealRef.current, {
          opacity: hovering ? 1 : 0,
          visibility: "visible",
          ease: "power3.out",
          duration: 0.4,
        });
      }

      lastMousePos.current = mousePos;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hovering, currentItem]);

  const contentImages = items.map(
    (item) => item.hoverImage?.src ?? fallbackItemImage.src,
  );

  useEffect(() => {
    contentImages.forEach((url) => {
      if (!url) return;
      const img = new Image();
      img.src = url;
    });
  }, [contentImages]);

  return (
    <>
      <ul
        ref={component}
        className="grid w-full border-b border-b-slate-100"
        onMouseLeave={() => {
          setHovering(false);
          setCurrentItem(null);
        }}
      >
        {items.map((item, index) => (
          <li
            key={item.uid}
            ref={(el) => {
              itemsRef.current[index] = el;
            }}
            onMouseEnter={() => {
              setCurrentItem(index);
              if (!hovering) setHovering(true);
            }}
            className="list-item opacity-0"
          >
            <Link
              href={`${urlPrefix}/${item.uid}`}
              className="flex w-full flex-col justify-between gap-8 border-t border-t-slate-100 py-14 text-slate-200 md:flex-row md:items-center md:gap-12 md:py-16"
              aria-label={item.title}
            >
              <div className="flex flex-1 flex-col gap-2">
                <span className="text-4xl font-extrabold tracking-tight md:text-5xl">
                  {item.title}
                </span>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-yellow-400">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xl font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="ml-auto flex shrink-0 items-center gap-2 text-2xl font-medium md:ml-0 md:min-w-[220px] md:justify-end">
                {viewMoreText} <MdArrowOutward />
              </span>
            </Link>
          </li>
        ))}

        <div
          className="hover-reveal pointer-events-none absolute left-0 top-0 -z-10 h-[320px] w-[220px] rounded-lg bg-cover bg-center opacity-0 transition-[background] duration-300"
          style={{
            backgroundImage:
              currentItem !== null ? `url(${contentImages[currentItem]})` : "",
          }}
          ref={revealRef}
        ></div>
      </ul>
    </>
  );
}
