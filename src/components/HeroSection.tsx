"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0a0a0a_0%,#000_100%)]" />

      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/[0.05] rounded-full blur-[100px] lg:w-[600px] lg:h-[400px] lg:blur-[150px]" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-accent/80 text-[10px] font-semibold tracking-[0.35em] uppercase mb-5 lg:text-xs lg:tracking-[0.4em] lg:mb-10"
          >
            Lavado Premium de Motos
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] sm:text-[2.5rem] lg:text-[5.5rem]"
          >
            Tu moto merece
            <br />
            <span className="bg-gradient-to-r from-accent via-[#e0c96a] to-accent bg-clip-text text-transparent">
              lo mejor.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-4 text-[14px] text-white/40 max-w-[280px] mx-auto leading-relaxed sm:max-w-sm lg:text-lg lg:max-w-xl lg:mt-8"
          >
            Detailing profesional con los m&aacute;s altos est&aacute;ndares de
            calidad. Cada detalle importa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-7 flex flex-col gap-3 px-4 sm:flex-row sm:justify-center sm:gap-4 sm:px-0 lg:mt-12"
          >
            <Link
              href="/contacto"
              className="block text-center bg-accent text-black font-semibold px-8 py-3.5 rounded-full hover:bg-accent-hover hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(192,164,77,0.25)] active:scale-[0.97] transition-all duration-300 text-sm sm:inline-block"
            >
              Reservar Ahora
            </Link>
            <Link
              href="/servicios"
              className="block text-center border border-white/[0.12] text-white/80 font-medium px-8 py-3.5 rounded-full hover:border-white/25 hover:bg-white/[0.04] hover:text-white active:scale-[0.97] transition-all duration-300 text-sm sm:inline-block"
            >
              Ver Servicios
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - positioned to viewport */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:bottom-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[20px] h-[30px] border border-white/15 rounded-full flex justify-center lg:w-[22px] lg:h-[34px]"
        >
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4], y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[2.5px] h-[5px] bg-accent/60 rounded-full mt-1.5 lg:w-[3px] lg:h-[6px] lg:mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
