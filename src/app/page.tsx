import Link from "next/link";
import Image from "next/image";
import { cld } from "@/lib/cloudinary";

const HERO_ID = "BBE0440C-277E-487F-9901-2F1BC56BCCE4_1_201_a_lciyka"; 

const landingTexts = [
  "Henry’s work bridges traditional folk motifs and styles with modern experimentation.",
  "I love finding some discarded object or piece of furniture and using it to draw inspiration for a piece, to play and find new life in the seemingly useless.      -Henry Stoner",
  "Art is a state of mind, not a physical act.     -Henry Stoner",
];

const LANDING_IMAGES = [
  "8129D996-8381-453D-9304-10539891DACC_1_201_a_pzp5yl",
  "EA890C99-286E-4F26-AE05-82C713CEA586_1_201_a_vchdfm",
  "7048F535-7194-4BE0-9BEE-D37E05232CA9_1_201_a_znalom",
];

export default function Home() {
  return (
    <main>
      <section className="relative h-[88svh] sm:h-[92svh] lg:h-[100svh]">
        <Image
          src={cld.full(HERO_ID, 3000, "fit", 85)}
          alt="Hero artwork"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center text-white drop-shadow transform-gpu translate-y-5 sm:translate-y-14 -translate-x-[16px] sm:-translate-x-[48px]">
            <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-wide">
              Henry Stoner
            </h1>
            <div className="mt-8">
              <Link href="/gallery" className="underline underline-offset-4">
                Explore the Gallery →
              </Link>
            </div>
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
          artists using found materials. Henry says, &quot;All of my influences
          converge in my painting. There is art to be found everywhere.&quot;
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-20 space-y-24">
  {LANDING_IMAGES.map((id, idx) => {
    const text = landingTexts[idx];

    const isQuote = idx > 0;
    let quote = "";
    let attribution = "";
    if (isQuote) {
      const parts = text.split("-Henry Stoner");
      quote = parts[0].trim();
      attribution = "-Henry Stoner";
    }

    return (
      <div
        key={id}
        className={`flex flex-col items-center gap-8 sm:gap-12 lg:gap-24 ${
          idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="flex-1">
          <Image
            src={cld.full(id, 2000, "fit", 85)}
            alt={`Landing page image ${idx + 1}`}
            width={800}
            height={600}
            className="w-full h-auto object-cover shadow-md"
          />
        </div>

        <div className="flex-1 flex items-center justify-center text-center">
          {!isQuote ? (
            <p className="font-bold italic text-lg sm:text-xl text-neutral-700 leading-relaxed max-w-md">
              {text}
            </p>
          ) : (
            <div className="max-w-md">
              <p className="font-bold italic text-lg sm:text-xl text-neutral-700 leading-relaxed mb-2">
                “{quote}”
              </p>
              <p className="italic text-base sm:text-lg text-neutral-600">
                {attribution}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  })}
</section>
    </main>
  );
}