import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KC Despacho Juridico y Contable",
  description:
    "Consultoria juridica, fiscal y contable para empresas que necesitan claridad estrategica, cumplimiento y acompanamiento de alto nivel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
