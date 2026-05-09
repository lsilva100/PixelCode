import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import "@/app/ui/globals.css";
import NavBar from "@/app/components/NavBar";

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
      <body className={`${inter.className} antialiased`}>
        <div className="w-full bg-blue-500 py-6 flex justify-center items-center">
        <h1 className="text-3xl font-bold text-white">
          Landing page!
        </h1>
        </div>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
