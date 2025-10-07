import Image from "next/image";
import { cld } from "@/lib/cloudinary";

const HERO_ID = "DSC_5467_q2frn0";

export default function AboutPage() {
  const sketches = [
    "CECED7C5-6D24-4FE8-BD91-95C85924BBE3_1_201_a_cpggr7",
    "14C86B73-F5B5-4073-AB8E-B848932642DE_1_201_a_p4sdp7",
    "3F59B259-744D-4ECD-8854-DEC8A0D90FB3_1_201_a_ybqhp9",
    "F03634F0-470A-4DA5-8071-45B33F066291_1_201_a_zfeijj",
    "25415251-1ECA-4415-9118-4AB9327CA316_1_201_a_ohajsr",
    "BD798612-A17A-4AE2-BDE5-47B3D395BD19_1_201_a_ocwt54",
    "F7B326B7-E4CC-4A4B-BB10-427636BE3EE6_1_201_a_cr83we",
    "IMG_2179_iq2sjd",
    "421C47F3-A3B5-4368-82FA-A19AC80AE966_1_105_c_zwswph",
  ];

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
        <p className="mt-6 max-w-3xl text-neutral-700">
          Henry’s work is rooted in freedom and experimentation, guided more by curiosity than convention. While he received classical training, he has always resisted the rigid rules of the established art world, preferring to follow his instincts and make art with whatever materials come to hand. Blank pizza boxes, discarded cabinets, or objects found in thrift shops and on the street often become his canvases, with their shape, texture, and history directly inspiring the resulting pieces. For Henry, the notion that canvas is the only valid medium has never been true.
        </p>
        <p className="mt-6 max-w-3xl text-neutral-700">
          Deeply inspired by tattoo culture, graffiti, and the history of outsider art, Henry draws on patterns and motifs from traditional arts such as batik, reimagining them in contemporary, abstract, and street-oriented contexts. His studio is filled with collections of vintage tattoo flash paintings and reference books, informing his explorations of line, pattern, and color. Though he has not actively pursued gallery acclaim or institutional recognition, his work remains intensely personal and authentic, resonating with those who encounter it on its own unconventional terms.
        </p>
      </section>

<section className="mx-auto max-w-6xl px-4 pb-24">
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
    {sketches.map((id, index) => (
      <div
        key={index}
        className={`relative aspect-[4/5] rounded-lg overflow-hidden bg-neutral-100 shadow-md transition-transform duration-500 hover:scale-[1.04] ${
          index % 2 === 0 ? "rotate-[0.5deg]" : "-rotate-[0.5deg]"
        }`}
      >
        <Image
          src={cld.full(id, 1000, "fit", 85)}
          alt={`Henry Stoner sketch ${index + 1}`}
          fill
          sizes="33vw"
          className="object-contain p-3 sm:p-4"
        />
      </div>
    ))}
  </div>

  <p className="mt-8 text-sm text-neutral-500 text-center">
    Selected pages from Henry’s sketchbooks, 2010–2024.
  </p>
</section>
    </main>
  );
}