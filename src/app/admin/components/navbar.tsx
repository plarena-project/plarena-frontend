'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  return (
    <header className="flex items-center justify-between px-10 py-5 bg-gray-100 shadow-md">
      <div className="text-xl font-bold italic">
        PLARENA <span className="text-limeCustom not-italic font-bold">SPORT</span>
      </div>
      <div className="flex items-center space-x-6">
        <nav className="flex space-x-6 font-bold">
          <Link href="/admin/" className="px-4 py-2 rounded-md transition hover:bg-limeCustom">Home</Link>
          <Link href="/admin/dataLapangan" className="px-4 py-2 rounded-md transition hover:bg-limeCustom">Data Lapangan</Link>
          <Link href="/admin/dataPesanan" className="px-4 py-2 rounded-md transition hover:bg-limeCustom">Data Pesanan</Link>
          <Link href="/admin/dataAdmin" className="px-4 py-2 rounded-md transition hover:bg-limeCustom">Data Admin</Link>
        </nav>
        <button
          onClick={() => router.push('/login')}
          className="px-4 py-2 rounded-md bg-limeCustom text-black border-2 border-limeCustom transition font-bold"
        >
          Profile
        </button>
      </div>
    </header>
  );
}