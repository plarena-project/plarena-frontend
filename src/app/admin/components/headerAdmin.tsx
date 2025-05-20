import Link from 'next/link'; // <-- ini penting!
export default function HeaderAdmin() {
  return (
    <header className="w-full bg-[#E8E8E8] p-4 flex items-center justify-between">
      {/* Kiri: Logo atau Nama */}
      <div className="text-2xl font-bold italic">
        <span className="text-black">Plarena</span>{" "}
        <span style={{ color: "#407225" }}>Sport</span>
      </div>

      {/* Kanan: Navigasi */}
      <nav className="flex items-center space-x-6">
        <Link href="/admin" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link href="/admin/dataLapangan" className="text-gray-700 hover:text-blue-600">Data Lapangan</Link>
        <Link href="/admin/dataMember" className="text-gray-700 hover:text-blue-600">Data Member</Link>
        <Link href="/admin/dataPesanan" className="text-gray-700 hover:text-blue-600">Data Pesanan</Link>
        <a href="#" className="text-gray-700 hover:text-blue-600">Data Admin</a>
        <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Profile
        </button>
      </nav>
    </header>
  );
}
