'use client';

import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat h-[800px] md:h-[900px]"
      style={{ backgroundImage: "url('/image/lapangan1.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 pl-10 md:pl-20 pr-6 py-32 text-white max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold italic">
          PLARENA <span className="text-limeCustom font-bold not-italic">SPORT</span>
        </h1>
        <p className="mt-4 text-base md:text-lg max-w-xl">
          Sehatkan Dirimu dengan Berolahraga di Plarena Sport Center
        </p>
        <button
          onClick={() => router.push('/login')}
          className="mt-6 bg-limeCustom hover:bg-limeCustom/90 text-black px-6 py-2 rounded-md font-medium transition"
        >
          Booking Now
        </button>
      </div>
    </section>
  );
}
