import Link from "next/link";
import Image from "next/image";
import { cld } from "@/lib/cloudinary";

const HERO_ID = "BBE0440C-277E-487F-9901-2F1BC56BCCE4_1_201_a_lciyka";

const bioText = `Henry Stoner was born in Santa Monica, California in 1972. He has an
MFA from the San Francisco Art Institute (SFAI), and has been painting
since the late 1980's. Henry was influenced by the burgeoning tattoo
and street art culture of San Francisco in the 1990's and by folk
artists using found materials. Henry says, "All of my influences
converge in my painting. There is art to be found everywhere."`;

const LANDING_IMAGES = [
  "8129D996-8381-453D-9304-10539891DACC_1_201_a_pzp5yl",
  "EA890C99-286E-4F26-AE05-82C713CEA586_1_201_a_vchdfm",
  "DSC_5427_y5qvfe",
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
    className="object-cover object-[50%_30%]"
  />
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

  <div className="absolute inset-0 flex items-end justify-start pb-16 pl-8 pr-4">
    <div className="text-white drop-shadow-lg max-w-xl leading-snug">
      <h1 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-wide">
        Henry Stoner
      </h1>
      <div className="mt-8">
  <Link
    href="/gallery"
    className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-md text-white font-semibold uppercase tracking-wider transition-colors duration-300 hover:text-yellow-400 hover:drop-shadow-[0_0_10px_rgba(252,211,77,0.9)]"
  >
    Explore the Gallery
  </Link>
</div>
    </div>
  </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 order-2 md:order-1 text-left">
            <p className="italic text-lg sm:text-xl text-neutral-700 leading-relaxed mb-2">
              "I love finding some discarded object or piece of furniture and
              using it to draw inspiration for a piece, to play and find new life
              in the seemingly useless."
            </p>
            <p className="italic text-[0.85rem] text-neutral-500">
              –Henry Stoner
            </p>
          </div>
          <div className="flex-1 order-1 md:order-2 transition-transform duration-700 ease-out hover:scale-[1.03] opacity-0 translate-y-6 animate-fade-in-on-scroll">
            <Image
              src={cld.full(LANDING_IMAGES[0], 2000, "fit", 85)}
              alt="Landing image 1"
              width={800}
              height={600}
              className="w-full h-auto object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-2 sm:pt-4 pb-14 sm:pb-18">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 transition-transform duration-700 ease-out hover:scale-[1.03] opacity-0 translate-y-6 animate-fade-in-on-scroll">
            <Image
              src={cld.full(LANDING_IMAGES[1], 2000, "fit", 85)}
              alt="Landing image 2"
              width={800}
              height={600}
              className="w-full h-auto object-cover shadow-md"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="italic text-2xl sm:text-3xl text-neutral-800 mb-4">
              About Henry
            </h2>
            <p className="text-neutral-700 leading-relaxed max-w-md mx-auto md:mx-0">
              {bioText}
            </p>
          </div>
        </div>
      </section>

      <section className="px-0 pt-8 pb-20 sm:pt-12 sm:pb-24">
        <div className="w-full overflow-hidden">
          <Image
            src={cld.full(LANDING_IMAGES[2], 3000, "fit", 85)}
            alt="Landing image 3"
            width={1600}
            height={800}
            className="w-full h-auto object-cover shadow-md scale-110"
          />
        </div>
        <div className="text-center mt-10">
          <p className="italic text-lg sm:text-xl text-neutral-700 leading-relaxed mb-2">
            "Art is a state of mind, not a physical act."
          </p>
          <p className="italic text-[0.85rem] text-neutral-500">
            –Henry Stoner
          </p>
        </div>
      </section>
    </main>
  );
}