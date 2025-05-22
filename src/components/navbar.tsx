"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <header className="flex items-center justify-between px-10 py-8 bg-white shadow-md">
      <div className="text-xl font-bold italic">
        PLARENA <span className="text-limeCustom not-italic font-bold">SPORT</span>
      </div>
      <div className="flex items-center space-x-6">
        <nav className="flex space-x-6 font-bold">
          <Link href="#home" className="px-4 py-2 rounded-md transition hover:bg-limeCustom hover:text-white">
            Home
          </Link>
          <Link href="#about" className="px-4 py-2 rounded-md transition hover:bg-limeCustom hover:text-white">
            About
          </Link>
          <Link href="#payment" className="px-4 py-2 rounded-md transition hover:bg-limeCustom hover:text-white">
            Payment Guide
          </Link>
          <Link href="#footer" className="px-4 py-2 rounded-md transition hover:bg-limeCustom hover:text-white">
            Contact
          </Link>
        </nav>
        <button onClick={() => router.push("/login")} className="px-4 py-2 rounded-md  text-black  hover:bg-limeCustom hover:text-white transition font-bold">
          Sign Up
        </button>
      </div>
    </header>
  );
}
