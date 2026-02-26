"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Lavado B\u00e1sico",
    description:
      "Limpieza exterior completa con productos premium. Tu moto como nueva.",
    price: "Desde $XX",
    icon: (
      <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: "Detailing Completo",
    description:
      "Lavado profundo, descontaminaci\u00f3n, pulido y protecci\u00f3n. El tratamiento definitivo.",
    price: "Desde $XX",
    icon: (
      <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Protecci\u00f3n Cer\u00e1mica",
    description:
      "Coating cer\u00e1mico de larga duraci\u00f3n. Protecci\u00f3n superior contra los elementos.",
    price: "Desde $XX",
    icon: (
      <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export function ServicesPreview() {
  return (
    <section className="relative py-16 px-5 sm:py-20 lg:py-36 lg:px-8">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 lg:mb-20"
        >
          <p className="text-accent/80 text-[10px] font-semibold tracking-[0.35em] uppercase mb-3 lg:text-xs lg:tracking-[0.4em] lg:mb-4">
            Nuestros Servicios
          </p>
          <h2 className="text-[1.75rem] font-bold tracking-[-0.02em] sm:text-3xl lg:text-[3.25rem] lg:leading-none">
            Cuidado excepcional
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-3.5 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-surface-light/50 border border-white/[0.04] rounded-2xl p-6 sm:p-7 lg:p-8 hover:border-accent/20 hover:bg-surface-light transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-accent/[0.08] border border-accent/10 flex items-center justify-center text-accent mb-4 lg:w-11 lg:h-11 lg:mb-6">
                  {service.icon}
                </div>
                <h3 className="text-base font-semibold tracking-tight mb-2 lg:text-lg lg:mb-2.5">
                  {service.title}
                </h3>
                <p className="text-white/35 text-[13px] leading-relaxed mb-5 lg:mb-7">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.04] lg:pt-5">
                  <span className="text-accent font-semibold text-[13px] lg:text-sm">
                    {service.price}
                  </span>
                  <Link
                    href="/servicios"
                    className="text-white/30 text-[13px] hover:text-white/70 transition-colors"
                  >
                    M&aacute;s info &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10 lg:mt-14"
        >
          <Link
            href="/servicios"
            className="inline-block border border-white/[0.12] text-white/70 font-medium px-7 py-3 rounded-full hover:border-white/25 hover:bg-white/[0.04] hover:text-white hover:scale-[1.02] active:scale-[0.97] transition-all duration-300 text-sm lg:px-8 lg:py-3.5"
          >
            Ver Todos los Servicios
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
