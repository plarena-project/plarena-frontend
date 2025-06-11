'use client';

import { useEffect, useState } from 'react';

interface Pemesanan {
  id_pemesanan: number;
  tanggal_pesan: string;
  pengguna: { nama: string };
  lapangan: { jenis: string; harga: number };
  jam_main: string;
  lama_sewa: number;
  jam_habis: string;
  status: string;
}

function formatRupiah(angka: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(angka);
}

export default function PembayaranPage() {
  const [data, setData] = useState<Pemesanan[]>([]);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null);
  const [buktiBayar, setBuktiBayar] = useState<File | null>(null);
  const [errorUpload, setErrorUpload] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      const res = await fetch('http://127.0.0.1:8000/api/pemesanan', {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await res.json();
      if (res.ok) setData(result.data);
      else alert('Gagal mengambil data pemesanan');
    };

    fetchData();
  }, []);

  const handleKirim = async () => {
    if (!buktiBayar) {
      setErrorUpload("Silakan upload bukti pembayaran terlebih dahulu.");
      return;
    }

    if (popupIndex !== null) {
      const pemesanan = data[popupIndex];
      const token = localStorage.getItem('token');
      if (!token) return;

      const formData = new FormData();
      formData.append('bukti_bayar', buktiBayar);

      const res = await fetch(`http://127.0.0.1:8000/api/upload-bukti-bayar/${pemesanan.id_pemesanan}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const result = await res.json();
      if (res.ok) {
        const updated = [...data];
        updated[popupIndex].status = 'ditinjau';
        setData(updated);
        setPopupIndex(null);
        setBuktiBayar(null);
        setErrorUpload('');
        alert('Bukti pembayaran berhasil dikirim!');
      } else {
        alert('Gagal upload bukti pembayaran: ' + result.message);
      }
    }
  };

  const handleBatal = async () => {
    if (confirmDelete === null) return;
    const pemesanan = data[confirmDelete];
    const token = localStorage.getItem('token');
    if (!token) return;

    const res = await fetch(`http://127.0.0.1:8000/api/pemesanan/${pemesanan.id_pemesanan}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      const updated = [...data];
      updated.splice(confirmDelete, 1);
      setData(updated);
      setConfirmDelete(null);
    } else {
      alert('Gagal membatalkan pemesanan');
    }
  };

  return (
    <main className="min-h-screen p-10 bg-white">
      <h1 className="text-center text-3xl font-bold italic mb-10">
        <span style={{ color: '#407225' }}>Pembayaran</span>{' '}
        <span className="text-black">Lapangan</span>
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-fixed bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-center text-sm text-gray-700">
            <tr>
              <th className="py-3 px-4 w-[50px]">No</th>
              <th className="py-3 px-4">Nama</th>
              <th className="py-3 px-4">Lapangan</th>
              <th className="py-3 px-4">Tanggal</th>
              <th className="py-3 px-4">Jam Main</th>
              <th className="py-3 px-4">Jam Habis</th>
              <th className="py-3 px-4">Durasi</th>
              <th className="py-3 px-4">Total</th>
              <th className="py-3 px-4">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-center text-sm">
            {data.map((item, i) => (
              <tr key={item.id_pemesanan} className="border-b">
                <td className="py-3 px-4">{i + 1}</td>
                <td className="py-3 px-4">{item.pengguna.nama}</td>
                <td className="py-3 px-4">{item.lapangan.jenis}</td>
                <td className="py-3 px-4">{item.tanggal_pesan}</td>
                <td className="py-3 px-4">{item.jam_main}</td>
                <td className="py-3 px-4">{item.jam_habis}</td>
                <td className="py-3 px-4">{item.lama_sewa} jam</td>
                <td className="py-3 px-4">
                  {formatRupiah(item.lama_sewa * item.lapangan.harga)}
                </td>
                <td className="py-3 px-4 space-x-1">
                  <button
                    onClick={() => {
                      setPopupIndex(i);
                      setBuktiBayar(null);
                      setErrorUpload('');
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs"
                  >
                    Bayar
                  </button>
                  <button
                    onClick={() => setConfirmDelete(i)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs"
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
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-[500px] p-6 rounded-xl relative">
            <button
              className="absolute top-3 right-3 text-2xl font-bold text-gray-600"
              onClick={() => setPopupIndex(null)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold text-center mb-4">
              Pembayaran Lapangan {data[popupIndex].lapangan.jenis}
            </h2>

            <div className="space-y-2 text-sm">
              <p><strong>Tanggal:</strong> {data[popupIndex].tanggal_pesan}</p>
              <p><strong>Jam Main:</strong> {data[popupIndex].jam_main}</p>
              <p><strong>Jam Habis:</strong> {data[popupIndex].jam_habis}</p>
              <p><strong>Lama:</strong> {data[popupIndex].lama_sewa} jam</p>
              <p><strong>Total:</strong>{' '}
                <span className="text-red-600 font-bold">
                  {formatRupiah(data[popupIndex].lama_sewa * data[popupIndex].lapangan.harga)}
                </span>
              </p>
              <p><strong>Transfer ke:</strong> DANA 089269744637 a/n Plarena Sport Center</p>

              <div>
                <label className="block mb-1">Upload Bukti Bayar</label>
                <input
                  type="file"
                  onChange={(e) => {
                    setBuktiBayar(e.target.files?.[0] || null);
                    setErrorUpload('');
                  }}
                  className="border w-full p-1 rounded"
                />
                {errorUpload && (
                  <p className="text-red-600 text-xs mt-1">{errorUpload}</p>
                )}
              </div>

              <div className="text-orange-600 border border-orange-400 p-2 text-center rounded">
                STATUS: {data[popupIndex].status.toUpperCase()}
              </div>

              <button
                onClick={handleKirim}
                className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded"
              >
                Kirim
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL KONFIRMASI BATAL */}
      {confirmDelete !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-[400px] p-6 rounded-xl text-center">
            <h2 className="text-lg font-bold mb-2">Batalkan Pemesanan?</h2>
            <p className="text-sm mb-4">
              Anda yakin ingin membatalkan pemesanan lapangan{' '}
              <strong>{data[confirmDelete].lapangan.jenis}</strong> pada{' '}
              <strong>{data[confirmDelete].tanggal_pesan}</strong>?
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={handleBatal}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
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
