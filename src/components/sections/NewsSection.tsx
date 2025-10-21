"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { newsData } from "@/data/news";

export const NewsSection = () => {
  return (
    <section className="py-20 bg-background">
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
            Berita Terkini
          </h2>
          <p className="text-muted-foreground text-lg">
            Informasi dan kegiatan terbaru dari {` `}
            <span className="text-primary font-medium">Desa Suka Maju</span>
          </p>
        </motion.div>

        {/* NEWS GRID */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {newsData.map((item) => (
            <Link
              key={item.id}
              href={`/berita/${item.slug}`}
              className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg transition"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground mb-1">
                  {new Date(item.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {item.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </motion.div>

        {/* CTA LINK */}
        <div className="text-center mt-10">
          <Link
            href="/berita"
            className="text-primary font-medium hover:underline underline-offset-4"
          >
            Lihat semua berita →
          </Link>
        </div>
      </Container>
    </section>
  );
};
