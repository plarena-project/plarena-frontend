"use client";

import Image from "next/image";
import { useState } from "react";
import EditLapanganModal from "../components/editLapanganModal";
import { Lapangan } from "app/types/Lapangan";
// Pastikan path ini sesuai dengan struktur project-mu

export default function DataLapanganPage() {
  const [selected, setSelected] = useState<Lapangan | null>(null);
  const [dataLapangan, setDataLapangan] = useState<Lapangan[]>([
    {
      id: 1,
      nama: "Emas",
      harga: "10.000",
      keterangan: "Lapangan dengan kualitas Premium",
      foto: "/image/lapangan4.jpg",
    },
    {
      id: 2,
      nama: "Perak",
      harga: "8.000",
      keterangan: "Lapangan dengan kualitas bagus",
      foto: "/image/lapangan3.jpg",
    },
    {
      id: 3,
      nama: "Perunggu",
      harga: "5.000",
      keterangan: "Lapangan dengan kualitas Layak",
      foto: "/image/lapangan5.jpg",
    },
  ]);

  const handleSave = (updated: Lapangan) => {
    const updatedList = dataLapangan.map((item) => (item.id === updated.id ? updated : item));
    setDataLapangan(updatedList);
    setSelected(null);
  };

  return (
    <div className="min-h-screen bg-white px-8 py-12">
      <h1 className="text-center text-3xl font-bold italic mb-10">
        <span style={{ color: "#407225" }}>Data</span> <span className="text-black">Lapangan</span>
      </h1>

      <div className="mb-6">
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded">Tambah</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr className="text-left text-sm font-semibold text-gray-700">
              <th className="py-3 px-4">No</th>
              <th className="py-3 px-4">Nama Lapangan</th>
              <th className="py-3 px-4">Harga</th>
              <th className="py-3 px-4">Keterangan</th>
              <th className="py-3 px-4">Foto</th>
              <th className="py-3 px-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dataLapangan.map((lapangan, index) => (
              <tr key={lapangan.id} className="border-b">
                <td className="py-4 px-4">{index + 1}</td>
                <td className="py-4 px-4">{lapangan.nama}</td>
                <td className="py-4 px-4">{lapangan.harga}</td>
                <td className="py-4 px-4">{lapangan.keterangan}</td>
                <td className="py-4 px-4">
                  <Image src={lapangan.foto} alt={lapangan.nama} width={100} height={60} className="rounded-md object-cover" />
                </td>
                <td className="py-4 px-4 space-x-2">
                  <button onClick={() => setSelected(lapangan)} className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selected && <EditLapanganModal lapangan={selected} onClose={() => setSelected(null)} onSave={handleSave} />}
    </div>
  );
}
