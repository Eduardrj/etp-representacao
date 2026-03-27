import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ETP - Representação Comercial | Equipamentos e Materiais Médicos",
  description: "Especialistas em representação B2B de marcas como G-Tech, Fibrasca e Balmak para lojas cirúrgicas, hospitais e distribuidores no Rio de Janeiro e Espírito Santo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
