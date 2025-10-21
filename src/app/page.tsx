import Link from "next/link";
import Image from "next/image";
import { cld } from "@/lib/cloudinary";

const HERO_ID = "BBE0440C-277E-487F-9901-2F1BC56BCCE4_1_201_a_lciyka";

const bioText = `Henry Stoner was born in Santa Monica, California in 1972. He has an
MFA from the San Francisco Art Institute (SFAI), and has been painting
since the late 1990's. Henry was influenced by the burgeoning tattoo
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
        <img
  src={`https://res.cloudinary.com/dghgutvux/image/upload/w_3000,c_fit,f_auto,q_85/${HERO_ID}`}
  alt="Hero artwork"
  className="absolute inset-0 w-full h-full object-cover object-[50%_30%]"
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

      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 relative">
          <div className="flex flex-col gap-8">
            <div className="w-full transition-transform duration-700 ease-out hover:scale-[1.02]">
              <Image
                src={cld.full(LANDING_IMAGES[0], 2000, "fit", 85)}
                alt="Landing image 1"
                width={800}
                height={1000}
                className="w-full h-auto object-cover shadow-lg"
              />
            </div>

            <div className="text-left">
              <h2 className="text-xl sm:text-2xl font-bold uppercase text-neutral-800 mb-4">
                About Henry
              </h2>
              <p className="text-base text-neutral-700 leading-relaxed">
                {bioText}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:gap-12">
            <div className="flex items-center text-left md:min-h-[35%]">
              <p className="text-xl sm:text-2xl font-bold uppercase text-neutral-800 leading-tight">
                "I love finding some discarded object or piece of furniture and
                using it to draw inspiration for a piece, to play and find new life
                in the seemingly useless."
              </p>
            </div>

            <div className="w-[75%] ml-auto transition-transform duration-700 ease-out hover:scale-[1.02]">
              <Image
                src={cld.full(LANDING_IMAGES[1], 1600, "fit", 85)}
                alt="Landing image 2"
                width={600}
                height={750}
                className="w-full h-auto object-cover shadow-lg"
              />
            </div>
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
        <div className="text-center mt-10 px-4">
          <p className="text-xl sm:text-2xl font-bold uppercase text-neutral-800 leading-tight">
            "Art is a state of mind, not a physical act."
          </p>
        </div>
      </section>
    </main>
  );
}