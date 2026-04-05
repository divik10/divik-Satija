import Image from "next/image";

import type { ImageBlock as ImageBlockProps } from "@/data";

export default function ImageBlock({ image }: ImageBlockProps) {
  return (
    <div className="not-prose my-10 max-w-none md:my-14 lg:my-16">
      <Image
        src={image.src}
        alt={image.alt}
        width={1600}
        height={1200}
        className="h-auto w-full rounded-md"
      />
    </div>
  );
}
