'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.message || 'Login gagal');
        return;
      }

      const token = result.token;
      const role = result.data.role;

      // Simpan token ke localStorage (opsional)
      localStorage.setItem('token', token);

      // Arahkan ke halaman sesuai role
      if (role === 'admin') {
        router.push('/admin');
      } else {
        router.push('/user');
      }
    } catch (err) {
      setError('Terjadi kesalahan koneksi.');
    }
  };

  return (
    <div className="flex flex-col">
      <div
        className="min-h-screen flex-grow bg-cover bg-center flex flex-col items-center justify-center relative px-4"
        style={{ backgroundImage: "url('/image/lapangan1.jpg')" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold italic text-white drop-shadow-md mb-8 text-center">
          PLARENA <span className="text-limeCustom font-bold not-italic">SPORT</span>
        </h1>

        <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-2xl w-full max-w-md flex flex-col justify-center min-h-[28rem]">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          {error && <p className="text-red-600 text-sm mb-4 text-center">{error}</p>}

          <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-limeCustom transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-limeCustom transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              onClick={handleLogin}
              className="bg-limeCustom text-white py-3 rounded-full hover:bg-[#5F8700] transition font-semibold"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm mt-4">
            Belum punya akun?{' '}
            <a href="/register" className="text-limeCustom font-semibold hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
