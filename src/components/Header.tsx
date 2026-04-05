import React from "react";

import NavBar from "@/components/NavBar";
import { siteData } from "@/data";

export default function Header() {
  const settings = siteData.settings;
  return (
    <header className="top-0 z-50 mx-auto max-w-[1920px] md:sticky md:top-4">
      <NavBar
        name={settings.name}
        navItems={settings.navItems}
        ctaLabel={settings.ctaLabel}
        ctaLink={settings.ctaLink}
      />
    </header>
  );
}
