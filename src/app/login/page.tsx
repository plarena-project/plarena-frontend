"use client";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="bg-green-600 h-16 w-full"></div>

      {/* Middle with background image */}
      <div
        className="flex-grow bg-cover bg-center flex flex-col items-center justify-center relative"
        style={{ backgroundImage: "url('/bg.jpg')" }} // ganti 'bg.jpg' dengan gambar sesuai
      >
        {/* Plarena Sport Text */}
        <h1 className="text-white text-4xl font-bold mb-6 drop-shadow-md">
          Plarena Sport
        </h1>

        {/* Login Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg w-80 max-w-full">
          <h2 className="text-xl font-semibold text-center mb-4">Login</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="p-2 border rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-green-600 h-16 w-full"></div>
    </div>
  );
}
