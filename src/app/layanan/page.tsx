"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { servicesData } from "@/data/services";

export default function LayananPage() {
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
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Layanan Publik Desa
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Daftar layanan publik yang tersedia untuk warga{" "}
            <span className="text-primary font-medium">Desa Suka Maju</span>.
            Klik salah satu untuk melihat detail pengajuan.
          </p>
        </motion.div>

        {/* GRID LAYANAN */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service) => (
            <Link
              key={service.id}
              href={`/layanan/${service.slug}`}
              className="group bg-card border border-border rounded-xl p-6 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div>
                <div className="text-5xl mb-4 text-primary">{service.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-4 text-primary font-medium text-sm">
                Lihat detail →
              </div>
            </Link>
          ))}
        </motion.div>
      </Container>
    </main>
  );
}
