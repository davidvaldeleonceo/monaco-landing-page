"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const menuItems = [
  { label: "Servicios", href: "/servicios" },
  { label: "Cómo montar tu lavadero", href: "/curso" },
  { label: "Grupo de WhatsApp", href: "https://chat.whatsapp.com" },
  { label: "App", href: "#" },
];

const adicionales = [
  {
    title: undefined,
    description: "proteje tu moto del polvo y la lluvia",
  },
  {
    title: "kit de arrastre",
    description:
      "Desengrasa el kit de arrastre de tu moto y mantenlo como nuevo",
  },
  {
    title: "pulida de farola",
    description: "Devolvele la claridad a tus farolas con nuestro servicio",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="light-page min-h-screen font-helvetica">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease }}
        className="relative flex items-center justify-between px-6 py-5"
      >
        <span className="text-[1.4rem] font-bold text-[#1d1d1f] tracking-[-1px]" style={{ margin: "0.5rem 1rem" }}>
          monaco
        </span>
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

      {/* Hero Section */}
      <section className="flex flex-col items-center px-6 pt-6 pb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="font-bold text-[#1d1d1f] text-center"
          style={{ fontSize: "1.5rem", margin: "2.5rem 1rem 0.5rem 1rem", letterSpacing: "-1.5px" }}
        >
          detallado
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="text-[#1d1d1f] text-center max-w-sm"
          style={{ fontSize: "1.05rem", margin: "0 0 1.5rem 0", lineHeight: 1.2, letterSpacing: "-0.3px" }}
        >
          Di hola al mejor servicio de<br /> lavado para tu moto
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="flex justify-center gap-4 mt-6"
        >
          <Link
            href="/servicios"
            className="bg-[#007AFF] text-white rounded-full font-medium"
            style={{ padding: "0.5rem 0.8rem", fontSize: "0.8rem", letterSpacing: "0px" }}
          >
            más informacion
          </Link>
          <Link
            href="/contacto"
            className="border border-[#007AFF] text-[#007AFF] rounded-full font-medium"
            style={{ padding: "0.5rem 0.8rem", fontSize: "0.8rem", letterSpacing: "0px" }}
          >
            reservar lavado
          </Link>
        </motion.div>

        {/* Motorcycle Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mt-6 w-full flex justify-center"
        >
          <Image
            src="/bmw-gs.png"
            alt="BMW GS - Lavado detallado"
            width={800}
            height={500}
            className="w-auto h-[10rem] object-contain"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease }}
          className="mt-1 text-[1.05rem] text-[#1d1d1f] text-center tracking-[-0.3px]"
        >
          lavado detallado
        </motion.p>
      </section>

      {/* Adicionales Section */}
      <section className="px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
        >
          <h2 className="text-[1.6rem] md:text-[2rem] font-bold text-[#1d1d1f] tracking-[-1px]">
            adicionales
          </h2>
          <div className="h-[1px] bg-[#d2d2d7] mt-2 mb-5" />
        </motion.div>

        {/* Horizontal scroll cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="flex gap-4 overflow-x-auto no-scrollbar -mx-6 px-6 pb-2"
        >
          {adicionales.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[75vw] max-w-[340px] bg-[#d1d1d6] rounded-2xl p-5 flex flex-col justify-between"
              style={{ minHeight: "420px" }}
            >
              <div>
                {item.title && (
                  <p className="text-[0.85rem] text-[#1d1d1f]/70 mb-1 tracking-[-0.2px]">
                    {item.title}
                  </p>
                )}
                <p className="text-[1.1rem] md:text-[1.2rem] text-[#1d1d1f] font-medium leading-snug tracking-[-0.3px] max-w-[240px]">
                  {item.description}
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/servicios"
                  className="bg-[#007AFF] text-white rounded-full font-medium"
                  style={{ padding: "0.5rem 0.8rem", fontSize: "0.85rem", letterSpacing: "0px" }}
                >
                  más informacion
                </Link>
                <Link
                  href="/contacto"
                  className="border border-[#007AFF] text-[#007AFF] rounded-full font-medium"
                  style={{ padding: "0.5rem 0.8rem", fontSize: "0.85rem", letterSpacing: "0px" }}
                >
                  reservar
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
