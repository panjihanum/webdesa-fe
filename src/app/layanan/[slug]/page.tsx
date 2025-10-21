"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { servicesData } from "@/data/services";

interface Props {
  params: { slug: string };
}

export default function LayananDetailPage({ params }: Props) {
  const layanan = servicesData.find((s) => s.slug === params.slug);
  if (!layanan) return notFound();

  return (
    <main className="py-20 bg-background">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">{layanan.icon}</span>
            <h1 className="text-3xl font-bold text-foreground">
              {layanan.title}
            </h1>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-8">
            {layanan.description}
          </p>

          <div className="bg-card border border-border rounded-xl p-6 space-y-3">
            <h2 className="font-semibold text-lg text-foreground">
              Cara Pengajuan
            </h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>
                Datang ke kantor desa atau isi formulir online (jika tersedia).
              </li>
              <li>
                Siapkan dokumen pendukung seperti KTP, KK, atau surat terkait.
              </li>
              <li>Proses verifikasi dilakukan oleh petugas desa.</li>
              <li>Surat akan diterbitkan maksimal 2–3 hari kerja.</li>
            </ul>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/layanan"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
            >
              ← Kembali ke Daftar Layanan
            </Link>
          </div>
        </motion.div>
      </Container>
    </main>
  );
}
