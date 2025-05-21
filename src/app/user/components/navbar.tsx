'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-10 py-5 bg-white shadow-md">
      <div className="text-xl font-bold italic">
        PLARENA <span className="text-[#79A900] not-italic font-bold">SPORT</span>
      </div>
      <nav className="flex space-x-6">
        <Link href="/admin" className="px-4 py-2 rounded-md hover:bg-[#79A900] transition">Home</Link>
        <Link href="/admin/dataLapangan" className="px-4 py-2 rounded-md hover:bg-[#79A900] transition">Data Lapangan</Link>
        <Link href="/admin/dataPesanan" className="px-4 py-2 rounded-md hover:bg-[#79A900] transition">Data Pesanan</Link>
        <Link href="/admin/dataAdmin" className="px-4 py-2 rounded-md hover:bg-[#79A900] transition">Data Admin</Link>
      </nav>
      <button className="px-4 py-2 rounded-md bg-[#79A900] text-black border-2 border-[#79A900] transition">
        Profile
      </button>
    </header>
  );
}
