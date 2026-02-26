"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    id: "basico",
    title: "Lavado B\u00e1sico",
    subtitle: "Limpieza exterior premium",
    description:
      "Limpieza completa del exterior de tu moto con productos biodegradables de alta gama. Incluye enjuague a presi\u00f3n controlada, enjabonado con espuma activa, limpieza de llantas y neum\u00e1ticos, secado con microfibra premium y aplicaci\u00f3n de brillo r\u00e1pido.",
    includes: [
      "Enjuague a presi\u00f3n controlada",
      "Espuma activa premium",
      "Limpieza de llantas",
      "Secado con microfibra",
      "Brillo r\u00e1pido exterior",
    ],
    price: "Desde $XX",
    duration: "45 min",
  },
  {
    id: "completo",
    title: "Detailing Completo",
    subtitle: "El tratamiento definitivo",
    description:
      "Nuestro servicio m\u00e1s completo. Incluye todo el lavado b\u00e1sico m\u00e1s descontaminaci\u00f3n de pintura, pulido de una fase, tratamiento de pl\u00e1sticos y cromados, limpieza de motor, y protecci\u00f3n con sellante sint\u00e9tico de alta durabilidad.",
    includes: [
      "Todo del Lavado B\u00e1sico",
      "Descontaminaci\u00f3n de pintura",
      "Pulido de una fase",
      "Tratamiento de pl\u00e1sticos",
      "Limpieza de motor",
      "Sellante sint\u00e9tico",
    ],
    price: "Desde $XX",
    duration: "2-3 horas",
    featured: true,
  },
  {
    id: "ceramico",
    title: "Protecci\u00f3n Cer\u00e1mica",
    subtitle: "M\u00e1xima protecci\u00f3n",
    description:
      "Aplicaci\u00f3n de coating cer\u00e1mico profesional de larga duraci\u00f3n. Protecci\u00f3n superior contra rayos UV, lluvia \u00e1cida, contaminantes y micro-rayaduras. Incluye preparaci\u00f3n completa de la superficie y curado controlado.",
    includes: [
      "Detailing completo previo",
      "Correcci\u00f3n de pintura",
      "Coating cer\u00e1mico profesional",
      "Curado controlado",
      "Garant\u00eda de durabilidad",
      "Kit de mantenimiento",
    ],
    price: "Desde $XX",
    duration: "1 d\u00eda",
  },
];

export default function ServiciosPage() {
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
          Nuestros Servicios
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[2rem] font-bold tracking-[-0.02em] leading-[1.1] sm:text-[2.5rem] lg:text-[4.5rem]"
        >
          Cuidado que se nota.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 text-white/35 max-w-[280px] mx-auto leading-relaxed text-[14px] sm:max-w-md sm:text-[15px]"
        >
          Cada servicio est&aacute; dise&ntilde;ado para ofrecer resultados
          excepcionales con productos y t&eacute;cnicas profesionales.
        </motion.p>
      </section>

      {/* Services List */}
      <section className="px-5 pb-16 sm:pb-20 lg:px-8 lg:pb-32">
        <div className="max-w-5xl mx-auto flex flex-col gap-4 lg:gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className={`group relative rounded-2xl border p-6 sm:p-7 lg:p-10 transition-all duration-500 ${
                service.featured
                  ? "border-accent/25 bg-accent/[0.03] hover:border-accent/40"
                  : "border-white/[0.04] bg-surface-light/50 hover:border-white/[0.08]"
              }`}
            >
              {service.featured && (
                <div className="absolute inset-0 rounded-2xl bg-accent/[0.02] blur-sm -z-10" />
              )}

              {service.featured && (
                <span className="inline-block mb-4 text-[10px] bg-accent text-black font-bold px-3 py-1 rounded-full uppercase tracking-wider sm:absolute sm:top-5 sm:right-5 sm:mb-0 lg:top-8 lg:right-8">
                  Popular
                </span>
              )}

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-14">
                <div>
                  <p className="text-accent/70 text-[10px] font-semibold tracking-[0.2em] uppercase mb-2">
                    {service.subtitle}
                  </p>
                  <h2 className="text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-white/30 text-[13px] leading-relaxed lg:mt-4">
                    {service.description}
                  </p>

                  <div className="mt-5 flex items-baseline gap-3 lg:mt-6 lg:gap-4">
                    <span className="text-xl font-bold bg-gradient-to-r from-accent to-[#e0c96a] bg-clip-text text-transparent sm:text-2xl">
                      {service.price}
                    </span>
                    <span className="text-[11px] text-white/20 tracking-wide lg:text-[12px]">
                      {service.duration}
                    </span>
                  </div>

                  <div className="mt-5 lg:mt-7">
                    <Link
                      href="/contacto"
                      className={`inline-block text-[13px] font-semibold px-6 py-2.5 rounded-full transition-all duration-300 active:scale-[0.97] sm:text-sm sm:px-7 sm:py-3 ${
                        service.featured
                          ? "bg-accent text-black hover:bg-accent-hover hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(192,164,77,0.2)]"
                          : "border border-white/[0.12] text-white/70 hover:border-white/25 hover:bg-white/[0.04] hover:text-white"
                      }`}
                    >
                      Reservar
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.15em] mb-4 lg:text-[11px] lg:mb-5">
                    Incluye
                  </h3>
                  <ul className="flex flex-col gap-3 lg:gap-3.5">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-[13px] text-white/40 lg:gap-3"
                      >
                        <svg
                          className="w-3.5 h-3.5 text-accent/70 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 px-5 bg-surface text-center sm:py-20 lg:py-28 lg:px-8">
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[1.75rem] font-bold tracking-[-0.02em] sm:text-3xl lg:text-4xl">
            &iquest;No sabes cu&aacute;l elegir?
          </h2>
          <p className="mt-3 text-white/30 max-w-[260px] mx-auto text-[14px] sm:max-w-sm sm:text-[15px]">
            Cont&aacute;ctanos y te asesoramos seg&uacute;n las necesidades de
            tu moto.
          </p>
          <Link
            href="/contacto"
            className="inline-block mt-7 bg-accent text-black font-semibold px-7 py-3 rounded-full hover:bg-accent-hover hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(192,164,77,0.2)] active:scale-[0.97] transition-all duration-300 text-sm sm:px-8 sm:py-3.5 lg:mt-8"
          >
            Contactar
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
