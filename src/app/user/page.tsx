import Image from "next/image";
import { FC } from "react";

// Komponen CardDashboard
interface CardDashboardProps {
  imageSrc: string;
  title: string;
  count: number;
}

const CardDashboard: FC<CardDashboardProps> = ({ imageSrc, title, count }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-1/3">
      <div className="w-full h-48 relative mb-4">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-md" />
      </div>
      <h3 className="text-md font-semibold">{title}</h3>
      <p className="text-lg font-bold mb-2">{count}</p>
      <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition">
        Lihat
      </button>
    </div>
  );
};

// Komponen AdminDashboard (default export)
export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-center text-3xl font-bold italic mb-10">
        <span className="text-black">Jenis-jenis Lapangan Plarena</span>{" "}
        <span style={{ color: "#407225" }}>Sport</span>
      </h1>

      <div className="flex flex-col md:flex-row justify-around gap-6">
        <CardDashboard
          imageSrc="/image/lapangan4.jpg"
          title="Jumlah Lapangan"
          count={3}
        />
        <CardDashboard
          imageSrc="/image/lapangan3.jpg"
          title="Jumlah Pesanan"
          count={10}
        />
        <CardDashboard
          imageSrc="/image/lapangan5.jpg"
          title="Jumlah Member"
          count={4}
        />
      </div>
    </div>
  );
}
