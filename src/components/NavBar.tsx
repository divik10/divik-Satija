"use client";

import clsx from "clsx";
import React, { useState } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import Button from "./Button";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/data";

export default function NavBar({
  name,
  navItems,
  ctaLabel,
  ctaLink,
}: {
  name: string;
  navItems: NavItem[];
  ctaLabel: string;
  ctaLink: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-col justify-between rounded-b-lg bg-slate-50 px-3 py-2.5 md:m-2 md:flex-row md:items-center md:rounded-xl md:px-5 md:py-3.5 lg:px-6">
        <div className="flex items-center justify-between">
          <NameLogo name={name} />
          <button
            aria-expanded={open}
            aria-label="Open menu"
            className="block p-2 text-3xl text-slate-800 md:hidden"
            onClick={() => setOpen(true)}
          >
            <MdMenu />
          </button>
        </div>
        <div
          className={clsx(
            "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden",
            open ? "translate-x-0" : "translate-x-[100%]",
          )}
        >
          <button
            aria-label="Close menu"
            aria-expanded={open}
            className="fixed right-4 top-3 block p-2 text-3xl text-slate-800 md:hidden "
            onClick={() => setOpen(false)}
          >
            <MdClose />
          </button>
          {navItems.map(({ href, label }, index) => (
            <React.Fragment key={label}>
              <li className="first:mt-8">
                <Link
                  className={clsx(
                    "group relative block overflow-hidden rounded px-3 py-1 text-[2.35rem] font-bold text-slate-900 ",
                  )}
                  href={href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === href ? "page" : undefined}
                >
                  <span
                    className={clsx(
                      "absolute inset-x-2 bottom-0 z-0 h-1.5 rounded-full bg-yellow-300 transition-transform duration-300 ease-in-out",
                      pathname === href
                        ? "translate-y-0 opacity-100"
                        : "translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
                    )}
                  />
                  <span className="relative">{label}</span>
                </Link>
              </li>
              {index < navItems.length - 1 && (
                <span
                  className="hidden text-4xl font-thin leading-[0] text-slate-400 md:inline"
                  aria-hidden="true"
                >
                  /
                </span>
              )}
            </React.Fragment>
          ))}
          <li>
            <Button
              link={ctaLink}
              label={ctaLabel}
              className="ml-3"
            />
          </li>
        </div>
        <DesktopMenu
          navItems={navItems}
          pathname={pathname}
          ctaLabel={ctaLabel}
          ctaLink={ctaLink}
        />
      </ul>
    </nav>
  );
}

function NameLogo({ name }: { name: string }) {
  return (
    <Link
      href="/"
      aria-label="Home page"
      className="text-[1.65rem] font-extrabold tracking-tighter text-slate-900 md:text-[1.7rem]"
    >
      {name}
    </Link>
  );
}

function DesktopMenu({
  navItems,
  pathname,
  ctaLabel,
  ctaLink,
}: {
  navItems: NavItem[];
  pathname: string;
  ctaLabel: string;
  ctaLink: string;
}) {
  return (
    <div className="relative z-50 hidden flex-row items-center gap-3 bg-transparent py-0 md:flex">
      {navItems.map(({ href, label }, index) => (
        <React.Fragment key={label}>
          <li>
            <Link
              className={clsx(
                "group relative block overflow-hidden rounded px-3 py-2 text-base font-bold text-slate-900 lg:px-4 lg:text-lg",
              )}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
            >
              <span
                className={clsx(
                  "absolute inset-x-2 bottom-0 z-0 h-1.5 rounded-full bg-yellow-300 transition-all duration-300 ease-in-out",
                  pathname === href
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100",
                )}
              />
              <span className="relative">{label}</span>
            </Link>
          </li>
          {index < navItems.length - 1 && (
            <span
              className="hidden text-5xl font-thin leading-[0] text-slate-400 md:inline"
              aria-hidden="true"
            >
              /
            </span>
          )}
        </React.Fragment>
      ))}
      <li>
        <Button link={ctaLink} label={ctaLabel} className="ml-3" />
      </li>
    </div>
  );
}
