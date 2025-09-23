import type { ImageLoaderProps } from "next/image";

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export default function cloudinaryLoader({ src, width, quality }: ImageLoaderProps) {
  if (!CLOUD_NAME) {
    throw new Error("Missing NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME");
  }
  const q = quality ?? 70;
  // f_auto = best format (AVIF/WebP), q_auto-like quality with our default, c_fill crops to box
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_${q},c_fill,w_${width}/${src}`;
}