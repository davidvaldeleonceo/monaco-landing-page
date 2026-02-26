"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  "Plan de negocio completo",
  "Equipamiento necesario",
  "T\u00e9cnicas profesionales",
  "Estrategias de marketing",
  "Gesti\u00f3n de clientes",
  "Soporte continuo",
];

export function CoursePreview() {
  return (
    <section className="relative py-16 px-5 bg-surface sm:py-20 lg:py-36 lg:px-8">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-10 items-center lg:grid-cols-2 lg:gap-20">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent/80 text-[10px] font-semibold tracking-[0.35em] uppercase mb-3 lg:text-xs lg:tracking-[0.4em] lg:mb-4">
              Curso Exclusivo
            </p>
            <h2 className="text-[1.75rem] font-bold tracking-[-0.02em] leading-tight sm:text-3xl lg:text-[3.25rem] lg:leading-[1.08]">
              Monta tu propio
              <br />
              <span className="bg-gradient-to-r from-accent via-[#e0c96a] to-accent bg-clip-text text-transparent">
                lavadero de motos.
              </span>
            </h2>
            <p className="mt-4 text-white/35 leading-relaxed text-[14px] lg:mt-7 lg:text-[15px]">
              Aprende todo lo que necesitas para emprender en el mundo del moto
              detailing. Desde cero hasta tener tu negocio funcionando.
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:mt-8 lg:gap-3">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.06 }}
                  className="flex items-center gap-2.5 text-[13px] text-white/50 lg:text-sm"
                >
                  <span className="w-1 h-1 bg-accent rounded-full shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-10 lg:gap-3.5">
              <Link
                href="/curso"
                className="block text-center bg-accent text-black font-semibold px-7 py-3 rounded-full hover:bg-accent-hover hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(192,164,77,0.2)] active:scale-[0.97] transition-all duration-300 text-sm sm:inline-block sm:px-8 sm:py-3.5"
              >
                M&aacute;s Informaci&oacute;n
              </Link>
              <Link
                href="/contacto"
                className="block text-center border border-white/[0.12] text-white/70 font-medium px-7 py-3 rounded-full hover:border-white/25 hover:bg-white/[0.04] hover:text-white active:scale-[0.97] transition-all duration-300 text-sm sm:inline-block sm:px-8 sm:py-3.5"
              >
                Reservar Plaza
              </Link>
            </div>
          </motion.div>

          {/* Visual - hidden on small mobile, compact on larger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="hidden sm:block relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-surface-light to-black border border-white/[0.04] flex items-center justify-center overflow-hidden lg:aspect-[4/5] lg:rounded-3xl">
              <div className="absolute top-8 right-8 w-24 h-24 bg-accent/[0.04] rounded-full blur-2xl lg:w-32 lg:h-32" />
              <div className="absolute bottom-12 left-8 w-20 h-20 bg-accent/[0.06] rounded-full blur-xl lg:w-24 lg:h-24" />

              <div className="text-center px-6 relative">
                <div className="text-[4rem] font-bold text-accent/[0.08] leading-none lg:text-[8rem]">
                  01
                </div>
                <div className="w-6 h-px bg-accent/30 mx-auto mt-3 mb-3 lg:w-8 lg:mt-4 lg:mb-4" />
                <p className="text-white/25 text-xs tracking-wide lg:text-sm">
                  Aprende paso a paso
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
