"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/constants/site";
import { Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";

export const ContactSection = () => {
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
            Hubungi Kami
          </h2>
          <p className="text-muted-foreground text-lg">
            Kami siap melayani Anda di{" "}
            <span className="text-primary font-medium">{siteConfig.name}</span>.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* KONTAK DETAIL */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">
                    Alamat Kantor
                  </h4>
                  <p className="text-muted-foreground">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-primary w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">
                    Nomor Telepon
                  </h4>
                  <Link
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-primary hover:underline"
                  >
                    {siteConfig.contact.phone}
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-primary w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <Link
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-primary hover:underline"
                  >
                    {siteConfig.contact.email}
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <Link
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* GOOGLE MAPS EMBED */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-xl overflow-hidden shadow-md border border-border h-[350px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.245387539869!2d110.332736!3d-7.858888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a55eae7a86db3%3A0xb769d93a2b6f0111!2sBalai%20Desa!5e0!3m2!1sid!2sid!4v1726315581000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
