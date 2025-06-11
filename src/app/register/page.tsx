'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    setError('');
    try {
      const formData = new FormData();
      formData.append('nama', fullName);
      formData.append('no_hp', phone);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('role', 'user'); // default role
      if (photo) {
        formData.append('foto', photo);
      }

      const response = await fetch('http://127.0.0.1:8000/api/pengguna', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        alert('Registrasi berhasil!');
        router.push('/login');
      } else {
        setError(result.message || 'Terjadi kesalahan.');
      }
    } catch (err) {
      setError('Gagal menghubungi server.');
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-limeCustom h-16 w-full" />
      <div
        className="flex-grow bg-cover bg-center flex flex-col items-center justify-center relative px-4"
        style={{ backgroundImage: "url('/image/lapangan1.jpg')" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold italic text-white drop-shadow-md mb-8 text-center">
          PLARENA <span className="text-limeCustom font-bold not-italic">SPORT</span>
        </h1>

        <div className="bg-white p-10 sm:p-12 rounded-2xl shadow-2xl w-full max-w-4xl flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-center mb-6">Register</h2>
          {error && <p className="text-red-600 text-center text-sm mb-4">{error}</p>}
          <form className="flex flex-col space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Nomor HP</label>
                <input
                  type="tel"
                  className="w-full p-3 border rounded-lg"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  className="w-full p-3 border rounded-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Foto (opsional)</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const files = e.target.files;
                  if (files && files.length > 0) {
                    setPhoto(files[0]);
                  }
                }}
              />
            </div>

            <button
              type="submit"
              onClick={handleRegister}
              className="bg-limeCustom text-white py-3 rounded-full hover:bg-[#5F8700] transition font-semibold"
            >
              Register
            </button>
          </form>

          <p className="text-center text-sm mt-6">
            Sudah punya akun?{' '}
            <a href="/login" className="text-limeCustom font-semibold hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
      <div className="bg-limeCustom h-16 w-full" />
    </div>
  );
}
