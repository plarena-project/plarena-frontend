"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="bg-limeCustom h-16 w-full" />

      {/* Middle with background image */}
      <div
        className="flex-grow bg-cover bg-center flex flex-col items-center justify-center relative px-4"
        style={{ backgroundImage: "url('/image/lapangan1.jpg')" }}
      >
        {/* Plarena Sport Text */}
        <h1 className="text-4xl md:text-5xl font-bold italic text-white drop-shadow-md mb-8 text-center">
          PLARENA{" "}
          <span className="text-limeCustom font-bold not-italic">SPORT</span>
        </h1>

        {/* Login Card */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-2xl w-full max-w-md flex flex-col justify-center min-h-[28rem]">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Username"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-limeCustom transition"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-limeCustom transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => router.push("/user/")}
              className="bg-limeCustom text-white py-3 rounded-full hover:bg-lime-500 transition font-semibold"
            >
              Login
            </button>
          </form>
          <p className="text-center text-sm mt-4">
            Belum punya akun?{" "}
            <a
              href="/register"
              className="text-limeCustom font-semibold hover:underline"
            >
              Register
            </a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-limeCustom h-16 w-full" />
    </div>
  );
}
