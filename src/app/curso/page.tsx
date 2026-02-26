"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const modules = [
  {
    number: "01",
    title: "Fundamentos del Negocio",
    topics: ["An\u00e1lisis de mercado", "Plan de negocio", "Inversi\u00f3n inicial", "Estructura legal"],
  },
  {
    number: "02",
    title: "Equipamiento y Productos",
    topics: ["Herramientas esenciales", "Productos profesionales", "Proveedores", "Montaje del espacio"],
  },
  {
    number: "03",
    title: "T\u00e9cnicas de Lavado",
    topics: ["Lavado seguro", "Descontaminaci\u00f3n", "Pulido avanzado", "Coating cer\u00e1mico"],
  },
  {
    number: "04",
    title: "Marketing y Ventas",
    topics: ["Redes sociales", "Fotograf\u00eda de resultados", "Estrategia de precios", "Fidelizaci\u00f3n"],
  },
  {
    number: "05",
    title: "Gesti\u00f3n y Crecimiento",
    topics: ["Gesti\u00f3n diaria", "Contabilidad b\u00e1sica", "Escalabilidad", "Casos de \u00e9xito"],
  },
];

const benefits = [
  { stat: "100%", label: "Pr\u00e1ctico" },
  { stat: "24/7", label: "Acceso total" },
  { stat: "1:1", label: "Mentor\u00eda" },
];

export default function CursoPage() {
  return (
    <div className="pt-12 lg:pt-14">
      {/* Hero */}
      <section className="py-14 px-5 text-center sm:py-16 lg:py-28 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent/80 text-[10px] font-semibold tracking-[0.35em] uppercase mb-3 lg:text-xs lg:tracking-[0.4em] lg:mb-4"
        >
          Curso Exclusivo
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[2rem] font-bold tracking-[-0.02em] leading-[1.1] sm:text-[2.5rem] lg:text-[4.5rem]"
        >
          Emprende con
          <br />
          <span className="bg-gradient-to-r from-accent via-[#e0c96a] to-accent bg-clip-text text-transparent">
            moto detailing.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 text-white/35 max-w-[280px] mx-auto leading-relaxed text-[14px] sm:max-w-md sm:text-[15px]"
        >
          Todo lo que necesitas saber para montar tu propio lavadero de motos
          desde cero. Sin experiencia previa.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-col gap-3 px-4 sm:flex-row sm:justify-center sm:gap-4 sm:px-0"
        >
          <Link
            href="/contacto"
            className="block text-center bg-accent text-black font-semibold px-7 py-3 rounded-full hover:bg-accent-hover hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(192,164,77,0.2)] active:scale-[0.97] transition-all duration-300 text-sm sm:inline-block sm:px-8 sm:py-3.5"
          >
            Reservar Plaza
          </Link>
          <a
            href="#modulos"
            className="block text-center border border-white/[0.12] text-white/70 font-medium px-7 py-3 rounded-full hover:border-white/25 hover:bg-white/[0.04] hover:text-white active:scale-[0.97] transition-all duration-300 text-sm sm:inline-block sm:px-8 sm:py-3.5"
          >
            Ver Programa
          </a>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="px-5 pb-14 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="max-w-sm mx-auto grid grid-cols-3 gap-2.5 sm:max-w-lg sm:gap-4 lg:max-w-3xl lg:gap-5">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="text-center py-4 px-2 bg-surface-light/50 rounded-xl border border-white/[0.04] sm:p-5 sm:rounded-2xl lg:p-8"
            >
              <div className="text-lg font-bold bg-gradient-to-r from-accent to-[#e0c96a] bg-clip-text text-transparent sm:text-xl lg:text-3xl">
                {benefit.stat}
              </div>
              <p className="mt-1 text-[10px] text-white/30 sm:mt-2 sm:text-[11px] lg:text-[13px]">
                {benefit.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modules */}
      <section
        id="modulos"
        className="relative py-16 px-5 bg-surface sm:py-20 lg:py-32 lg:px-8"
      >
        <div className="absolute top-0 left-0 right-0 section-divider" />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 lg:mb-16"
          >
            <p className="text-accent/80 text-[10px] font-semibold tracking-[0.35em] uppercase mb-3 lg:text-xs lg:tracking-[0.4em] lg:mb-4">
              Programa
            </p>
            <h2 className="text-[1.75rem] font-bold tracking-[-0.02em] sm:text-3xl lg:text-[3.25rem] lg:leading-none">
              5 m&oacute;dulos completos
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line - desktop only */}
            <div className="absolute left-[23px] top-4 bottom-4 w-px bg-gradient-to-b from-accent/20 via-accent/10 to-transparent hidden lg:block" />

            <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
              {modules.map((mod, index) => (
                <motion.div
                  key={mod.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="group relative border border-white/[0.04] rounded-xl p-5 hover:border-accent/20 hover:bg-surface-light/30 transition-all duration-500 sm:rounded-2xl sm:p-6 lg:p-8 lg:pl-16"
                >
                  {/* Timeline dot - desktop only */}
                  <div className="absolute left-5 top-8 w-[7px] h-[7px] rounded-full bg-accent/30 border border-accent/50 hidden lg:block group-hover:bg-accent/60 transition-colors" />

                  <div className="flex items-start gap-4 lg:gap-8">
                    <span className="text-xl font-bold text-accent/[0.15] shrink-0 sm:text-2xl lg:text-3xl">
                      {mod.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[15px] font-semibold tracking-tight sm:text-base lg:text-lg">
                        {mod.title}
                      </h3>
                      <div className="mt-2.5 flex flex-wrap gap-1.5 sm:mt-3.5 sm:gap-2">
                        {mod.topics.map((topic) => (
                          <span
                            key={topic}
                            className="text-[10px] text-white/30 bg-white/[0.03] border border-white/[0.04] px-2.5 py-1 rounded-full sm:text-[11px] sm:px-3 sm:py-1.5"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 px-5 text-center sm:py-20 lg:py-28 lg:px-8">
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-accent/[0.03] rounded-full blur-[80px] lg:w-[500px] lg:h-[250px] lg:blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="w-8 h-px bg-accent/40 mx-auto mb-6 lg:w-10 lg:mb-8" />
          <h2 className="text-[1.75rem] font-bold tracking-[-0.02em] sm:text-3xl lg:text-4xl">
            Plazas limitadas.
          </h2>
          <p className="mt-3 text-white/30 max-w-[260px] mx-auto text-[14px] sm:max-w-sm sm:text-[15px]">
            Reserva tu lugar y empieza a construir tu negocio en el mundo del
            moto detailing.
          </p>
          <Link
            href="/contacto"
            className="inline-block mt-7 bg-accent text-black font-semibold px-8 py-3.5 rounded-full hover:bg-accent-hover hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(192,164,77,0.25)] active:scale-[0.97] transition-all duration-300 text-sm sm:px-10 sm:py-4 lg:mt-8"
          >
            Quiero Inscribirme
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
