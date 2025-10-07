'use client';

import { useEffect, useMemo, useState } from "react";
import PhotoAlbum, { type Photo } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "react-photo-album/styles.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import { cld } from "@/lib/cloudinary";

type Artwork = {
  id: string;
  alt: string;
  title?: string;
  year?: number;
  medium?: string;
  dimensions?: string;
  collection?: string;
  width: number;
  height: number;
};

const full = (id: string) => cld.full(id, 2400, "fit", 85);
const thumb = (id: string) => cld.full(id, 1200, "fit", 80);

export default function GalleryPage() {
  const [artworks, setArtworks] = useState<Artwork[] | null>(null);
  const [index, setIndex] = useState<number>(-1);


  useEffect(() => {
  (async () => {
    const res = await fetch("/api/artworks?folder=Art Site Gallery", { cache: "no-store" });
    const json = await res.json();
    setArtworks(json.artworks || []);
  })();
}, []);

  const photos: Photo[] = useMemo(() => {
    if (!artworks) return [];
    return artworks.map(a => ({
      src: thumb(a.id),
      width: a.width,
      height: a.height,
      alt: a.alt || a.title || a.id,
    }));
  }, [artworks]);

  const selected = index >= 0 && artworks ? artworks[index] : null;

  return (
   <main className="px-4">
  <div className="mx-auto max-w-[90%] lg:max-w-[95%] pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16">
    <h1 className="mb-6 text-3xl font-medium tracking-tight">Gallery</h1>

        {!artworks ? (
          <div className="p-6 text-sm text-neutral-500">Loading images…</div>
        ) : artworks.length === 0 ? (
          <div className="p-6 text-sm text-neutral-500">No artworks found.</div>
        ) : (
          <PhotoAlbum
            layout="masonry"
            photos={photos}
            columns={3} 
            spacing={20}
            padding={0}
            onClick={({ index }) => setIndex(index)}
          />
        )}

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={Math.max(0, index)}
          slides={(artworks || []).map((a) => ({
            src: full(a.id),
            alt: a.alt || a.title || a.id,
            title: a.title || a.id,
            description: [
              a.year ? String(a.year) : null,
              a.medium || null,
              a.dimensions || null
            ].filter(Boolean).join(" · "),
          }))}
          plugins={[Zoom, Captions]}
          controller={{ closeOnBackdropClick: true }}
          captions={{
            descriptionTextAlign: "start",
            descriptionMaxLines: 4,
          }}
        />

        {selected && (
          <div className="mt-10 rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-xl font-medium tracking-tight">{selected.title || selected.id}</h2>
            <p className="mt-1 text-neutral-700">
              {[selected.year, selected.medium, selected.dimensions].filter(Boolean).join(" · ")}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}