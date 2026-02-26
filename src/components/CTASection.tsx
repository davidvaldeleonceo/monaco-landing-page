"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="relative py-16 px-5 sm:py-20 lg:py-36 lg:px-8 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-accent/[0.03] rounded-full blur-[100px] lg:w-[600px] lg:h-[300px] lg:blur-[120px]" />

      <div className="max-w-3xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-8 h-px bg-accent/40 mx-auto mb-7 lg:w-10 lg:mb-10" />

          <h2 className="text-[1.75rem] font-bold tracking-[-0.02em] sm:text-3xl lg:text-[3.25rem] lg:leading-[1.08]">
            &iquest;Listo para la
            <br />
            <span className="bg-gradient-to-r from-accent via-[#e0c96a] to-accent bg-clip-text text-transparent">
              experiencia premium?
            </span>
          </h2>
          <p className="mt-4 text-white/35 max-w-[280px] mx-auto leading-relaxed text-[14px] sm:max-w-md sm:text-[15px] lg:mt-7">
            Reserva tu cita hoy y descubre por qu&eacute; somos la referencia en
            detailing de motos.
          </p>
          <div className="mt-8 flex flex-col gap-3 px-4 sm:flex-row sm:justify-center sm:gap-4 sm:px-0 lg:mt-10">
            <Link
              href="/contacto"
              className="block text-center bg-accent text-black font-semibold px-8 py-3.5 rounded-full hover:bg-accent-hover hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(192,164,77,0.25)] active:scale-[0.97] transition-all duration-300 text-sm sm:inline-block sm:px-10 sm:py-4"
            >
              Reservar Cita
            </Link>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center border border-white/[0.12] text-white/70 font-medium px-8 py-3.5 rounded-full hover:border-white/25 hover:bg-white/[0.04] hover:text-white active:scale-[0.97] transition-all duration-300 text-sm sm:inline-block sm:px-10 sm:py-4"
            >
              WhatsApp Directo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
