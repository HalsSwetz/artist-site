import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center p-6">
      <div className="text-center">
        <h1 className="text-4xl font-medium tracking-tight">Artist Site Starter</h1>
        <p className="mt-4 text-neutral-600">Next.js + Tailwind + Cloudinary</p>
        <div className="mt-8">
          <Link href="/gallery" className="underline underline-offset-4">
            Go to Gallery Test →
          </Link>
        </div>
      </div>
    </main>
  );
}