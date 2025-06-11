'use client';

import React from 'react';

export default function JadwalLapanganPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-center text-3xl font-bold mb-6">
        <span className="text-[#407225]">Jadwal</span> Lapangan
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-md shadow-md">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm">
              <th className="py-2 px-4 border">No. Reservation</th>
              <th className="py-2 px-4 border">Tanggal Pesan</th>
              <th className="py-2 px-4 border">Nama Pemesan</th>
              <th className="py-2 px-4 border">Nama Lapangan</th>
              <th className="py-2 px-4 border">Jam Main</th>
              <th className="py-2 px-4 border">Lama Sewa</th>
              <th className="py-2 px-4 border">Jam Habis</th>
              <th className="py-2 px-4 border">Status Booking</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center text-sm">
              <td className="py-2 px-4 border">1.</td>
              <td className="py-2 px-4 border">2025-04-19</td>
              <td className="py-2 px-4 border">Rhanilham</td>
              <td className="py-2 px-4 border">Lapangan Perunggu</td>
              <td className="py-2 px-4 border">2025-04-29 19:23:00</td>
              <td className="py-2 px-4 border">01:00:00</td>
              <td className="py-2 px-4 border">2025-04-29 20:23:00</td>
              <td className="py-2 px-4 border">
                <span className="bg-yellow-300 text-xs font-semibold px-3 py-1 rounded-full">
                  Booked
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
