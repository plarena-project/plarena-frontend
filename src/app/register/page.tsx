"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="bg-limeCustom h-16 w-full" />

      {/* Middle */}
      <div
        className="flex-grow bg-cover bg-center flex flex-col items-center justify-center relative px-4"
        style={{ backgroundImage: "url('/image/lapangan1.jpg')" }}
      >
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold italic text-white drop-shadow-md mb-8 text-center">
          PLARENA{" "}
          <span className="text-limeCustom font-bold not-italic">SPORT</span>
        </h1>

        {/* Register Card */}
        <div className="bg-white p-10 sm:p-12 rounded-2xl shadow-2xl w-full max-w-4xl flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-center mb-8">Register</h2>
          <form className="flex flex-col space-y-6">
            {/* Full Name & Phone */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-limeCustom transition"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Nomor HP
                </label>
                <input
                  type="tel"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-limeCustom transition"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            {/* Email & Password */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-limeCustom transition"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-limeCustom transition"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Alamat Lengkap
              </label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-limeCustom transition"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            {/* Gender */}
            <div>
              <span className="block text-sm font-medium mb-2">
                Jenis Kelamin
              </span>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Laki-laki"
                    checked={gender === "Laki-laki"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <span>Laki-laki</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Perempuan"
                    checked={gender === "Perempuan"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <span>Perempuan</span>
                </label>
              </div>
            </div>

            {/* Photo Upload */}
            <div>
              <label className="block text-sm font-medium mb-1">Foto</label>
              <input
                type="file"
                accept="image/*"
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-limeCustom transition"
                onChange={(e) => {
                  const files = e.target.files;
                  if (files && files.length > 0) {
                    setPhoto(files[0]);
                  }
                }}
              />
            </div>

            {/* Button */}
            <button
            type="button"
            onClick={() => router.push("/login")}
            className="bg-limeCustom text-white py-3 rounded-full hover:bg-lime-500 transition font-semibold"
            >Register
            </button>
          </form>

          <p className="text-center text-sm mt-6">
            Sudah punya akun?{" "}
            <a
              href="/login"
              className="text-limeCustom font-semibold hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-limeCustom h-16 w-full" />
    </div>
  );
}
