import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "800"], 
});


export const metadata = {
  title: {
    default: "Henry Stoner",
    template: "%s · Henry Stoner",
  },
  description: "Paintings and original works by Henry Stoner, San Francisco-based artist influenced by tattoo culture, street art, and folk art.",
  openGraph: {
    title: "Henry Stoner",
    description: "Paintings and original works by Henry Stoner, San Francisco-based artist influenced by tattoo culture, street art, and folk art.",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Henry Stoner",
    description: "Paintings and original works by Henry Stoner, San Francisco-based artist influenced by tattoo culture, street art, and folk art.",
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