'use client';

import React, { useState } from 'react';

function hitungDurasi(jam: string) {
  const [start, end] = jam.split(' - ').map((j) => parseInt(j.replace('.', '')));
  return (end - start) / 100;
}

function ambilJamHabis(jam: string) {
  return jam.split(' - ')[1];
}

export default function DataPesananPage() {
  const [data] = useState([
    { nama: 'Budi', lapangan: 'Emas', tanggal: '24 - April - 2025', jam: '07.00 - 08.00', status: 'Lunas' },
    { nama: 'Santi', lapangan: 'Emas', tanggal: '24 - April - 2025', jam: '08.00 - 10.00', status: 'DP' },
    { nama: 'Dika', lapangan: 'Perak', tanggal: '24 - April - 2025', jam: '10.00 - 11.00', status: 'Lunas' },
    { nama: 'Yuma', lapangan: 'Perunggu', tanggal: '24 - April - 2025', jam: '11.00 - 13.00', status: 'Lunas' },
    { nama: 'Puma', lapangan: 'Perak', tanggal: '24 - April - 2025', jam: '13.00 - 14.00', status: 'Lunas' },
    { nama: 'Pak lek', lapangan: 'Perunggu', tanggal: '24 - April - 2025', jam: '14.00 - 15.00', status: 'DP' },
    { nama: 'Irsyad', lapangan: 'Perunggu', tanggal: '24 - April - 2025', jam: '15.00 - 17.00', status: 'DP' },
    { nama: 'Iqbal', lapangan: 'Perak', tanggal: '24 - April - 2025', jam: '17.00 - 20.00', status: 'DP' },
    { nama: 'Pacin', lapangan: 'Emas', tanggal: '24 - April - 2025', jam: '20.00 - 21.00', status: 'Lunas' },
    { nama: 'Ilham', lapangan: 'Emas', tanggal: '24 - April - 2025', jam: '21.00 - 22.00', status: 'Lunas' },
  ]);

  return (
    <main className="min-h-screen p-10 bg-white">
      <h1 className="text-center text-3xl font-bold italic mb-10">
        <span style={{ color: '#407225' }}>Jadwal</span>{' '}
        <span className="text-black">Lapangan</span>
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr className="text-left text-sm font-semibold text-gray-700">
              <th className="py-3 px-4">No. Reservasi</th>
              <th className="py-3 px-4">Tanggal Pesan</th>
              <th className="py-3 px-4">Nama Pemesan</th>
              <th className="py-3 px-4">Nama Lapangan</th>
              <th className="py-3 px-4">Jam Main</th>
              <th className="py-3 px-4">Lama Sewa</th>
              <th className="py-3 px-4">Jam Habis</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i} className="border-b hover:bg-gray-50 text-sm">
                <td className="py-4 px-4">{i + 1}</td>
                <td className="py-4 px-4">{d.tanggal}</td>
                <td className="py-4 px-4">{d.nama}</td>
                <td className="py-4 px-4">{d.lapangan}</td>
                <td className="py-4 px-4">{d.jam.split(' - ')[0]}</td>
                <td className="py-4 px-4">{hitungDurasi(d.jam)} Jam</td>
                <td className="py-4 px-4">{ambilJamHabis(d.jam)}</td>
                <td className="py-4 px-4">
                  <button className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-1 rounded">
                    Booked
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
