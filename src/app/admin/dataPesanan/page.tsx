'use client';

import React, { useState } from 'react';

function DetailPesananModal({ pesanan, onClose, onUpdateStatus }: any) {
  if (!pesanan) return null;

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onUpdateStatus({ ...pesanan, status: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-gray-800/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-md p-6 max-w-md w-full shadow-lg">
        <h2 className="text-center text-xl font-bold mb-4">Detail Pesanan</h2>
        <div className="space-y-3 text-gray-700">
          <p><strong>Nama:</strong> {pesanan.nama}</p>
          <p><strong>Jenis Lapangan:</strong> {pesanan.lapangan}</p>
          <p><strong>Tanggal Booking:</strong> {pesanan.tanggal}</p>
          <p><strong>Jam Booking:</strong> {pesanan.jam}</p>
          <p>
            <strong>Status:</strong>{' '}
            <select
              value={pesanan.status}
              onChange={handleStatusChange}
              className="border rounded px-2 py-1"
            >
              <option value="DP">DP</option>
              <option value="Lunas">Lunas</option>
            </select>
          </p>
        </div>
        <div className="flex justify-end mt-6 space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DataPesananPage() {
  const [data, setData] = useState([
    { nama: 'Budi', lapangan: 'Emas', tanggal: '24 - april - 20025', jam: '07.00 - 08.00', status: 'Lunas' },
    { nama: 'Santi', lapangan: 'Emas', tanggal: '24 - april - 20025', jam: '08.00 - 10.00', status: 'DP' },
    { nama: 'Dika', lapangan: 'Perak', tanggal: '24 - april - 20025', jam: '10.00 - 11.00', status: 'Lunas' },
    { nama: 'Yuma', lapangan: 'Perunggu', tanggal: '24 - april - 20025', jam: '11.00 - 13.00', status: 'Lunas' },
    { nama: 'Puma', lapangan: 'Perak', tanggal: '24 - april - 20025', jam: '13.00 - 14.00', status: 'Lunas' },
    { nama: 'Pak lek', lapangan: 'Perunggu', tanggal: '24 - april - 20025', jam: '14.00 - 15.00', status: 'DP' },
    { nama: 'Irsyad', lapangan: 'Perunggu', tanggal: '24 - april - 20025', jam: '15.00 - 17.00', status: 'DP' },
    { nama: 'Iqbal', lapangan: 'Perak', tanggal: '24 - april - 20025', jam: '17.00 - 20.00', status: 'DP' },
    { nama: 'Pacin', lapangan: 'Emas', tanggal: '24 - april - 20025', jam: '20.00 - 21.00', status: 'Lunas' },
    { nama: 'Ilham', lapangan: 'Emas', tanggal: '24 - april - 20025', jam: '21.00 - 22.00', status: 'Lunas' },
  ]);

  const [selectedPesanan, setSelectedPesanan] = useState<any | null>(null);

  const handleUpdateStatus = (updatedPesanan: any) => {
    const updatedData = data.map((d) =>
      d.nama === updatedPesanan.nama && d.tanggal === updatedPesanan.tanggal && d.jam === updatedPesanan.jam
        ? updatedPesanan
        : d
    );
    setData(updatedData);
    setSelectedPesanan(updatedPesanan); // Update modal juga
  };

  return (
    <main className="min-h-screen p-10 bg-white">
      <h1 className="text-center text-3xl font-bold italic mb-10">
        <span style={{ color: '#407225' }}>Data</span>{' '}
        <span className="text-black">Pesanan</span>
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr className="text-left text-sm font-semibold text-gray-700">
              <th className="py-3 px-4">No</th>
              <th className="py-3 px-4">Nama</th>
              <th className="py-3 px-4">Jenis Lapangan</th>
              <th className="py-3 px-4">Tanggal Booking</th>
              <th className="py-3 px-4">Jam Booking</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="py-4 px-4">{i + 1}</td>
                <td className="py-4 px-4">{d.nama}</td>
                <td className="py-4 px-4">{d.lapangan}</td>
                <td className="py-4 px-4">{d.tanggal}</td>
                <td className="py-4 px-4">{d.jam}</td>
                <td className="py-4 px-4">{d.status}</td>
                <td className="py-4 px-4 space-x-2">
                  <button
                    onClick={() => setSelectedPesanan(d)}
                    className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded"
                  >
                    Detail
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-4 text-sm text-gray-500">&lt; 01/20 &gt;</div>

      {/* Modal Detail Pesanan */}
      {selectedPesanan && (
        <DetailPesananModal
          pesanan={selectedPesanan}
          onClose={() => setSelectedPesanan(null)}
          onUpdateStatus={handleUpdateStatus}
        />
      )}
    </main>
  );
}
