import Link from "next/link";

export default function NavBar() {
    return (
    <nav className="w-full bg-blue-500 py-6 flex justify-center items-center">
      <div className="flex gap-4">
        <Link href="/">Home</Link>

        <Link href="/projects">
          Projects
        </Link>

        <Link href="/about">
          About
        </Link>
      </div>
    </nav>
    );  
}