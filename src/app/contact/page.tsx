"use client";

import Image from "next/image";
import { cld } from "@/lib/cloudinary";

const HERO_ID = "DSC_5435_wjaujb";
const FOOTER_IMAGE_ID = "DSC_5440_qkkwuz";

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <Image
          src={cld.full(FOOTER_IMAGE_ID, 3000, "fit", 85)}
          alt="Background artwork"
          fill
          sizes="100vw"
          className="object-cover opacity-65 blur-[1px]"
          priority
        />
        <div className="absolute inset-0 bg-[#dceeff]/40" />
      </div>

      <section className="relative h-[88svh] sm:h-[92svh] lg:h-[100svh]">
        <Image
          src={cld.full(HERO_ID, 3000, "fit", 85)}
          alt="Contact page hero artwork"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
        <div className="absolute inset-0 flex items-end justify-start pb-16 pl-8 pr-4">
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase text-white drop-shadow-lg max-w-xl leading-snug">
            For pricing and available work please use contact form below
          </h1>
        </div>
      </section>

      <section className="flex-1 max-w-2xl mx-auto w-full px-6 py-20">
        <div className="bg-[#e9ecfa]/95 rounded-xl shadow-lg p-10 sm:p-12 backdrop-blur-sm">
          <form
            className="space-y-6"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const formData = new FormData(form);

              const data = {
                name: formData.get("name"),
                email: formData.get("email"),
                message: formData.get("message"),
              };

              const res = await fetch("/contact/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
              });

              if (res.ok) {
                alert("Message sent successfully!");
                form.reset();
              } else {
                alert("Something went wrong. Please try again later.");
              }
            }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border border-neutral-300 px-4 py-2 focus:border-black focus:ring-black"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border border-neutral-300 px-4 py-2 focus:border-black focus:ring-black"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1 block w-full rounded-md border border-neutral-300 px-4 py-2 focus:border-black focus:ring-black"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-neutral-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="relative w-full overflow-hidden mt-8">
        <Image
          src={cld.full(FOOTER_IMAGE_ID, 2800, "fit", 85)}
          alt="Henry Stoner artwork"
          width={2800}
          height={200}
          sizes="100vw"
          className="w-full h-[200px] object-cover object-top"
          priority
        />
      </section>
    </main>
  );
}