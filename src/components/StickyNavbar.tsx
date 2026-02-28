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
          ? "bg-white/50 backdrop-blur-2xl saturate-150 border-b border-[#d2d2d7]/50"
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

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="fixed inset-0 bg-white z-40 flex flex-col justify-center"
            style={{ paddingLeft: "2rem" }}
          >
            <nav className="flex flex-col gap-8">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08, ease }}
                >
                  <Link
                    href={item.href}
                    className="text-[1.8rem] font-bold text-[#1d1d1f] tracking-[-1px]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
