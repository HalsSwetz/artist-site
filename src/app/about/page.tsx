import Image from "next/image";
import { cld } from "@/lib/cloudinary";

const HERO_ID = "DSC_5467_q2frn0";

export default function AboutPage() {
  return (
    <main>
      <section className="relative h-[88svh] sm:h-[92svh] lg:h-[100svh]">
        <Image
          src={cld.full(HERO_ID, 3000, "fit", 85)}
          alt="About page hero artwork"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center text-white drop-shadow transform-gpu translate-y-5 sm:translate-y-14 -translate-x-[16px] sm:-translate-x-[48px]">
            <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-wide">
              All Art is Folk Art
            </h1>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center">
          <span className="text-[10px] sm:text-xs tracking-widest text-white/90 bg-black/30 rounded-full px-3 py-1">
            SCROLL
          </span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <p className="max-w-3xl text-neutral-700">
          Henry Stoner was born in Santa Monica, California in 1972. He has an
          MFA from the San Francisco Art Institute (SFAI), and has been painting
          since the late 1980&apos;s. Henry was influenced by the burgeoning tattoo
          and street art culture of San Francisco in the 1990&apos;s and by folk
          artists using found materials. 
        </p>
        <p className="mt-6 max-w-3xl text-neutral-700">
          His work spans decades of experimentation with texture, color, and
          unconventional materials, always holding onto the belief that &quot;all
          art is folk art.&quot; From urban walls to canvas to found objects,
          Henry&apos;s paintings reflect the convergence of cultures and everyday
          narratives that inspire him.
        </p>
      </section>
    </main>
  );
}