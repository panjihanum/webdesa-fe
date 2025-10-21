"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { profileData } from "@/data/profile";
import Image from "next/image";

export default function ProfilDesaPage() {
  return (
    <main className="py-20 bg-background">
      <Container>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Profil Desa {profileData.namaDesa}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mengenal lebih dekat sejarah, visi, misi, dan perangkat pemerintahan
            {` `}
            <span className="text-primary font-medium">
              {profileData.namaDesa}
            </span>
            .
          </p>
        </motion.div>

        {/* SEJARAH DESA */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-start mb-16"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              Sejarah Singkat
            </h2>
            <p className="text-muted-foreground leading-relaxed text-justify">
              {profileData.sejarah}
            </p>
          </div>
          <div className="relative w-full h-[300px] rounded-xl overflow-hidden border border-border shadow-sm">
            <Image
              src="/images/hero-desa.jpg"
              alt="Foto Desa"
              fill
              className="object-cover"
            />
          </div>
        </motion.section>

        {/* VISI & MISI */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            Visi dan Misi
          </h2>
          <div className="bg-card border border-border rounded-xl p-6 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Visi</h3>
              <p className="italic text-muted-foreground">{profileData.visi}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-primary">Misi</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                {profileData.misi.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* STRUKTUR PEMERINTAHAN */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            Struktur Pemerintahan Desa
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {profileData.perangkat.map((p, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-5 text-center hover:shadow-md transition"
              >
                <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-muted flex items-center justify-center text-2xl font-bold text-primary">
                  {p.nama[0]}
                </div>
                <h3 className="font-semibold text-foreground">{p.nama}</h3>
                <p className="text-sm text-muted-foreground">{p.jabatan}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* INFO TAMBAHAN */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold mb-3 text-foreground">
            Potensi & Demografi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {profileData.namaDesa} memiliki potensi unggulan di bidang{" "}
            <span className="font-medium text-primary">pertanian</span>,
            <span className="font-medium text-primary"> perikanan</span>, dan{" "}
            <span className="font-medium text-primary">UMKM</span>. Dengan
            populasi ±3.500 jiwa, masyarakat hidup rukun dan gotong royong dalam
            membangun desa menuju kemandirian dan kesejahteraan bersama.
          </p>
        </motion.section>
      </Container>
    </main>
  );
}
