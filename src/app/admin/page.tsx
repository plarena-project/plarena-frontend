'use client';

import Image from 'next/image';
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

interface CardDashboardProps {
  imageSrc: string;
  title: string;
  count: number;
  link?: string;
}

const CardDashboard: FC<CardDashboardProps> = ({ imageSrc, title, count, link }) => {
  const router = useRouter();

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-4 w-full md:w-1/3 transform transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onClick={() => link && router.push(link)}
    >
      <div className="w-full h-48 relative mb-4 overflow-hidden rounded-md">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-md transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="text-md font-semibold text-gray-700">{title}</h3>
      <p className="text-3xl font-bold text-green-700 mb-4">{count}</p>
      {link && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
        >
          Lihat
        </motion.button>
      )}
    </motion.div>
  );
};

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-center text-3xl font-bold italic mb-10">
        <span className="text-black">Plarena</span>{' '}
        <span style={{ color: '#407225' }}>Sport</span>
      </h1>

      <div className="flex flex-col md:flex-row justify-around gap-6">
        <CardDashboard
          imageSrc="/image/lapangan4.jpg"
          title="Jumlah Lapangan"
          count={3}
          link="/admin/dataLapangan"
        />
        <CardDashboard
          imageSrc="/image/lapangan3.jpg"
          title="Jumlah Pesanan"
          count={10}
          link="/admin/dataPesanan"
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
