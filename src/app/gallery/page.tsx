'use client';
import Image from "next/image";
import cloudinaryLoader from "@/lib/cloudinaryLoader";
import { cld } from "@/lib/cloudinary";

// const TEST_IMAGES = [
//   { id: "IMG_1388_jht4sc", alt: "Watchful Eye" },
//   { id: "IMG_1382_hicmsw", alt: "Soul Surfing" },
// ];

type Item = { id: string; alt: string };

export default function GalleryGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {items.map((img) => (
        <figure key={img.id} className="group">
          <div
            className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100"
            style={{
              backgroundImage: `url("${cld.lqip(img.id)}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(8px)",
            }}
          >
            <Image
              loader={cloudinaryLoader}
              src={img.id}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-2 text-sm text-neutral-600">{img.alt}</figcaption>
        </figure>
      ))}
    </div>
  );
}