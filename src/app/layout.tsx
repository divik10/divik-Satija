import "./globals.css";
import clsx from "clsx";
import type { Metadata, Viewport } from "next";
import { Urbanist } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { siteData } from "@/data";

const urbanist = Urbanist({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: siteData.settings.meta.title,
    description: siteData.settings.meta.description,
    metadataBase: new URL(siteData.siteUrl),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: siteData.settings.meta.title,
      description: siteData.settings.meta.description,
      url: siteData.siteUrl,
      siteName: siteData.settings.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteData.settings.meta.title,
      description: siteData.settings.meta.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-900">
      <body
        suppressHydrationWarning
        className={clsx(urbanist.className, "relative min-h-screen antialiased")}
      >
        <Header />
        {children}
        <div className="background-gradient absolute inset-0 -z-50 max-h-screen" />
        <div className="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('/public_noisetexture.jpg')] opacity-20 mix-blend-soft-light"></div>
        <Footer />
      </body>
    </html>
  );
}
