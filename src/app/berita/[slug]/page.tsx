"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { newsData } from "@/data/news";

interface Props {
  params: { slug: string };
}

export default function BeritaDetailPage({ params }: Props) {
  const berita = newsData.find((b) => b.slug === params.slug);
  if (!berita) return notFound();

  return (
    <main className="py-20 bg-background">
      <Container>
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[400px] rounded-xl overflow-hidden border border-border mb-10"
        >
          <Image
            src={berita.image}
            alt={berita.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>

        {/* CONTENT */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {berita.title}
          </h1>
          <p className="text-muted-foreground text-sm mb-6">
            Diterbitkan pada{" "}
            {new Date(berita.date).toLocaleDateString("id-ID", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            {berita.excerpt}
          </p>

          {/* Dummy content tambahan */}
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Kegiatan ini merupakan bagian dari komitmen pemerintah desa untuk
              terus memperbaiki fasilitas umum dan meningkatkan kualitas hidup
              warga. Semua elemen masyarakat ikut terlibat dalam pelaksanaan
              kegiatan tersebut.
            </p>
            <p>
              Diharapkan, dengan adanya kegiatan seperti ini, warga semakin
              sadar pentingnya kebersamaan dan menjaga lingkungan sekitar.
              Pemerintah desa juga berencana untuk menjadwalkan kegiatan serupa
              secara rutin setiap bulannya.
            </p>
          </div>
        </motion.article>
      </Container>
    </main>
  );
}
