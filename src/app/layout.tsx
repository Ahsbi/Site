import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BI Contábil | Consultoria em Business Intelligence para Escritórios Contábeis",
  description:
    "Transformamos processos manuais em decisões estratégicas. Automatizamos dados, criamos dashboards e integramos sistemas contábeis, ERPs e planilhas em um único ambiente de Business Intelligence.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink-900">
        {children}
      </body>
    </html>
  );
}
