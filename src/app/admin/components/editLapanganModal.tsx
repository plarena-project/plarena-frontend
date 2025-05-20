'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function EditLapanganModal({ lapangan, onClose, onSave }: any) {
  const [form, setForm] = useState(lapangan);
  const [preview, setPreview] = useState<string>(lapangan.foto);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setPreview(previewURL);
      setForm((prev: any) => ({ ...prev, foto: previewURL }));
    }
  };

  return (
    <div className="modal-overlay flex justify-center items-center">


      <div className="bg-white p-6 rounded-md w-full max-w-md shadow-lg">
        
        {/* Judul Tengah */}
        <h2 className="text-center text-xl font-bold text-gray-800 mb-4">
          Edit Lapangan
        </h2>

        {/* Preview Gambar */}
        <div className="mb-4">
          <Image
            src={preview}
            alt="Preview"
            width={500}
            height={300}
            className="rounded-md w-full h-48 object-cover"
          />
        </div>

        {/* Form Input */}
        <div className="space-y-3">
          <input
            type="text"
            value={form.nama}
            onChange={(e) => setForm({ ...form, nama: e.target.value })}
            className="w-full border px-3 py-2 rounded"
            placeholder="Nama Lapangan"
          />
          <input
            type="text"
            value={form.harga}
            onChange={(e) => setForm({ ...form, harga: e.target.value })}
            className="w-full border px-3 py-2 rounded"
            placeholder="Harga"
          />
          
          {/* Ganti Foto */}
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full border px-3 py-2 rounded bg-white file:mr-4 file:py-1 file:px-2 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />

          <textarea
            value={form.keterangan}
            onChange={(e) => setForm({ ...form, keterangan: e.target.value })}
            className="w-full border px-3 py-2 rounded"
            rows={3}
            placeholder="Keterangan"
          ></textarea>
        </div>

        {/* Tombol */}
        <div className="flex justify-end space-x-2 mt-5">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Tutup
          </button>
          <button
            onClick={() => onSave(form)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}
