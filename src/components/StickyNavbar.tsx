"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const menuItems = [
  { label: "Servicios", href: "/servicios" },
  { label: "Cómo montar tu lavadero", href: "/curso" },
  { label: "Grupo de WhatsApp", href: "https://chat.whatsapp.com" },
  { label: "App", href: "#" },
];

export function StickyNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-[#d2d2d7]"
          : "bg-white/0"
      }`}
    >
      <Link
        href="/"
        className="text-[1.4rem] font-bold text-[#1d1d1f] tracking-[-1px]"
        style={{ margin: "0.5rem 1rem" }}
      >
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
  );
}
