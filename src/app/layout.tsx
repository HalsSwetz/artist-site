import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "800"], 
});


export const metadata = {
  title: {
    default: "Artist Name",
    template: "%s · Artist Name",
  },
  description: "Image-first portfolio of original works.",
  openGraph: {
    title: "Artist Name",
    description: "Image-first portfolio of original works.",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artist Name",
    description: "Image-first portfolio of original works.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-neutral-900 antialiased`}>
        <div className="mx-auto max-w-6xl px-4">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}