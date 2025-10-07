import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-screen flex items-center justify-between py-6 px-4 sm:px-6 lg:px-12 z-50 bg-white">
      <Link href="/" className="font-bold uppercase tracking-tight">
        Henry Stoner
      </Link>
      <nav className="text-sm text-neutral-600">
        <ul className="flex gap-6">
          <li>
            <Link href="/gallery" className="hover:underline underline-offset-4">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline underline-offset-4">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline underline-offset-4">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}