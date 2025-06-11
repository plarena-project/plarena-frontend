"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProfilePage() {
  const [isClient, setIsClient] = useState(false);
  const [profile, setProfile] = useState({
    nama: "Irsyad Dany",
    email: "irsyad@gmail.com",
    gender: "Laki-laki",
    telepon: "082938484950",
    kota: "Malang",
    foto: "/image/lapangan1.jpg",
  });
  const [fotoPreview, setFotoPreview] = useState(profile.foto);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const previewURL = URL.createObjectURL(file);
      setFotoPreview(previewURL);
    }
  };

  const handleBatal = () => {
    // bisa reset ke data awal atau redirect
    window.location.reload();
  };

  const handleSimpan = () => {
    alert("Data berhasil disimpan (dummy)");
    // Tambahkan logika update ke backend jika perlu
  };

  return (
    <div className="min-h-screen bg-white px-8 py-10">
      <h1 className="text-2xl font-semibold text-center mb-8">
        <span className="text-limeCustom font-bold">Detail</span> Profile
      </h1>

      <div className="max-w-5xl mx-auto bg-white flex flex-col md:flex-row gap-10">
        {/* FOTO PROFIL */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          <div className="w-40 h-52 relative rounded-md overflow-hidden mb-4 shadow">
            <Image
              src={fotoPreview}
              alt="Foto Profil"
              fill
              className="object-cover"
            />
          </div>
          <label className="text-sm mb-1">Ganti Foto</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFotoChange}
            className="text-sm"
          />
        </div>

        {/* FORM */}
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-semibold">Nama Lengkap</label>
            <input
              name="nama"
              value={profile.nama}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-full px-4 py-2"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">No Telephone</label>
            <input
              name="telepon"
              value={profile.telepon}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-full px-4 py-2"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Email</label>
            <input
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-full px-4 py-2"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Kota</label>
            <input
              name="kota"
              value={profile.kota}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-full px-4 py-2"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-semibold">Gender</label>
            <select
              name="gender"
              value={profile.gender}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-full px-4 py-2"
            >
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>

          <div className="flex gap-4 md:col-span-2 mt-6">
            <button
              onClick={handleBatal}
              className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500 transition"
            >
              Batal
            </button>
            <button
              onClick={handleSimpan}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
