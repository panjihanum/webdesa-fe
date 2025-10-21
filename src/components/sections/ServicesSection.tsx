"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { servicesData } from "@/data/services";

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-muted/20">
      <Container>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            Layanan Desa
          </h2>
          <p className="text-muted-foreground text-lg">
            Kemudahan layanan publik untuk seluruh warga{" "}
            <span className="text-primary font-medium">Desa Suka Maju</span>.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {servicesData.map((service) => (
            <Link
              key={service.id}
              href={service.slug}
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
                Selengkapnya →
              </div>
            </Link>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/layanan"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition"
          >
            Lihat Semua Layanan
          </Link>
        </div>
      </Container>
    </section>
  );
};
