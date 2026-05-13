import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PixelCode",
  description: "PixelCode",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
