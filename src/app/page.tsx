import Image from "next/image";
import Link from "next/link";
import CountdownTimer from "./CountdownTimer";

export default function Home() {
  return (
    <main className="w-full">
      {/* Imagem de fundo */}
      <Image
        src="/fundo-edit.jpg" // Caminho para a imagem na pasta public
        alt="Background"
        layout="fill" // Faz a imagem ocupar todo o espaço do contêiner
        objectFit="cover" // Ajusta a imagem para cobrir o espaço
        className="absolute inset-0"
      />

      <header className="relative z-10 grid w-full grid-cols-[135px_1fr] items-center justify-between bg-blue-500 py-4">
        <Image
          className="" // Adicione suas classes CSS aqui
          src="/logo-pixel.svg" // Caminho para a imagem na pasta public
          alt="Pixel Logo" // Texto alternativo
          width={180} // Largura da imagem
          height={40} // Altura da imagem
          priority // (opcional) Carregar a imagem com alta prioridade
        />

        <nav className="flex justify-center"></nav>
      </header>

      <section className="relative z-10">
        <h1 className="text-shadow text-withe mx-auto max-w-lg rounded-xl bg-blue-500 px-5 py-5 text-center ">
          Site em <span className="text-green-400">obras</span>, mas nos
          acompanhe no nosso Instagram!
        </h1>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="flex">
            <button className="flex w-full max-w-lg items-center rounded-xl px-5 py-3 text-lg uppercase text-white">
              <img
                src="/instagram.svg"
                alt="svg-insta"
                className="mr-2 h-10 w-10"
              />
              Siga no Instagram
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
