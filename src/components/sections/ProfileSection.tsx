"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { profileData } from "@/data/profile";

export const ProfileSection = () => {
  return (
    <section className="py-20 bg-card">
      <Container>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Profil Desa
          </h2>
          <p className="text-muted-foreground text-lg">
            Mengenal lebih dekat {profileData.namaDesa}
          </p>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT - SEJARAH */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Sejarah Singkat</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {profileData.sejarah}
            </p>

            <h3 className="text-2xl font-semibold mb-3">Visi</h3>
            <p className="italic text-primary mb-6">{profileData.visi}</p>

            <h3 className="text-2xl font-semibold mb-3">Misi</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {profileData.misi.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT - PERANGKAT DESA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Struktur Pemerintahan Desa
              </h3>
              <ul className="divide-y divide-border">
                {profileData.perangkat.map((item, idx) => (
                  <li key={idx} className="py-3 flex justify-between">
                    <span className="text-muted-foreground">
                      {item.jabatan}
                    </span>
                    <span className="font-medium text-foreground">
                      {item.nama}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
