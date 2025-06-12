'use client';

import Image from "next/image";
import { useState } from "react";
import EditLapanganModal from "../components/editLapanganModal";
import { Lapangan } from "app/types/Lapangan";

export default function DataLapanganPage() {
  const [selected, setSelected] = useState<Lapangan | null>(null);
  const [lapanganToDelete, setLapanganToDelete] = useState<Lapangan | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
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

  // State untuk form tambah lapangan
  const [formData, setFormData] = useState({
    nama: "",
    harga: "",
    keterangan: "",
    foto: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleSave = (updated: Lapangan) => {
    const updatedList = dataLapangan.map((item) =>
      item.id === updated.id ? updated : item
    );
    setDataLapangan(updatedList);
    setSelected(null);
  };

  const handleDelete = () => {
    if (!lapanganToDelete) return;
    setDataLapangan((prev) => prev.filter((item) => item.id !== lapanganToDelete.id));
    setLapanganToDelete(null);
  };

  const handleAddLapangan = () => {
    if (!formData.nama || !formData.harga || !formData.keterangan || (!formData.foto && !selectedFile)) {
      alert("Semua field harus diisi!");
      return;
    }

    const newId = Math.max(...dataLapangan.map(item => item.id)) + 1;
    let fotoUrl = formData.foto;
    
    // Jika ada file yang dipilih, buat URL sementara untuk preview
    if (selectedFile) {
      fotoUrl = URL.createObjectURL(selectedFile);
    }

    const newLapangan: Lapangan = {
      id: newId,
      nama: formData.nama,
      harga: formData.harga,
      keterangan: formData.keterangan,
      foto: fotoUrl,
    };

    setDataLapangan([...dataLapangan, newLapangan]);
    setFormData({ nama: "", harga: "", keterangan: "", foto: "" });
    setSelectedFile(null);
    setShowAddModal(false);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
    setFormData({ nama: "", harga: "", keterangan: "", foto: "" });
    setSelectedFile(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setFormData({ ...formData, foto: "" }); // Clear URL input when file is selected
    }
  };

  return (
    <div className="min-h-screen bg-white px-8 py-12">
      <h1 className="text-center text-3xl font-bold italic mb-10">
        <span style={{ color: "#407225" }}>Data</span>{" "}
        <span className="text-black">Lapangan</span>
      </h1>

      <div className="mb-6">
        <button 
          onClick={() => setShowAddModal(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded"
        >
          Tambah
        </button>
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
                  <Image
                    src={lapangan.foto}
                    alt={lapangan.nama}
                    width={100}
                    height={60}
                    className="rounded-md object-cover"
                  />
                </td>
                <td className="py-4 px-4 space-x-2">
                  <button
                    onClick={() => setSelected(lapangan)}
                    className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setLapanganToDelete(lapangan)}
                    className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selected && (
        <EditLapanganModal
          lapangan={selected}
          onClose={() => setSelected(null)}
          onSave={handleSave}
        />
      )}

      {lapanganToDelete && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-md w-96 text-center space-y-4">
            <h2 className="text-lg font-semibold text-red-600">Yakin ingin menghapus?</h2>
            <p className="text-gray-600 text-sm">
              Lapangan <strong>{lapanganToDelete.nama}</strong> akan dihapus secara permanen.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={() => setLapanganToDelete(null)}
                className="px-4 py-1 bg-gray-300 rounded hover:bg-gray-400"
              >
                Batal
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}

      {showAddModal && (
        <div className="fixed inset-0 bg-gray-500/50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-md w-96">
            <h2 className="text-lg font-semibold text-center mb-4" style={{ color: "#407225" }}>
              Tambah Lapangan Baru
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lapangan
                </label>
                <input
                  type="text"
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan nama lapangan"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Harga
                </label>
                <input
                  type="text"
                  value={formData.harga}
                  onChange={(e) => setFormData({ ...formData, harga: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan harga (contoh: 10.000)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Keterangan
                </label>
                <textarea
                  value={formData.keterangan}
                  onChange={(e) => setFormData({ ...formData, keterangan: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan keterangan lapangan"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Foto
                </label>
                <div className="space-y-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="text-center text-sm text-gray-500">atau</div>
                  <input
                    type="text"
                    value={formData.foto}
                    onChange={(e) => {
                      setFormData({ ...formData, foto: e.target.value });
                      setSelectedFile(null); // Clear file when URL is entered
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Masukkan URL foto"
                    disabled={!!selectedFile}
                  />
                  {selectedFile && (
                    <div className="text-sm text-green-600">
                      File dipilih: {selectedFile.name}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={handleCloseAddModal}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Batal
              </button>
              <button
                onClick={handleAddLapangan}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Tambah
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}