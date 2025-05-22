"use client";

import { useRouter } from "next/navigation";
import AnimatedElement from "./AnimatedElement";

export default function Header() {
  const router = useRouter();

  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: "url('/image/lapangan1.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <AnimatedElement animation="fade-in" delay={200} duration={800} threshold={0.1} rootMargin="0px 0px -50px 0px">
        <div className="relative z-10 pl-10 md:pl-20 pr-6 py-32 text-white max-w-4xl">
          <div className="text-6xl md:text-[100px] lg:text-[150px] font-bold italic leading-none">
            PLARENA <span className="text-limeCustom font-bold not-italic">SPORT</span>
          </div>

          <p className="mt-4 text-base md:text-lg max-w-xl">
            Sehatkan dirimu dengan berolahraga di  <span className="text-limeCustom font-bold not-italic">Plarena Sport Center</span> tempat terbaik untuk futsal bersama teman, komunitas, atau tim kesayanganmu.
          </p>
          <p className="mt-2 text-base md:text-lg max-w-xl">
            Booking lapangan secara mudah dan cepat. Nikmati fasilitas terbaik dan suasana kompetitif yang seru.
          </p>
          <button
            onClick={() => router.push("/login")}
            className="mt-6 bg-limeCustom hover:bg-[#5F8700] text-black hover:text-white px-6 py-2 rounded-md font-medium transition hover:shadow-lg"
          >
            Booking Now
          </button>
        </div>
      </AnimatedElement>
    </section>
  );
}
