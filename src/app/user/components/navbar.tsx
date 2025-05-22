"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <header className="flex items-center justify-between px-10 py-5 bg-gray-100 shadow-md">
      <div className="text-xl font-bold italic">
        PLARENA <span className="text-limeCustom not-italic font-bold">SPORT</span>
      </div>
      <div className="flex items-center space-x-6">
        <nav className="flex space-x-6 font-bold">
          <Link href="/user/" className="px-4 py-2 rounded-md transition hover:bg-limeCustom hover:text-white">
            Home
          </Link>
          <Link href="/user/lapangan" className="px-4 py-2 rounded-md transition hover:bg-limeCustom hover:text-white">
            Lapangan
          </Link>
          <Link href="/user/pembayaran" className="px-4 py-2 rounded-md transition hover:bg-limeCustom hover:text-white">
            Pembayaran
          </Link>
        </nav>
        <button onClick={() => router.push("/login")} className="px-4 py-2 rounded-md  text-black  transition font-bold hover:bg-limeCustom hover:text-white">
          Profile
        </button>
      </div>
    </header>
  );
}
