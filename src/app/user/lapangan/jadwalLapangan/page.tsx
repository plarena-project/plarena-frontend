'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

interface Pemesanan {
  id_pemesanan: number;
  tanggal_pesan: string;
  pengguna: {
    nama: string;
  };
  jam_main: string;
  lama_sewa: number;
  jam_habis: string;
  status: string;
}

export default function JadwalLapanganPage() {
  const searchParams = useSearchParams();
  const idLapangan = searchParams.get('id');

  const [jadwal, setJadwal] = useState<Pemesanan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJadwal = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;

        const res = await fetch('http://127.0.0.1:8000/api/pemesanan', {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await res.json();

        if (res.ok) {
          const filtered = result.data.filter(
            (item: any) => String(item.lapangan?.id_lapangan) === idLapangan
          );
          setJadwal(filtered);
        } else {
          alert('Gagal mengambil data');
        }
      } catch (error) {
        console.error(error);
        alert('Terjadi kesalahan saat mengambil data jadwal');
      } finally {
        setLoading(false);
      }
    };

    if (idLapangan) {
      fetchJadwal();
    }
  }, [idLapangan]);

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-center text-3xl font-bold mb-6">
        <span className="text-[#407225]">Jadwal</span> Lapangan
      </h1>

      {loading ? (
        <p className="text-center">Memuat data...</p>
      ) : jadwal.length === 0 ? (
        <p className="text-center text-gray-500">Belum ada jadwal untuk lapangan ini.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-md shadow-md">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-sm">
                <th className="py-2 px-4 border">No</th>
                <th className="py-2 px-4 border">Tanggal</th>
                <th className="py-2 px-4 border">Nama Pemesan</th>
                <th className="py-2 px-4 border">Jam Main</th>
                <th className="py-2 px-4 border">Lama</th>
                <th className="py-2 px-4 border">Jam Habis</th>
                <th className="py-2 px-4 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {jadwal.map((item, index) => (
                <tr key={item.id_pemesanan} className="text-center text-sm">
                  <td className="py-2 px-4 border">{index + 1}</td>
                  <td className="py-2 px-4 border">{item.tanggal_pesan}</td>
                  <td className="py-2 px-4 border">{item.pengguna.nama}</td>
                  <td className="py-2 px-4 border">{item.jam_main}</td>
                  <td className="py-2 px-4 border">{item.lama_sewa} jam</td>
                  <td className="py-2 px-4 border">{item.jam_habis}</td>
                  <td className="py-2 px-4 border">
                    <span className="bg-yellow-300 text-xs font-semibold px-3 py-1 rounded-full">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
