'use client';

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

import cloudinaryLoader from "@/lib/cloudinaryLoader";
import { cld } from "@/lib/cloudinary";
import type { Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

type Item = { id: string; alt: string };

const TEST_IMAGES: Item[] = [
  { id: "IMG_1388_jht4sc", alt: "Watchful Eye" },
  { id: "IMG_1382_hicmsw", alt: "Soul Surfing" },
];


export default function GalleryPage() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
  <main className="px-4">
    <div className="mx-auto max-w-6xl py-16">
      <h1 className="mb-8 text-3xl font-medium tracking-tight">Gallery Test</h1>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={TEST_IMAGES.map((img) => ({
          src: cld.full(img.id, 2400, "fit", 85),
          alt: img.alt,
        }))}
        plugins={[Zoom]}
      />

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.06 }}
      >
        {TEST_IMAGES.map((img, i) => (
          <motion.figure key={img.id} variants={itemVariants} className="group">
            <button
              type="button"
              onClick={() => { setIndex(i); setOpen(true); }}
              className="block w-full text-left"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("${cld.lqip(img.id)}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(12px)",
                    transform: "scale(1.05)",
                  }}
                />
                <Image
                  loader={cloudinaryLoader}
                  src={img.id}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="relative z-10 object-cover"
                />
              </div>
              <figcaption className="mt-2 text-sm text-neutral-600">{img.alt}</figcaption>
            </button>
          </motion.figure>
        ))}
      </motion.div>
    </div>
  </main>
);
}