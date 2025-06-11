'use client';

import React, { useState } from 'react';

function hitungDurasi(jam: string) {
  const [start, end] = jam.split(' - ').map((j) => parseInt(j.replace('.', '')));
  return (end - start) / 100;
}

function ambilJamHabis(jam: string) {
  return jam.split(' - ')[1];
}

function hitungTotal(jam: string, lapangan: string) {
  const durasi = hitungDurasi(jam);
  let hargaPerJam = 0;

  switch (lapangan.toLowerCase()) {
    case 'emas':
      hargaPerJam = 120000;
      break;
    case 'perak':
      hargaPerJam = 90000;
      break;
    case 'perunggu':
      hargaPerJam = 60000;
      break;
    default:
      hargaPerJam = 0;
  }

  return durasi * hargaPerJam;
}

function formatRupiah(angka: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(angka);
}

export default function PembayaranPage() {
  const [data, setData] = useState([
    { nama: 'Budi', lapangan: 'Emas', tanggal: '24 - April - 2025', jam: '07.00 - 08.00' },
    { nama: 'Santi', lapangan: 'Emas', tanggal: '24 - April - 2025', jam: '08.00 - 10.00' },
  ]);

  const [popupIndex, setPopupIndex] = useState<number | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null);
  const [buktiBayar, setBuktiBayar] = useState<File | null>(null);

  return (
    <main className="min-h-screen p-10 bg-white">
      <h1 className="text-center text-3xl font-bold italic mb-10">
        <span style={{ color: '#407225' }}>Pembayaran</span>{' '}
        <span className="text-black">Lapangan</span>
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr className="text-left text-sm font-semibold text-gray-700">
              <th className="py-3 px-4">No. Reservasi</th>
              <th className="py-3 px-4">Tanggal Pesan</th>
              <th className="py-3 px-4">Nama Lapangan</th>
              <th className="py-3 px-4">Jam Main</th>
              <th className="py-3 px-4">Lama Sewa</th>
              <th className="py-3 px-4">Jam Habis</th>
              <th className="py-3 px-4">Total</th>
              <th className="py-3 px-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i} className="border-b hover:bg-gray-50 text-sm">
                <td className="py-4 px-4">{i + 1}</td>
                <td className="py-4 px-4">{d.tanggal}</td>
                <td className="py-4 px-4">{d.lapangan}</td>
                <td className="py-4 px-4">{d.jam.split(' - ')[0]}</td>
                <td className="py-4 px-4">{hitungDurasi(d.jam)} Jam</td>
                <td className="py-4 px-4">{ambilJamHabis(d.jam)}</td>
                <td className="py-4 px-4">{formatRupiah(hitungTotal(d.jam, d.lapangan))}</td>
                <td className="py-4 px-4 space-x-2">
                  <button
                    onClick={() => setPopupIndex(i)}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded"
                  >
                    Bayar
                  </button>
                  <button
                    onClick={() => setConfirmDelete(i)}
                    className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded"
                  >
                    Batal
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL PEMBAYARAN */}
      {popupIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-[500px] p-6 rounded-xl relative">
            <button
              className="absolute top-3 right-3 text-2xl font-bold text-gray-600"
              onClick={() => setPopupIndex(null)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold text-center mb-4">
              Pesan Lapangan {data[popupIndex].lapangan.toUpperCase()}
            </h2>

            <div className="space-y-2 text-sm">
              <p>
                <strong>Jam Main:</strong> {data[popupIndex].jam.split(' - ')[0]}
              </p>
              <p>
                <strong>Lama Main:</strong> {hitungDurasi(data[popupIndex].jam)} Jam
              </p>
              <p>
                <strong>Jam Habis:</strong> {ambilJamHabis(data[popupIndex].jam)}
              </p>
              <p>
                <strong>Total:</strong>{' '}
                <span className="text-red-600 font-bold">
                  {formatRupiah(hitungTotal(data[popupIndex].jam, data[popupIndex].lapangan))}
                </span>
              </p>
              <p>
                <strong>Transfer Ke:</strong> DANA 089269744637 a/n Plarena Sport Center
              </p>

              <div>
                <label className="block mb-1">Upload Bukti Transfer</label>
                <input
                  type="file"
                  onChange={(e) => setBuktiBayar(e.target.files?.[0] || null)}
                  className="border w-full p-1 rounded"
                />
              </div>

              <div className="text-red-600 border border-red-400 p-2 text-center rounded">
                STATUS: BELUM DIBAYAR
              </div>

              <button
                onClick={() => {
                  alert('Pembayaran berhasil disubmit!');
                  setPopupIndex(null);
                }}
                className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-2 rounded"
              >
                Bayar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL KONFIRMASI BATAL */}
      {confirmDelete !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[400px] text-center relative">
            <h2 className="text-lg font-semibold mb-4">
              Yakin ingin membatalkan bookingan ini?
            </h2>
            <p className="text-sm mb-6">
              Bookingan atas nama <strong>{data[confirmDelete].nama}</strong> di Lapangan{' '}
              <strong>{data[confirmDelete].lapangan}</strong> tanggal{' '}
              <strong>{data[confirmDelete].tanggal}</strong>
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  const newData = [...data];
                  newData.splice(confirmDelete, 1);
                  setData(newData);
                  setConfirmDelete(null);
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
              >
                Ya, Batalkan
              </button>
              <button
                onClick={() => setConfirmDelete(null)}
                className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
