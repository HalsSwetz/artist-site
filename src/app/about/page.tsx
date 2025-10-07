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

  <div className="absolute inset-0 flex items-end justify-start pb-16 pl-8 pr-4">
    <h1 className="text-3xl sm:text-5xl font-extrabold uppercase text-white drop-shadow-lg max-w-xl leading-snug">
      All Art is Folk Art
    </h1>
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