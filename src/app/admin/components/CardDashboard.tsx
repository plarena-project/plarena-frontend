import Image from "next/image";
import { FC } from "react";

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

export default CardDashboard; // ✅ ini wajib karena kamu pakai default import
