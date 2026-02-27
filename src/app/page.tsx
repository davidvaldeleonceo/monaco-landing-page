"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { StickyNavbar } from "@/components/StickyNavbar";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const adicionales = [
  {
    title: "cera y restaurador",
    description: "proteje tu moto del polvo y la lluvia",
    titleSize: "1.05rem",
    centered: true,
    cardMargin: "0 0 1rem 1rem",
    image: "/imagen-10.png",
  },
  {
    title: "kit de arrastre",
    description:
      "Desengrasa el kit de arrastre de tu moto y mantenlo como nuevo",
    titleSize: "1.05rem",
    centered: true,
    cardMargin: "0 1rem 1rem 0",
    image: "/imagen-11.png",
  },
];

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollReviewsRef = useRef<HTMLDivElement>(null);
  const scrollLocationRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 280;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="light-page min-h-screen font-helvetica pt-[70px]">
      <StickyNavbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center px-6 pt-6 pb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="font-bold text-[#1d1d1f] text-center"
          style={{ fontSize: "1.5rem", margin: "4rem 1rem 0.5rem 1rem", letterSpacing: "-1.5px" }}
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
          className="flex justify-center gap-4"
          style={{ marginTop: "1.5rem", marginBottom: "3rem" }}
        >
          <Link
            href="/servicios"
            className="bg-[#007AFF] text-white rounded-full font-medium"
            style={{ padding: "0.5rem 0.8rem", fontSize: "0.8rem", letterSpacing: "0px" }}
          >
            más informacion
          </Link>
          <a
            href="#reservas"
            className="border border-[#007AFF] text-[#007AFF] rounded-full font-medium"
            style={{ padding: "0.5rem 0.8rem", fontSize: "0.8rem", letterSpacing: "0px" }}
          >
            reservar lavado
          </a>
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
          <h2
            className="text-[1.6rem] md:text-[2rem] font-bold text-[#1d1d1f] tracking-[-1px]"
            style={{ fontSize: "1.3rem", margin: "3rem 1rem 0 1rem" }}
          >
            adicionales
          </h2>
          <p className="text-[#86868b] tracking-[-0.2px]" style={{ fontSize: "0.8rem", margin: "0 1rem 2.5rem 1rem" }}>
            cada adicional fue creado para mejorar el lavado de tu moto
          </p>
        </motion.div>

        {/* Horizontal scroll cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar -mx-6 px-6 pb-2"
        >
          {adicionales.map((item, i) => (
            <div
              key={i}
              className={`flex-shrink-0 w-[75vw] max-w-[340px] rounded-2xl p-5 flex flex-col justify-between ${item.image ? "relative overflow-hidden" : "bg-[#d1d1d6]"}`}
              style={{ minHeight: "420px", margin: item.cardMargin || "0", width: "260px" }}
            >
              {item.image && (
                <>
                  <Image src={item.image} alt={item.title} fill className="object-cover" style={{ zIndex: 0 }} />
                  <div className="absolute inset-0 bg-black/40" style={{ zIndex: 1 }} />
                </>
              )}
              <div className={item.image ? "relative" : ""} style={item.image ? { zIndex: 2 } : undefined}>
                {item.title && (
                  <div>
                    <p className={`text-[0.85rem] mb-1 tracking-[-0.2px] ${item.image ? "text-white/70" : "text-[#1d1d1f]/70"}`} style={item.titleSize ? { fontSize: item.titleSize, padding: "1rem" } : undefined}>
                      {item.title}
                    </p>
                  </div>
                )}
                <div className={item.centered ? "flex justify-center" : ""}>
                  <p className={`text-[1.1rem] md:text-[1.2rem] font-medium leading-snug tracking-[-0.3px] max-w-[240px] ${item.image ? "text-white" : "text-[#1d1d1f]"} ${item.centered ? "text-center" : ""}`} style={item.centered ? { padding: "2rem" } : undefined}>
                    {item.description}
                  </p>
                </div>
              </div>
              <div className={`flex justify-between ${item.image ? "relative" : ""}`} style={{ gap: "0.5rem", margin: "1.3rem", ...(item.image ? { zIndex: 2 } : {}) }}>
                <Link
                  href="/servicios"
                  className="bg-[#007AFF] text-white rounded-full font-medium"
                  style={{ padding: "0.5rem 0.8rem", fontSize: "0.85rem", letterSpacing: "0px" }}
                >
                  más informacion
                </Link>
                <a
                  href="#reservas"
                  className={`rounded-full font-medium ${item.image ? "border border-white text-white" : "border border-[#007AFF] text-[#007AFF]"}`}
                  style={{ padding: "0.5rem 0.8rem", fontSize: "0.85rem", letterSpacing: "0px" }}
                >
                  reservar
                </a>
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
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-[#d2d2d7] flex items-center justify-center text-[#86868b] active:border-[#007AFF] active:text-[#007AFF] transition-colors text-3xl"
          >
            ‹
          </button>
          <button
            aria-label="Siguiente"
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-[#d2d2d7] flex items-center justify-center text-[#86868b] active:border-[#007AFF] active:text-[#007AFF] transition-colors text-3xl"
          >
            ›
          </button>
        </motion.div>
      </section>

      {/* Asi lavamos tu moto Section */}
      <section
        className="relative flex flex-col items-center justify-between px-6 pt-6 pb-10 overflow-hidden"
        style={{ minHeight: "600px" }}
      >
        <Image
          src="/imagen-1.jpeg"
          alt="Así lavamos tu moto"
          fill
          className="object-cover"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 bg-black/40" style={{ zIndex: 1 }} />
        <div className="relative flex flex-col items-center" style={{ zIndex: 2 }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="font-bold text-white text-center"
            style={{ fontSize: "1.5rem", margin: "2.5rem 1rem 0.5rem 1rem", letterSpacing: "-1.5px" }}
          >
            así lavamos tu moto
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-white text-center max-w-sm"
            style={{ fontSize: "1.05rem", margin: "1rem 3rem", lineHeight: 1.2, letterSpacing: "-0.3px" }}
          >
            Limpiamos lo que otros ni ven: motor, rines, cadena y cada detalle.
          </motion.p>
        </div>
        <div className="relative mt-auto flex justify-center gap-3" style={{ zIndex: 2, marginBottom: "2rem" }}>
          <Link
            href="/servicios"
            className="bg-[#007AFF] text-white rounded-full font-medium"
            style={{ padding: "0.5rem 0.8rem", fontSize: "0.85rem", letterSpacing: "0px" }}
          >
            más informacion
          </Link>
          <a
            href="#reservas"
            className="border border-white text-white rounded-full font-medium"
            style={{ padding: "0.5rem 0.8rem", fontSize: "0.85rem", letterSpacing: "0px" }}
          >
            reservar
          </a>
        </div>
      </section>

      {/* Desengrasado completo Section */}
      <section
        className="relative flex flex-col items-center justify-between px-6 pt-6 pb-10 overflow-hidden"
        style={{ minHeight: "600px" }}
      >
        <Image
          src="/imagen-7.png"
          alt="Desengrasado completo"
          fill
          className="object-cover"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0" style={{ zIndex: 1, background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)" }} />
        <div className="relative flex flex-col items-center" style={{ zIndex: 2 }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="font-bold text-white text-center"
            style={{ fontSize: "1.5rem", margin: "2.5rem 1rem 0.5rem 1rem", letterSpacing: "-1.5px" }}
          >
            desengrasado completo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-white text-center max-w-sm"
            style={{ fontSize: "1rem", margin: "1rem 3rem", lineHeight: 1.2, letterSpacing: "-0.3px" }}
          >
            todas nuestras lavadas incluyen desengrasado de cadena, plato trasero, motor, rines, mofle y lavado general con shampoo ph neutro
          </motion.p>
        </div>
        <div className="relative mt-auto flex justify-center gap-3" style={{ zIndex: 2, marginBottom: "2rem" }}>
          <Link
            href="/servicios"
            className="bg-[#007AFF] text-white rounded-full font-medium"
            style={{ padding: "0.5rem 0.8rem", fontSize: "0.85rem", letterSpacing: "0px" }}
          >
            más informacion
          </Link>
          <a
            href="#reservas"
            className="border border-white text-white rounded-full font-medium"
            style={{ padding: "0.5rem 0.8rem", fontSize: "0.85rem", letterSpacing: "0px" }}
          >
            reservar
          </a>
        </div>
      </section>

      {/* Que dicen nuestros clientes Section */}
      <section className="px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
        >
          <h2
            className="text-[1.6rem] md:text-[2rem] font-bold text-[#1d1d1f] tracking-[-1px]"
            style={{ fontSize: "1.3rem", margin: "4rem 1rem 0" }}
          >
            qué dicen nuestros clientes
          </h2>
          <p className="text-[#86868b] tracking-[-0.2px]" style={{ fontSize: "0.8rem", margin: "0 1rem 2.5rem 1rem" }}>
            la experiencia de quienes confían en nosotros
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          ref={scrollReviewsRef}
          className="flex gap-4 overflow-x-auto no-scrollbar -mx-6 px-6 pb-2"
          style={{ marginBottom: "2rem" }}
        >
          {[
            {
              name: "Victor",
              text: "Me ha servido demasiado y más en estas epocas de lluvia",
              image: "/imagen-3.jpg",
            },
            {
              name: "David",
              text: "A parte de la membresía, el lavado es muy bueno",
              image: "/imagen-4.jpg",
            },
            {
              name: "Edwin",
              text: "Estoy desde que empezaron y siempre me ha gustado la atención",
              image: "/imagen-5.jpg",
            },
          ].map((review, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-[#0a0a0a] rounded-2xl overflow-hidden flex flex-col"
              style={{ width: "260px", minHeight: "420px", margin: i === 0 ? "0 0 0 1rem" : i === 2 ? "0 1rem 0 0" : "0" }}
            >
              <div className="relative w-full flex-1" style={{ padding: "0.5rem 0.5rem 0" }}>
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                    style={{ transform: "scale(1.2)" }}
                  />
                </div>
              </div>
              <div style={{ padding: "0.8rem 1rem 1rem" }}>
                <p className="text-[#f5c518] tracking-[2px]" style={{ fontSize: "0.9rem" }}>
                  ★★★★★
                </p>
                <p className="text-white font-bold tracking-[-0.2px]" style={{ fontSize: "0.9rem", marginTop: "0.3rem" }}>
                  {review.name}
                </p>
                <p className="text-white/80 leading-snug tracking-[-0.2px]" style={{ fontSize: "0.8rem", marginTop: "0.3rem" }}>
                  &ldquo;{review.text}&rdquo;
                </p>
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
          style={{ margin: "0 1rem 3rem 0" }}
        >
          <button
            aria-label="Anterior"
            onClick={() => scrollReviewsRef.current?.scrollBy({ left: -280, behavior: "smooth" })}
            className="w-10 h-10 rounded-full border border-[#d2d2d7] flex items-center justify-center text-[#86868b] active:border-[#007AFF] active:text-[#007AFF] transition-colors text-3xl"
          >
            ‹
          </button>
          <button
            aria-label="Siguiente"
            onClick={() => scrollReviewsRef.current?.scrollBy({ left: 280, behavior: "smooth" })}
            className="w-10 h-10 rounded-full border border-[#d2d2d7] flex items-center justify-center text-[#86868b] active:border-[#007AFF] active:text-[#007AFF] transition-colors text-3xl"
          >
            ›
          </button>
        </motion.div>
      </section>

      {/* Donde estamos ubicados Section */}
      <section className="px-6" style={{ paddingBottom: "3rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
        >
          <h2
            className="text-[1.6rem] md:text-[2rem] font-bold text-[#1d1d1f] tracking-[-1px] text-center"
            style={{ fontSize: "1.3rem", margin: "3rem 1rem 0rem 1rem" }}
          >
            aquí puedes lavar tu moto
          </h2>
          <p className="text-[#86868b] tracking-[-0.2px] text-center" style={{ fontSize: "0.8rem", margin: "0 1rem 4rem 1rem" }}>
            escoge la ubicación que te quede más cerca
          </p>
        </motion.div>

        <motion.div
          id="reservas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          ref={scrollLocationRef}
          className="flex gap-4 overflow-x-auto no-scrollbar -mx-6 px-6 pb-2"
          style={{ marginTop: "2rem", marginBottom: "2rem", scrollMarginTop: "15vh" }}
        >
          {/* Soacha card */}
          <div
            className="flex-shrink-0 relative rounded-2xl overflow-hidden flex flex-col justify-between"
            style={{ width: "260px", minHeight: "420px", margin: "0 0 0 1rem" }}
          >
            <Image
              src="/imagen-8.png"
              alt="Ubicación Monaco Soacha"
              fill
              className="object-cover"
              style={{ zIndex: 0 }}
            />
            <div className="absolute inset-0 bg-black/40" style={{ zIndex: 1 }} />
            <div className="relative" style={{ zIndex: 2 }}>
              <p className="text-[1.1rem] md:text-[1.2rem] text-white font-medium leading-snug tracking-[-0.3px] text-center" style={{ padding: "2rem 2rem 1rem" }}>
                Soacha León XIII<br />carrera 8 # 41a - 31
              </p>
              <div className="flex justify-center gap-3" style={{ marginBottom: "1rem" }}>
                <Link
                  href="https://maps.app.goo.gl/VAGTqGmn4k9WD2pY8"
                  target="_blank"
                  className="bg-[#007AFF] text-white rounded-full font-medium"
                  style={{ padding: "0.5rem 1.2rem", fontSize: "0.85rem", letterSpacing: "0px" }}
                >
                  ubicación
                </Link>
                <Link
                  href="https://cal.com/monaco-dropi-eyx9iv/reserva-sin-membresia?overlayCalendar=true"
                  className="border border-white text-white rounded-full font-medium"
                  style={{ padding: "0.5rem 0.8rem", fontSize: "0.85rem", letterSpacing: "0px" }}
                >
                  reservar
                </Link>
              </div>
            </div>
            <div className="relative" style={{ zIndex: 2, padding: "0 2rem 1.5rem" }}>
              <p className="text-white/70 text-center tracking-[-0.2px]" style={{ fontSize: "1rem" }}>
                monaco moto detailing (sede principal)
              </p>
            </div>
          </div>

          {/* Funza card */}
          <div
            className="flex-shrink-0 relative rounded-2xl overflow-hidden flex flex-col justify-between"
            style={{ width: "260px", minHeight: "420px", margin: "0 1rem 0 0" }}
          >
            <Image
              src="/imagen-9.jpg"
              alt="Ubicación Monaco Funza"
              fill
              className="object-cover"
              style={{ zIndex: 0 }}
            />
            <div className="absolute inset-0 bg-black/40" style={{ zIndex: 1 }} />
            <div className="relative" style={{ zIndex: 2 }}>
              <p className="text-[1.1rem] md:text-[1.2rem] text-white font-medium leading-snug tracking-[-0.3px] text-center" style={{ padding: "2rem 2rem 1rem" }}>
                Funza Porvenir<br />Cra 5 # 7 - 22
              </p>
              <div className="flex justify-center gap-3" style={{ marginBottom: "1rem" }}>
                <Link
                  href="https://maps.app.goo.gl/HHuC2xG3X3ghn3NG6"
                  target="_blank"
                  className="bg-[#007AFF] text-white rounded-full font-medium"
                  style={{ padding: "0.5rem 1.2rem", fontSize: "0.85rem", letterSpacing: "0px" }}
                >
                  ubicación
                </Link>
                <Link
                  href="https://cal.com/que-chimba-p1utim/lavadodemoto?overlayCalendar=true"
                  target="_blank"
                  className="border border-white text-white rounded-full font-medium"
                  style={{ padding: "0.5rem 0.8rem", fontSize: "0.85rem", letterSpacing: "0px" }}
                >
                  reservar
                </Link>
              </div>
            </div>
            <div className="relative" style={{ zIndex: 2, padding: "0 2rem 1.5rem" }}>
              <p className="text-white/70 text-center tracking-[-0.2px]" style={{ fontSize: "1rem" }}>
                monaco moto detailing (sede funza)
              </p>
            </div>
          </div>
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
            onClick={() => scrollLocationRef.current?.scrollBy({ left: -280, behavior: "smooth" })}
            className="w-10 h-10 rounded-full border border-[#d2d2d7] flex items-center justify-center text-[#86868b] active:border-[#007AFF] active:text-[#007AFF] transition-colors text-3xl"
          >
            ‹
          </button>
          <button
            aria-label="Siguiente"
            onClick={() => scrollLocationRef.current?.scrollBy({ left: 280, behavior: "smooth" })}
            className="w-10 h-10 rounded-full border border-[#d2d2d7] flex items-center justify-center text-[#86868b] active:border-[#007AFF] active:text-[#007AFF] transition-colors text-3xl"
          >
            ›
          </button>
        </motion.div>
      </section>

      {/* Montar lavadero CTA */}
      <section className="px-6 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="flex justify-center"
          style={{ margin: "3rem 1rem 0 1rem" }}
        >
          <Link
            href="/curso"
            className="text-[#007AFF] font-medium tracking-[-0.2px] underline underline-offset-4"
            style={{ fontSize: "0.95rem" }}
          >
            quiero montar mi lavadero de motos
          </Link>
        </motion.div>
      </section>

      {/* Contactenos Section */}
      <section className="px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
        >
          <h2
            className="text-[1.6rem] md:text-[2rem] font-bold text-[#1d1d1f] tracking-[-1px]"
            style={{ fontSize: "1.3rem", margin: "0 1rem 2.5rem 1rem" }}
          >
            contáctenos
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="flex justify-center items-center gap-4"
        >
          <Link
            href="https://wa.me/573022696085"
            target="_blank"
            className="flex items-center gap-2 bg-[#007AFF] text-white rounded-full font-medium"
            style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            302 269 6085
          </Link>
          <Link
            href="https://chat.whatsapp.com"
            target="_blank"
            className="border border-[#007AFF] text-[#007AFF] rounded-full font-medium"
            style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}
          >
            únete a nuestros grupos
          </Link>
        </motion.div>
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
    </div>
  );
}
