import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LayoutShell } from "@/components/LayoutShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Monaco Moto Detailing",
  description:
    "Reserva un lavado profesional y detallado para tu moto.",
  keywords: [
    "lavado de motos",
    "detailing motos",
    "lavadero de motos",
    "curso lavadero motos",
    "moto detailing",
    "limpieza profesional motos",
    "monaco moto detailing",
  ],
  openGraph: {
    title: "Monaco Moto Detailing",
    description:
      "Reserva un lavado profesional y detallado para tu moto.",
    url: "https://monacomotodetailing.com",
    siteName: "Monaco Moto Detailing",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monaco Moto Detailing",
    description: "Reserva un lavado profesional y detallado para tu moto.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
