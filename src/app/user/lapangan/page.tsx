"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Lapangan {
  imageSrc: string;
  namaLapangan: string;
  harga: number;
}

export default function UserDashboard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedLapangan, setSelectedLapangan] = useState<Lapangan | null>(null);
  const [tanggal, setTanggal] = useState("");
  const [jam, setJam] = useState("");
  const [durasi, setDurasi] = useState("");

  const lapanganData: Lapangan[] = [
    {
      imageSrc: "/image/lapangan4.jpg",
      namaLapangan: "Lapangan Emas",
      harga: 120000,
    },
    {
      imageSrc: "/image/lapangan3.jpg",
      namaLapangan: "Lapangan Perak",
      harga: 90000,
    },
    {
      imageSrc: "/image/lapangan5.jpg",
      namaLapangan: "Lapangan Perunggu",
      harga: 60000,
    },
  ];

  const handlePesanClick = (lapangan: Lapangan) => {
    setSelectedLapangan(lapangan);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedLapangan(null);
    setTanggal("");
    setJam("");
    setDurasi("");
  };

  const handleSubmitPesan = () => {
    if (!tanggal || !jam || !durasi || parseInt(durasi) < 1 || parseInt(durasi) > 12) {
      alert("Harap isi tanggal, jam, dan durasi main (1-12 jam).");
      return;
    }

    alert(
      `Berhasil memesan ${selectedLapangan?.namaLapangan} pada ${tanggal} jam ${jam} selama ${durasi} jam.`
    );
    handleCloseModal();
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-center text-3xl font-bold italic mb-10">
        <span className="text-black">Lapangan di Plarena</span>{" "}
        <span style={{ color: "#407225" }}>Sport</span>
      </h1>

      <div className="flex flex-col md:flex-row justify-around gap-6">
        {lapanganData.map((lapangan, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 w-full md:w-1/3 transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out group cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="w-full h-48 relative mb-4 overflow-hidden rounded-md">
              <Image
                src={lapangan.imageSrc}
                alt={lapangan.namaLapangan}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300 rounded-md" />
            </div>
            <h3 className="text-md font-semibold group-hover:text-green-800 transition-colors">
              {lapangan.namaLapangan}
            </h3>
            <p className="text-lg font-bold mb-4 group-hover:text-green-700 transition-colors">
              Rp {lapangan.harga.toLocaleString()}{" "}
              <span className="text-sm font-normal text-gray-600">/jam</span>
            </p>
            <div className="flex flex-row gap-2">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/user/lapangan/jadwalLapangan">
                  <button className="border border-green-700 text-green-700 px-4 py-1 rounded hover:bg-green-100 transition">
                    Jadwal
                  </button>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <button
                  className="bg-limeCustom text-white px-4 py-1 rounded hover:brightness-110 transition"
                  onClick={() => handlePesanClick(lapangan)}
                >
                  Pesan
                </button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      {showModal && selectedLapangan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <motion.div
            className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-2xl font-bold text-gray-500 hover:text-black"
            >
              &times;
            </button>
            <h2 className="text-center font-semibold mb-4">
              Pesan {selectedLapangan.namaLapangan}
            </h2>
            <div className="relative w-full h-48 mb-4">
              <Image
                src={selectedLapangan.imageSrc}
                alt={selectedLapangan.namaLapangan}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <p className="text-center font-bold mb-4">
              Harga : Rp. {selectedLapangan.harga.toLocaleString()} /jam
            </p>

            <div className="flex flex-col gap-2 mb-4">
              <label className="text-sm font-semibold">Tanggal dan Waktu Main</label>
              <input
                type="date"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                className="border rounded px-2 py-1"
              />
              <input
                type="time"
                value={jam}
                onChange={(e) => setJam(e.target.value)}
                className="border rounded px-2 py-1"
              />

              <label className="text-sm font-semibold">Jam Main (Durasi)</label>
              <input
                type="number"
                min="1"
                max="12"
                value={durasi}
                onChange={(e) => setDurasi(e.target.value)}
                className="border rounded px-2 py-1"
                placeholder="Misal: 2"
              />
              <span className="text-xs text-gray-600">Durasi dalam jam</span>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={handleCloseModal}
                className="px-4 py-1 border border-gray-400 rounded hover:bg-gray-200"
              >
                Batal
              </button>
              <button
                onClick={handleSubmitPesan}
                className="px-4 py-1 bg-limeCustom text-white rounded hover:brightness-110"
              >
                Pesan
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
