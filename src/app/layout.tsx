import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import "@/app/ui/globals.css";


export const metadata: Metadata = {
  title: "PixelCode | Portfolio de Desenvolvimento e Algoritmos",
  description: "PixelCode - Uma seleção de trabalhos de Lucas da Silva e Lucas das Neves que unem lógica, design e desenvolvimento. Explore visualizações de algoritmos e projetos de software.",
  keywords: ["desenvolvimento", "algoritmos", "lógica", "design", "software", "visualização", "busca binária", "busca linear", "tabela hash", "grafos", "Lucas da Silva", "Lucas das Neves"],
  authors: [{ name: "Lucas da Silva" }, { name: "Lucas das Neves" }],
  openGraph: {
    title: "PixelCode | Portfolio de Desenvolvimento e Algoritmos",
    description: "Uma seleção de trabalhos que unem lógica, design e desenvolvimento por Lucas da Silva e Lucas das Neves.",
    type: "website",
    locale: "pt_BR",
    url: "https://pixelcode.com.br",
    siteName: "PixelCode",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
