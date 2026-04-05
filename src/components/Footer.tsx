import clsx from "clsx";
import React from "react";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { siteData } from "@/data";

export default function Footer() {
  const settings = siteData.settings;
  return (
    <Bounded as="footer" className="text-slate-600">
      <div className="container mx-auto mt-20 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row ">
        <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
          <Link
            href="/"
            className="text-[1.9rem] font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400 md:text-[2.1rem]"
          >
            {settings.name}
          </Link>
          <span
            className="hidden text-6xl font-extralight leading-[0] text-slate-400 sm:inline"
            aria-hidden={true}
          >
            /
          </span>
          <p className="text-lg text-slate-300 md:text-xl">
            © {new Date().getFullYear()} {settings.name}
          </p>
        </div>
        <nav className="navigation" aria-label="Footer Navigation">
          <ul className="flex items-center gap-1">
            {settings.navItems.map(({ href, label }, index) => (
              <React.Fragment key={label}>
                <li>
                  <Link
                    className={clsx(
                      "group relative block overflow-hidden rounded px-3 py-1 text-xl font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400 md:px-4 md:text-2xl",
                    )}
                    href={href}
                  >
                    {label}
                  </Link>
                </li>
                {index < settings.navItems.length - 1 && (
                  <span
                    className="text-5xl font-thin leading-[0] text-slate-400"
                    aria-hidden="true"
                  >
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
        <div className="socials inline-flex justify-center sm:justify-end">
          {settings.socialLinks
            .filter((item) => item.platform === "github")
            .map((item) => (
            <Link
              key={item.platform}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-[2.35rem] text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400 md:text-[2.6rem]"
              aria-label={settings.name + " on GitHub"}
            >
              <FaGithub />
            </Link>
          ))}

          {settings.socialLinks
            .filter((item) => item.platform === "linkedin")
            .map((item) => (
            <Link
              key={item.platform}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-[2.35rem] text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400 md:text-[2.6rem]"
              aria-label={settings.name + " on LinkedIn"}
            >
              <FaLinkedin />
            </Link>
          ))}
        </div>
      </div>
    </Bounded>
  );
}
