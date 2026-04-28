import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nossa Lavoura | Tradicao em Jaru",
  description:
    "Mais de 40 anos cultivando confianca e prosperidade no campo de Jaru.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
