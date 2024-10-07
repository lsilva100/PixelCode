import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="main-background w-full">
      <header className="grid w-full grid-cols-[150px_1fr] items-center justify-between bg-blue-500 py-4">
        <Image
          className="" // Adicione suas classes CSS aqui
          src="/logo-pixel.svg" // Caminho para a imagem na pasta public
          alt="Pixel Logo" // Texto alternativo
          width={180} // Largura da imagem
          height={38} // Altura da imagem
          priority // (opcional) Carregar a imagem com alta prioridade
        />

        <nav className="flex justify-center"></nav>
      </header>

      <section className="">
        <h1 className="mx-auto max-w-lg text-center">
          Estamos em obras, mas acompanhe nas redes sociais...
        </h1>

        <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <button>Siga no Instagram</button>
        </div>
      </section>
    </main>
  );
}
