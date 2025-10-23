"use client";

import Image from "next/image";
import { cld } from "@/lib/cloudinary";

const HERO_ID = "DSC_5435_wjaujb";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      <section className="relative w-full md:w-1/2 h-[50vh] md:h-screen">
        <Image
          src={cld.full(HERO_ID, 3000, "fit", 85)}
          alt="Contact page hero artwork"
          fill
          sizes="50vw"
          priority
          className="object-cover"
        />
      </section>

      <section className="w-full md:w-1/2 bg-[#e6e6fa] flex items-center justify-center px-6 py-12 md:py-20">
        <div className="w-full max-w-xl">
          <h1 className="text-3xl sm:text-4xl font-bold uppercase text-neutral-900 mb-4 leading-tight">
            Contact for available work and pricing
          </h1>
          
          <p className="text-base sm:text-lg text-neutral-700 mb-10">
            Henry's studio is open to collectors, collaborators, and the curious.
          </p>

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
              <label htmlFor="name" className="block text-sm font-medium text-neutral-800 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full rounded-md border-2 border-pink-300 bg-[#d4c5e8] px-4 py-3 focus:border-[#ff1493] focus:ring-2 focus:ring-[#ff1493] focus:outline-none transition"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-800 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="block w-full rounded-md border-2 border-pink-300 bg-[#d4c5e8] px-4 py-3 focus:border-[#ff1493] focus:ring-2 focus:ring-[#ff1493] focus:outline-none transition"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-800 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="block w-full rounded-md border-2 border-pink-300 bg-[#d4c5e8] px-4 py-3 focus:border-[#ff1493] focus:ring-2 focus:ring-[#ff1493] focus:outline-none transition resize-none"
                required
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-neutral-900 text-white py-3 px-6 rounded-md font-semibold uppercase tracking-wide hover:bg-neutral-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

