"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  Newspaper,
  Image as ImageIcon,
  MessageSquare,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: Home },
  { label: "Berita", href: "/admin/berita", icon: Newspaper },
  { label: "Galeri", href: "/admin/galeri", icon: ImageIcon },
  { label: "Pengaduan", href: "/admin/pengaduan", icon: MessageSquare },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-60 bg-primary flex flex-col p-4">
      <h2 className="text-lg font-bold mb-8 text-white">Admin Desa</h2>
      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg transition",
                active
                  ? "bg-primary-foreground text-primary"
                  : "hover:bg-primary-foreground/10"
              )}
            >
              <Icon size={18} color={active ? "lab(41.5195 -45.916 31.0557)" : "white"} />
              <span
                className={`text-sm font-medium ${
                  active ? "text-primary" : "text-white"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
