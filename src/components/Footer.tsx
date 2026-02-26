import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-5 py-10 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <h3 className="text-base font-bold tracking-tight lg:text-lg">
              <span className="text-accent">MONACO</span>
              <span className="text-white/40 font-extralight ml-1.5 text-sm lg:text-base">
                MOTO
              </span>
            </h3>
            <p className="mt-3 text-[12px] text-white/30 max-w-[260px] leading-relaxed lg:text-[13px] lg:mt-4 lg:max-w-xs">
              Lavado premium y detailing profesional de motos. Transformamos tu
              moto, elevamos tu experiencia.
            </p>
            <div className="flex gap-5 mt-5 lg:mt-6">
              <a
                href="#"
                className="text-white/25 hover:text-accent transition-colors duration-300 p-1"
                aria-label="Instagram"
              >
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white/25 hover:text-accent transition-colors duration-300 p-1"
                aria-label="TikTok"
              >
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.17V11.7a4.83 4.83 0 01-3.77-1.24V6.69h3.77z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white/25 hover:text-accent transition-colors duration-300 p-1"
                aria-label="YouTube"
              >
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.15em] mb-0.5 lg:text-[11px] lg:mb-1">
              Navegaci&oacute;n
            </h4>
            <Link
              href="/"
              className="text-[13px] text-white/30 hover:text-white/70 transition-colors duration-300 py-0.5"
            >
              Inicio
            </Link>
            <Link
              href="/servicios"
              className="text-[13px] text-white/30 hover:text-white/70 transition-colors duration-300 py-0.5"
            >
              Servicios
            </Link>
            <Link
              href="/curso"
              className="text-[13px] text-white/30 hover:text-white/70 transition-colors duration-300 py-0.5"
            >
              Curso
            </Link>
            <Link
              href="/contacto"
              className="text-[13px] text-white/30 hover:text-white/70 transition-colors duration-300 py-0.5"
            >
              Contacto
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.15em] mb-0.5 lg:text-[11px] lg:mb-1">
              Contacto
            </h4>
            <p className="text-[12px] text-white/30 break-all sm:break-normal lg:text-[13px]">
              info@monacomoto&#8203;detailing.com
            </p>
            <p className="text-[13px] text-white/30">
              +XX XXX XXX XXX
            </p>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-white/[0.04] lg:mt-14 lg:pt-6">
          <p className="text-[10px] text-white/20 tracking-wide lg:text-[11px]">
            &copy; {new Date().getFullYear()} Monaco Moto Detailing. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
