"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Tutup dropdown saat klik di luar area dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Ambil nama pengguna dari backend saat mount
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await fetch("http://127.0.0.1:8000/api/user", {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await res.json();
        if (res.ok) {
          setUserName(result.nama);
        } else {
          console.error("Gagal memuat data pengguna:", result.message);
        }
      } catch (error) {
        console.error("Gagal terhubung ke server:", error);
      }
    };

    fetchUser();
  }, []);

  // Logout dan redirect ke login
  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.clear(); // jika kamu pakai sessionStorage
    router.replace("/login");
  };

  const handleGoToProfile = () => {
    router.push("/user/profile");
  };

  return (
    <header className="flex items-center justify-between px-10 py-5 bg-gray-100 shadow-md">
      <div className="text-xl font-bold italic">
        PLARENA{" "}
        <span className="text-limeCustom not-italic font-bold">SPORT</span>
      </div>

      <div className="flex items-center space-x-6">
        <nav className="flex space-x-6 font-bold">
          <Link
            href="/user/"
            className="px-4 py-2 rounded-md transition hover:bg-limeCustom hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/user/lapangan"
            className="px-4 py-2 rounded-md transition hover:bg-limeCustom hover:text-white"
          >
            Lapangan
          </Link>
          <Link
            href="/user/pembayaran"
            className="px-4 py-2 rounded-md transition hover:bg-limeCustom hover:text-white"
          >
            Pembayaran
          </Link>
        </nav>

        {/* Dropdown Profile */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="px-4 py-2 rounded-md text-black font-bold transition hover:bg-limeCustom hover:text-white"
          >
            {userName ? userName : "Profile"} <span className="ml-1">▾</span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50">
              <button
                onClick={handleGoToProfile}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition"
              >
                Edit Profile
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
