import Link from "next/link";
import { siteConfig } from "@/constants/site";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

export const FooterExtended = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-10">
        {/* 1️⃣ PROFIL DESA */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">{siteConfig.name}</h3>
          <p className="text-sm opacity-90 mb-4">{siteConfig.description}</p>
          <p className="flex items-start gap-2 text-sm opacity-90">
            <MapPin size={16} className="mt-0.5" />
            {siteConfig.contact.address}
          </p>
          <p className="flex items-center gap-2 text-sm opacity-90 mt-1">
            <Phone size={16} /> {siteConfig.contact.phone}
          </p>
          <p className="flex items-center gap-2 text-sm opacity-90 mt-1">
            <Mail size={16} /> {siteConfig.contact.email}
          </p>
        </div>

        {/* 2️⃣ NAVIGASI CEPAT */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Navigasi Cepat</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li>
              <Link href="/" className="hover:underline text-white">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/profil" className="hover:underline text-white">
                Profil Desa
              </Link>
            </li>
            <li>
              <Link href="/berita" className="hover:underline text-white">
                Berita
              </Link>
            </li>
            <li>
              <Link href="/galeri" className="hover:underline text-white">
                Galeri
              </Link>
            </li>
            <li>
              <Link href="/layanan" className="hover:underline text-white">
                Layanan
              </Link>
            </li>
            <li>
              <Link href="/kontak" className="hover:underline text-white">
                Kontak
              </Link>
            </li>
          </ul>
        </div>

        {/* 3️⃣ SOSIAL MEDIA */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Ikuti Kami</h3>
          <div className="flex gap-4">
            <Link
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition"
            >
              <Instagram size={20} />
            </Link>
          </div>
          <p className="text-sm opacity-90 mt-4">
            Tetap terhubung untuk informasi terbaru kegiatan desa.
          </p>
        </div>
      </div>

      {/* 4️⃣ COPYRIGHT */}
      <div className="border-t border-primary-foreground/20 py-4 text-center text-sm opacity-80">
        © {new Date().getFullYear()} {siteConfig.name}. Semua hak dilindungi.
      </div>
    </footer>
  );
};
