'use client';
import Image from "next/image";
import cloudinaryLoader from "@/lib/cloudinaryLoader";

const TEST_IMAGES = [
  { id: "IMG_1388_jht4sc", alt: "Watchful Eye" },
  { id: "IMG_1382_hicmsw", alt: "Soul Surfing" },
];

export default function GalleryTestPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <h1 className="mb-8 text-3xl font-medium tracking-tight">Gallery Test</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {TEST_IMAGES.map((img) => (
          <figure key={img.id} className="group">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                loader={cloudinaryLoader}
                src={img.id}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <figcaption className="mt-2 text-sm text-neutral-600">{img.alt}</figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}