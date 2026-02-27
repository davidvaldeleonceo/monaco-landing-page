"use client";

import { usePathname } from "next/navigation";
import { StickyNavbar } from "@/components/StickyNavbar";
import { Footer } from "@/components/Footer";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isServicios = pathname === "/servicios";

  if (isHome || isServicios) {
    return <main>{children}</main>;
  }

  return (
    <>
      <StickyNavbar />
      <main className="pt-[70px]">{children}</main>
      <Footer />
    </>
  );
}
