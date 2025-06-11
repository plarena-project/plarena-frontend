'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ProfilePage() {
  const [fotoFile, setFotoFile] = useState<File | null>(null);
  const [fotoPreview, setFotoPreview] = useState('/image/lapangan1.jpg');
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Anda belum login.');
        return;
      }

      const res = await fetch('http://127.0.0.1:8000/api/user', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await res.json();
      if (res.ok) {
        setProfile({ ...result, password: '' });
        if (result.foto) {
          setFotoPreview(`http://127.0.0.1:8000/storage/${result.foto}`);
        }
      } else {
        alert('Gagal memuat profil');
      }
      setLoading(false);
    };

    fetchProfile();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFotoFile(file);
      setFotoPreview(URL.createObjectURL(file));
    }
  };

  const handleBatal = () => {
    router.back();
  };

  const handleSimpan = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token || !profile?.id_pengguna) return;

      const formData = new FormData();
      formData.append('nama', profile.nama);
      formData.append('no_hp', profile.no_hp);
      formData.append('email', profile.email);
      if (profile.password) {
        formData.append('password', profile.password);
      }
      if (fotoFile) {
        formData.append('foto', fotoFile);
      }

      const response = await fetch(
        `http://127.0.0.1:8000/api/pengguna/${profile.id_pengguna}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
            'X-HTTP-Method-Override': 'PUT',
          },
          body: formData,
        }
      );

      const result = await response.json();
      if (response.ok) {
        alert('Profil berhasil diperbarui');
        router.push('/user');
      } else {
        alert('Gagal: ' + result.message);
      }
    } catch (err) {
      console.error(err);
      alert('Gagal menyimpan data');
    }
  };

  if (loading || !profile) {
    return <p className="text-center py-10">Memuat profil...</p>;
  }

  return (
    <div className="min-h-screen bg-white px-8 py-10">
      <h1 className="text-2xl font-semibold text-center mb-8">
        <span className="text-limeCustom font-bold">Detail</span> Profile
      </h1>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
        {/* FOTO */}
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
              required
            />
          </div>

          <div>
            <label className="text-sm font-semibold">No HP</label>
            <input
              name="no_hp"
              value={profile.no_hp}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-full px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Email</label>
            <input
              name="email"
              type="email"
              value={profile.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-full px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Password Baru (opsional)</label>
            <input
              name="password"
              type="password"
              value={profile.password}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-full px-4 py-2"
              placeholder="Biarkan kosong jika tidak diubah"
            />
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
