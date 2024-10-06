import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="grid grid-cols-[150px_1fr] items-center justify-between py-4 ">
        <Link href={""} className="flex w-[150px]">
          <span className="font-mono text-2xl">PIXELCODE</span>
        </Link>

        <nav className="flex justify-center">
          <div className="marquee w-full ">
            <p className="flex items-center">Este site está em construção...</p>
          </div>
        </nav>
      </header>

      <section id="hero">
        <h1 className="mx-auto max-w-lg text-center">
          Estamos em construção...
        </h1>

        <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <button>Siga no Instagram</button>
        </div>
      </section>
    </main>
  );
}
