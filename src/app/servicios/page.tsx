"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const menuItems = [
  { label: "Servicios", href: "/servicios" },
  { label: "Cómo montar tu lavadero", href: "/curso" },
  { label: "Grupo de WhatsApp", href: "https://chat.whatsapp.com" },
  { label: "App", href: "#" },
];

const adicionalesData = [
  {
    title: "kit de arrastre",
    extraName: "Kit de arrastre",
    price: "+$10.000",
    description: "Desengrasado completo del kit de arrastre: cadena, piñón y plato. Queda como nuevo.",
    image: "/imagen-11.png",
    cardMargin: "0 0 0 1rem",
  },
  {
    title: "cera y restaurador",
    extraName: "Cera y restaurador",
    price: "+$10.000",
    description: "Protege tu moto del polvo y la lluvia. Restaura plásticos y devuelve el brillo original.",
    image: "/imagen-10.png",
    cardMargin: "0 1rem 0 0",
  },
];

const faqs = [
  {
    question: "¿Qué incluye el lavado detallado?",
    answer: "Incluye desengrasado de cadena, plato trasero, motor, mofle y rines con desengrasante biodegradable, más lavado general con shampoo pH neutro y shampoo cera. Usamos microfibras diferentes para lavar y secar.",
  },
  {
    question: "¿Cuánto dura el servicio?",
    answer: "Entre 45 y 60 minutos aproximadamente.",
  },
  {
    question: "¿Necesito cita previa?",
    answer: "Puedes reservar tu cita desde nuestra página o llegar directamente a cualquiera de nuestras sedes.",
  },
  {
    question: "¿Qué productos usan?",
    answer: "Usamos desengrasante biodegradable, shampoo pH neutro, shampoo cera y microfibras profesionales. Todos nuestros productos son seguros para tu moto.",
  },
  {
    question: "¿Cuánto es el tiempo de espera?",
    answer: "Cuando vas con reserva puede ser de 10 minutos aproximadamente. Sin reserva el tiempo puede aumentar debido a que hay que esperar a que alguien de reserva no vaya.",
  },
];

export default function ServiciosPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showCalc, setShowCalc] = useState(false);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const scrollAdicionalesRef = useRef<HTMLDivElement>(null);

  const calcExtras = [
    { name: "Kit de arrastre", price: 10000 },
    { name: "Cera y restaurador", price: 10000 },
  ];
  const basePrice = 25000;
  const totalPrice = basePrice + calcExtras.filter((e) => selectedExtras.includes(e.name)).reduce((sum, e) => sum + e.price, 0);

  const toggleExtra = (name: string) => {
    setSelectedExtras((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const formatPrice = (n: number) =>
    "$" + n.toLocaleString("es-CO");

  return (
    <div className="light-page min-h-screen font-helvetica">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease }}
        className="relative flex items-center justify-between px-6 py-5"
      >
        <Link href="/" className="text-[1.4rem] font-bold text-[#1d1d1f] tracking-[-1px]" style={{ margin: "0.5rem 1rem" }}>
          monaco
        </Link>
        <button
          aria-label="Menú"
          className="flex flex-col gap-[5px] z-50"
          style={{ margin: "1rem" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-[2px] bg-[#1d1d1f] transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block w-6 h-[2px] bg-[#1d1d1f] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-[2px] bg-[#1d1d1f] transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease }}
              className="absolute top-full right-6 bg-white rounded-2xl shadow-lg border border-[#e5e5e5] py-2 z-40 min-w-[220px]"
            >
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-5 py-3 text-[0.9rem] text-[#1d1d1f] hover:bg-[#f5f5f7] tracking-[-0.2px]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>


      {/* Lavado detallado */}
      <section className="px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        >
          <h2
            className="text-[1.6rem] md:text-[2rem] font-bold text-[#1d1d1f] tracking-[-1px]"
            style={{ fontSize: "1.3rem", margin: "4rem 1rem 0 1rem" }}
          >
            lavado detallado
          </h2>
          <p className="text-[#86868b] tracking-[-0.2px]"
             style={{ fontSize: "0.8rem", margin: "0 1rem 0.5rem 1rem" }}>
            nuestro servicio principal para tu moto
          </p>
        </motion.div>

        {/* Price + duration */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          style={{ margin: "1.5rem 1rem 0 1rem" }}
        >
          <div className="flex items-baseline gap-3">
            <span className="text-[2rem] font-bold text-[#1d1d1f] tracking-[-1px]">$25.000</span>
            <span className="text-[#86868b] text-[0.85rem] tracking-[-0.2px]">45 - 60 min</span>
          </div>
          <p className="text-[#86868b] text-[0.8rem] tracking-[-0.2px]" style={{ marginTop: "0.3rem" }}>
            cualquier tipo de moto
          </p>
        </motion.div>

        {/* Image placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="rounded-2xl bg-[#d1d1d6]"
          style={{ margin: "2rem 1rem 4rem 1rem", minHeight: "220px" }}
        />

        {/* Included items */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
          style={{ margin: "0 1rem 2rem 1rem" }}
        >
          <p className="font-bold text-[#1d1d1f] tracking-[-0.3px]"
             style={{ fontSize: "1.05rem", marginBottom: "1rem" }}>
            qué incluye
          </p>

          <div className="flex flex-col gap-3">
            {[
              "Desengrasado de cadena",
              "Desengrasado de plato trasero",
              "Desengrasado de motor",
              "Desengrasado de mofle",
              "Desengrasado de rines",
              "Lavado general con shampoo pH neutro",
              "Aplicación de shampoo cera",
              "Microfibras diferentes para lavar y secar",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#007AFF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#1d1d1f] text-[0.9rem] tracking-[-0.2px]">{item}</span>
              </div>
            ))}
          </div>

          {/* Biodegradable note */}
          <p className="text-[#86868b] text-[0.8rem] tracking-[-0.2px]"
             style={{ marginTop: "1.5rem", lineHeight: 1.4 }}>
            usamos desengrasante biodegradable y shampoo pH neutro en todos nuestros servicios
          </p>

        </motion.div>
      </section>

      {/* Adicionales */}
      <section className="px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
        >
          <h2
            className="text-[1.6rem] md:text-[2rem] font-bold text-[#1d1d1f] tracking-[-1px]"
            style={{ fontSize: "1.3rem", margin: "4rem 1rem 0 1rem" }}
          >
            adicionales
          </h2>
          <p className="text-[#86868b] tracking-[-0.2px]"
             style={{ fontSize: "0.8rem", margin: "0 1rem 2.5rem 1rem" }}>
            mejora tu lavado con estos servicios extra
          </p>
        </motion.div>

        {/* Horizontal scroll cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          ref={scrollAdicionalesRef}
          className="flex gap-4 overflow-x-auto no-scrollbar -mx-6 px-6 pb-2"
          style={{ marginBottom: "2rem" }}
        >
          {adicionalesData.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 relative overflow-hidden rounded-2xl p-5 flex flex-col justify-between"
              style={{ width: "260px", minHeight: "420px", margin: item.cardMargin }}
            >
              <Image src={item.image} alt={item.title} fill className="object-cover" style={{ zIndex: 0 }} />
              <div className="absolute inset-0 bg-black/40" style={{ zIndex: 1 }} />
              <div className="relative" style={{ zIndex: 2 }}>
                <p className="text-white/70 text-[1.05rem] tracking-[-0.2px]" style={{ padding: "1rem" }}>
                  {item.title}
                </p>
                <p className="text-white text-[0.9rem] tracking-[-0.2px] text-center leading-snug" style={{ padding: "1rem 2rem" }}>
                  {item.description}
                </p>
              </div>
              <div className="relative" style={{ zIndex: 2, margin: "1.3rem 2.5rem" }}>
                <AnimatePresence>
                  {selectedExtras.includes(item.extraName) && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease }}
                      className="text-white/70 text-[0.75rem] tracking-[-0.2px]"
                      style={{ marginBottom: "0.6rem" }}
                    >
                      servicio agregado<br />calcula el valor de tu servicio
                    </motion.p>
                  )}
                </AnimatePresence>
                <div className="flex items-center justify-between">
                <span className="text-white font-bold text-[1.3rem] tracking-[-0.3px]">
                  {item.price}
                </span>
                <motion.button
                  key={selectedExtras.includes(item.extraName) ? "cancelar" : "agregar"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease }}
                  onClick={() => toggleExtra(item.extraName)}
                  className="border border-white text-white rounded-full font-medium"
                  style={{ padding: "0.5rem 0.8rem", fontSize: "0.85rem", letterSpacing: "0px" }}
                >
                  {selectedExtras.includes(item.extraName) ? "cancelar" : "agregar"}
                </motion.button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Navigation arrows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease }}
          className="flex justify-end gap-3"
          style={{ margin: "0 1rem 2.5rem 0" }}
        >
          <button
            aria-label="Anterior"
            onClick={() => scrollAdicionalesRef.current?.scrollBy({ left: -280, behavior: "smooth" })}
            className="w-10 h-10 rounded-full border border-[#d2d2d7] flex items-center justify-center text-[#86868b] active:border-[#007AFF] active:text-[#007AFF] transition-colors text-3xl"
          >
            ‹
          </button>
          <button
            aria-label="Siguiente"
            onClick={() => scrollAdicionalesRef.current?.scrollBy({ left: 280, behavior: "smooth" })}
            className="w-10 h-10 rounded-full border border-[#d2d2d7] flex items-center justify-center text-[#86868b] active:border-[#007AFF] active:text-[#007AFF] transition-colors text-3xl"
          >
            ›
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease }}
          className="flex justify-center gap-4"
          style={{ margin: "0 1rem 2rem 1rem" }}
        >
          <button
            onClick={() => setShowCalc(true)}
            className="bg-[#007AFF] text-white rounded-full font-medium"
            style={{ padding: "0.5rem 0.8rem", fontSize: "0.85rem", letterSpacing: "0px" }}
          >
            calcular el valor de la lavada
          </button>
          <Link
            href="/#reservas"
            className="border border-[#007AFF] text-[#007AFF] rounded-full font-medium"
            style={{ padding: "0.5rem 0.8rem", fontSize: "0.85rem", letterSpacing: "0px" }}
          >
            reservar
          </Link>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="px-6" style={{ paddingBottom: "4rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
        >
          <h2
            className="text-[1.6rem] md:text-[2rem] font-bold text-[#1d1d1f] tracking-[-1px]"
            style={{ fontSize: "1.3rem", margin: "4rem 1rem 2.5rem 1rem" }}
          >
            preguntas frecuentes
          </h2>
        </motion.div>

        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + i * 0.05, ease }}
            style={{ margin: "0 1rem" }}
          >
            <div className="h-[1px] bg-[#d2d2d7]" />
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="font-medium text-[#1d1d1f] text-[0.95rem] tracking-[-0.2px]">
                {faq.question}
              </span>
              <span className={`text-[#86868b] text-xl transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}>
                +
              </span>
            </button>
            <AnimatePresence>
              {openFaq === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease }}
                  className="overflow-hidden"
                >
                  <p className="text-[#86868b] text-[0.85rem] tracking-[-0.2px] leading-relaxed pb-4">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
        <div className="h-[1px] bg-[#d2d2d7]" style={{ margin: "0 1rem" }} />
      </section>

      {/* Footer */}
      <footer
        className="text-center text-[#86868b] text-[0.75rem] tracking-[-0.2px]"
        style={{ padding: "5rem 1.5rem 2rem" }}
      >
        <div className="h-[1px] bg-[#d2d2d7] mb-4 mx-6" />
        <p>monaco &mdash; detallado de motos</p>
        <p className="mt-1">© {new Date().getFullYear()} Todos los derechos reservados.</p>
      </footer>

      {/* Calcular valor modal */}
      <AnimatePresence>
        {showCalc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
            onClick={() => setShowCalc(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease }}
              className="bg-white rounded-2xl w-[90%] max-w-[360px]"
              style={{ padding: "2rem 1.5rem" }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-bold text-[#1d1d1f] tracking-[-0.5px]" style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>
                esto cuesta tu lavada
              </h3>

              {/* Base price */}
              <div className="flex items-center justify-between" style={{ marginBottom: "1rem" }}>
                <span className="text-[#1d1d1f] text-[0.95rem] tracking-[-0.2px]">lavada detallada</span>
                <span className="text-[#1d1d1f] font-bold text-[0.95rem] tracking-[-0.2px]">{formatPrice(basePrice)}</span>
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-[#d2d2d7]" style={{ marginBottom: "1rem" }} />

              {/* Adicionales */}
              <p className="text-[#86868b] text-[0.8rem] tracking-[-0.2px]" style={{ marginBottom: "0.8rem" }}>
                adicionales
              </p>

              {calcExtras.map((extra) => {
                const selected = selectedExtras.includes(extra.name);
                return (
                  <button
                    key={extra.name}
                    onClick={() => toggleExtra(extra.name)}
                    className="w-full flex items-center justify-between"
                    style={{ marginBottom: "0.8rem" }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-md border flex items-center justify-center text-sm transition-colors ${
                          selected ? "bg-[#007AFF] border-[#007AFF] text-white" : "border-[#d2d2d7] text-[#86868b]"
                        }`}
                      >
                        {selected ? "✓" : "+"}
                      </div>
                      <span className="text-[#1d1d1f] text-[0.9rem] tracking-[-0.2px]">{extra.name}</span>
                    </div>
                    <span className="text-[#86868b] text-[0.9rem] tracking-[-0.2px]">+{formatPrice(extra.price)}</span>
                  </button>
                );
              })}

              {/* Divider */}
              <div className="h-[1px] bg-[#d2d2d7]" style={{ margin: "0.5rem 0 1rem 0" }} />

              {/* Total */}
              <div className="flex items-center justify-between" style={{ marginBottom: "2rem" }}>
                <span className="font-bold text-[#1d1d1f] text-[1.1rem] tracking-[-0.3px]">total</span>
                <span className="font-bold text-[#1d1d1f] text-[1.3rem] tracking-[-0.5px]">{formatPrice(totalPrice)}</span>
              </div>

              {/* Buttons */}
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setShowCalc(false)}
                  className="border border-[#d2d2d7] text-[#86868b] rounded-full font-medium"
                  style={{ padding: "0.5rem 1.2rem", fontSize: "0.85rem" }}
                >
                  cerrar
                </button>
                <Link
                  href="/#reservas"
                  className="bg-[#007AFF] text-white rounded-full font-medium"
                  style={{ padding: "0.5rem 1.2rem", fontSize: "0.85rem" }}
                  onClick={() => setShowCalc(false)}
                >
                  reservar
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
