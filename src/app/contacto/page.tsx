"use client";

import { motion } from "framer-motion";

export default function ContactoPage() {
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
          Contacto
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[2rem] font-bold tracking-[-0.02em] leading-[1.1] sm:text-[2.5rem] lg:text-[4.5rem]"
        >
          Habl&eacute;monos.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 text-white/35 max-w-[280px] mx-auto leading-relaxed text-[14px] sm:max-w-md sm:text-[15px]"
        >
          Reserva tu cita, consulta sobre el curso o simplemente
          escr&iacute;benos. Estamos para ayudarte.
        </motion.p>
      </section>

      {/* Contact Form + Info */}
      <section className="px-5 pb-16 sm:pb-20 lg:px-8 lg:pb-32">
        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="flex flex-col gap-4 sm:gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[12px] text-white/50 mb-2 font-medium sm:text-[13px] sm:mb-2.5"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-surface-light/50 border border-white/[0.06] rounded-xl px-4 py-3 text-[14px] text-white placeholder-white/15 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 focus:bg-surface-light transition-all duration-300 sm:py-3.5 sm:text-sm"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[12px] text-white/50 mb-2 font-medium sm:text-[13px] sm:mb-2.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-surface-light/50 border border-white/[0.06] rounded-xl px-4 py-3 text-[14px] text-white placeholder-white/15 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 focus:bg-surface-light transition-all duration-300 sm:py-3.5 sm:text-sm"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-[12px] text-white/50 mb-2 font-medium sm:text-[13px] sm:mb-2.5"
                >
                  Asunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full bg-surface-light/50 border border-white/[0.06] rounded-xl px-4 py-3 text-[14px] text-white/70 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 focus:bg-surface-light transition-all duration-300 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_16px_center] sm:py-3.5 sm:text-sm"
                >
                  <option value="reserva">Reservar cita de lavado</option>
                  <option value="curso">Informaci&oacute;n sobre el curso</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[12px] text-white/50 mb-2 font-medium sm:text-[13px] sm:mb-2.5"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-surface-light/50 border border-white/[0.06] rounded-xl px-4 py-3 text-[14px] text-white placeholder-white/15 focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 focus:bg-surface-light transition-all duration-300 resize-none sm:py-3.5 sm:text-sm sm:rows-5"
                  placeholder="Cu\u00e9ntanos en qu\u00e9 podemos ayudarte..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-black font-semibold py-3 rounded-full hover:bg-accent-hover hover:shadow-[0_0_30px_rgba(192,164,77,0.2)] active:scale-[0.98] transition-all duration-300 text-sm mt-1 sm:py-3.5"
              >
                Enviar Mensaje
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4 sm:gap-5"
          >
            <div className="bg-surface-light/50 border border-white/[0.04] rounded-2xl p-6 sm:p-7 lg:p-8">
              <h3 className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.15em] mb-5 sm:text-[11px] sm:mb-6">
                Contacto Directo
              </h3>
              <div className="flex flex-col gap-5 sm:gap-6">
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="w-9 h-9 rounded-lg bg-accent/[0.06] border border-accent/10 flex items-center justify-center shrink-0 sm:w-10 sm:h-10 sm:rounded-xl">
                    <svg
                      className="w-4 h-4 text-accent/70 sm:w-[18px] sm:h-[18px]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[13px] font-medium text-white/80 sm:text-sm">Email</p>
                    <p className="text-[12px] text-white/30 mt-0.5 truncate sm:text-[13px]">
                      info@monacomotodetailing.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="w-9 h-9 rounded-lg bg-accent/[0.06] border border-accent/10 flex items-center justify-center shrink-0 sm:w-10 sm:h-10 sm:rounded-xl">
                    <svg
                      className="w-4 h-4 text-accent/70 sm:w-[18px] sm:h-[18px]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-white/80 sm:text-sm">WhatsApp</p>
                    <p className="text-[12px] text-white/30 mt-0.5 sm:text-[13px]">+XX XXX XXX XXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className="w-9 h-9 rounded-lg bg-accent/[0.06] border border-accent/10 flex items-center justify-center shrink-0 sm:w-10 sm:h-10 sm:rounded-xl">
                    <svg
                      className="w-4 h-4 text-accent/70 sm:w-[18px] sm:h-[18px]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-white/80 sm:text-sm">Ubicaci&oacute;n</p>
                    <p className="text-[12px] text-white/30 mt-0.5 sm:text-[13px]">Tu ciudad, Pa&iacute;s</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-light/50 border border-white/[0.04] rounded-2xl p-6 sm:p-7 lg:p-8">
              <h3 className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.15em] mb-4 sm:text-[11px] sm:mb-5">
                Horario de Atenci&oacute;n
              </h3>
              <div className="flex flex-col gap-2.5 text-[12px] sm:text-[13px] sm:gap-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/30">Lunes - Viernes</span>
                  <span className="text-white/60 font-medium">8:00 - 18:00</span>
                </div>
                <div className="h-px bg-white/[0.03]" />
                <div className="flex justify-between items-center">
                  <span className="text-white/30">S&aacute;bado</span>
                  <span className="text-white/60 font-medium">9:00 - 14:00</span>
                </div>
                <div className="h-px bg-white/[0.03]" />
                <div className="flex justify-between items-center">
                  <span className="text-white/30">Domingo</span>
                  <span className="text-white/40">Cerrado</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
