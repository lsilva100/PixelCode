import Image from "next/image";
import Link from "next/link";
import Toggle from "./components/Toggle";

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

      <header className="relative z-10 grid w-full grid-cols-3 gap-4 items-center bg-black py-4 px-4 text-white">
        <div className="flex items-center justify-start">
          <Image
            src="/logo_l2.svg"
            alt="Pixel Logo"
            width={90}
            height={40}
            priority
          />
        </div>

        <nav className="flex items-center justify-center gap-6 text-sm uppercase tracking-[0.2em]">
          <Link href="#">About us</Link>
          <Link href="#">Projects</Link>
          <Link href="#">Contact</Link>
        </nav>

        <div className="flex items-center justify-end">
      <div className="inline-flex items-center gap-5 rounded-full border border-zinc-700 px-4 py-2">
        <span className="text-sm uppercase tracking-wider text-zinc-400">
        LSilva
        </span>

      <Toggle />

        <span className="text-sm uppercase tracking-wider text-zinc-400">
        LMateus
          </span>
          </div>
          </div>
      </header>

      <section className="relative z-10">
        <h1 className="text-shadow text-withe mx-auto max-w-lg rounded-xl bg-blue-500 px-5 py-5 text-center ">
          Site em <span className="text-green-400">obras</span>, mas nos
          acompanhe de perto no nosso Instagram!
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
