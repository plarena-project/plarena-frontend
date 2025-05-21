import Image from "next/image";
import { FC } from "react";

interface CardDashboardProps {
  imageSrc: string;
  namaLapangan: string;
  harga: number;
}

const CardDashboard: FC<CardDashboardProps> = ({ imageSrc, namaLapangan, harga }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-1/3">
      <div className="w-full h-48 relative mb-4">
        <Image
          src={imageSrc}
          alt={namaLapangan}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h3 className="text-md font-semibold">{namaLapangan}</h3>
      <p className="text-lg font-bold mb-4">Rp {harga.toLocaleString()}</p>
      <div className="flex flex-row gap-2">
        <button className="border border-green-700 text-green-700 px-4 py-1 rounded hover:bg-green-100 transition">
          Jadwal
        </button>
        <button className="bg-limeCustom text-white px-4 py-1 rounded hover:brightness-110 transition">
          Pesan
        </button>
      </div>
    </div>
  );
};

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-center text-3xl font-bold italic mb-10">
        <span className="text-black">Lapangan di Plarena</span>{" "}
        <span style={{ color: "#407225" }}>Sport</span>
      </h1>

      <div className="flex flex-col md:flex-row justify-around gap-6">
        <CardDashboard
          imageSrc="/image/lapangan4.jpg"
          namaLapangan="Lapangan Emas"
          harga={120000}
        />
        <CardDashboard
          imageSrc="/image/lapangan3.jpg"
          namaLapangan="Lapangan Perak"
          harga={90000}
        />
        <CardDashboard
          imageSrc="/image/lapangan5.jpg"
          namaLapangan="Lapangan Perunggu"
          harga={60000}
        />
      </div>
    </div>
  );
}
