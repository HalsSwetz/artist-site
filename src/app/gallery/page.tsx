'use client';

import "react-photo-album/styles.css";
import { useEffect, useMemo, useState } from "react";
import PhotoAlbum, { type Photo } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import { cld } from "@/lib/cloudinary";

// const BG_ID = "DSC_5531_aigx6p";


type Artwork = {
  id: string;        // Cloudinary public_id
  alt: string;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
  collection?: string;
};

const ARTWORKS: Artwork[] = [
  { id: "IMG_1388_jht4sc", alt: "Watchful Eye", title: "Watchful Eye", year: 2024, medium: "Oil on canvas",   dimensions: "24 × 36 in" },
  { id: "IMG_1382_hicmsw", alt: "Soul Surfing", title: "Soul Surfing", year: 2023, medium: "Acrylic on panel", dimensions: "18 × 24 in" },

];


const thumbSrc = (id: string) => cld.full(id, 1200, "fit", 80);
const fullSrc  = (id: string) => cld.full(id, 2400, "fit", 85);


function loadSize(src: string): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = reject;
    img.src = src;
  });
}

export default function GalleryPage() {
  const [index, setIndex] = useState<number>(-1);
  const [photos, setPhotos] = useState<Photo[] | null>(null);

  const thumbs = useMemo(
    () => ARTWORKS.map((a) => ({ a, src: thumbSrc(a.id) })),
    []
  );

  useEffect(() => {
    let mounted = true;
    (async () => {
      const measured = await Promise.all(
        thumbs.map(async ({ a, src }) => {
          const { width, height } = await loadSize(src);
          return { src, width, height, alt: a.alt } satisfies Photo;
        })
      );
      if (mounted) setPhotos(measured);
    })().catch(() => {});
    return () => { mounted = false; };
  }, [thumbs]);

  return (
    <main className="px-4">
      {/* <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden>
  <div
    className="absolute inset-0 bg-no-repeat bg-cover bg-center"
    style={{
      backgroundImage: `url("${cld.full(BG_ID, 3200, "fit", 80)}")`,
     backgroundSize: "120% auto",
    }}
  />
  <div className="absolute inset-0 bg-white/5 sm:bg-white/15" />
</div> */}
      <div className="mx-auto max-w-6xl py-12 sm:py-16">
        <h1 className="mb-6 text-3xl font-medium tracking-tight">Gallery</h1>
        <div className="rounded-3xl p-4 sm:p-6">
          {photos ? (
            <PhotoAlbum
              layout="masonry"
              photos={photos}
              columns={3}         
              spacing={16}         
              padding={0}
              onClick={({ index }) => setIndex(index)}
            />
          ) : (
            <div className="p-6 text-sm text-neutral-500">Loading images…</div>
          )}
        </div>


        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={Math.max(0, index)}
          slides={ARTWORKS.map((a) => ({
            src: fullSrc(a.id),
            alt: a.alt,
            title: a.title,
            description: `${a.year} · ${a.medium} · ${a.dimensions}`,
          }))}
          plugins={[Zoom, Captions]}
          carousel={{ finite: false }}
          controller={{ closeOnBackdropClick: true }}
   
          captions={{
            descriptionTextAlign: "start",
            descriptionMaxLines: 3,
          }}
        />
      </div>
    </main>
  );
}