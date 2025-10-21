"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/constants/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/profil", label: "Profil Desa" },
  { href: "/berita", label: "Berita" },
  { href: "/galeri", label: "Galeri" },
  { href: "/layanan", label: "Layanan" },
  { href: "/kontak", label: "Kontak" },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link href="/" className="font-semibold text-lg text-green-700">
          {siteConfig.name}
        </Link>
        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "hover:text-green-700 transition-colors",
                  pathname === link.href
                    ? "text-green-700 font-semibold"
                    : "text-gray-700"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
