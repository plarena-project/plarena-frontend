'use client';

import React, { useEffect, useState } from 'react';

interface Jadwal {
  id_jadwal: number;
  tanggal_pesan: string;
  nama_pemesan: string;
  jenis_lapangan: string;
  jam_main: string;
  lama_sewa: string;
  jam_habis: string;
  status: string;
}

export default function DashboardUserPage() {
  const [jadwal, setJadwal] = useState<Jadwal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/jadwal')
      .then((res) => {
        if (!res.ok) throw new Error('Gagal mengambil data jadwal');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setJadwal(data);
        } else if (Array.isArray(data.data)) {
          setJadwal(data.data);
        } else {
          throw new Error('Format data tidak sesuai');
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen p-10 bg-white">
      <h1 className="text-center text-3xl font-bold italic mb-10">
        <span style={{ color: '#407225' }}>Jadwal</span>{' '}
        <span className="text-black">Lapangan</span>
      </h1>

      {loading ? (
        <p className="text-center">Memuat data...</p>
      ) : error ? (
        <p className="text-center text-red-600">Terjadi kesalahan: {error}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr className="text-left text-sm font-semibold text-gray-700">
                <th className="py-3 px-4">No. Reservasi</th>
                <th className="py-3 px-4">Tanggal Pesan</th>
                <th className="py-3 px-4">Nama Pemesan</th>
                <th className="py-3 px-4">Jenis Lapangan</th>
                <th className="py-3 px-4">Jam Main</th>
                <th className="py-3 px-4">Lama Sewa</th>
                <th className="py-3 px-4">Jam Habis</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {jadwal.map((d, i) => (
                <tr key={d.id_jadwal} className="border-b hover:bg-gray-50 text-sm">
                  <td className="py-4 px-4">{i + 1}</td>
                  <td className="py-4 px-4">{d.tanggal_pesan}</td>
                  <td className="py-4 px-4">{d.nama_pemesan}</td>
                  <td className="py-4 px-4">{d.jenis_lapangan}</td>
                  <td className="py-4 px-4">{d.jam_main.slice(0, 5)}</td>
                  <td className="py-4 px-4">{d.lama_sewa.slice(0, 5)} Jam</td>
                  <td className="py-4 px-4">{d.jam_habis.slice(0, 5)}</td>
                  <td className="py-4 px-4">
                    <button className={`text-white text-sm px-4 py-1 rounded ${d.status === 'booked' ? 'bg-green-600 hover:bg-green-700' : 'bg-yellow-500 hover:bg-yellow-600'}`}>
                      {d.status}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
