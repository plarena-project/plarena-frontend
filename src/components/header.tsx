export default function Header() {
    return (
      <section
        id="home"
        className="relative bg-cover bg-center h-[500px]"
        style={{ backgroundImage: "url('/lapangan.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-10 py-32 text-white">
          <h1 className="text-5xl font-bold italic">
            PLARENA <span className="text-lime-500 font-bold not-italic">SPORT</span>
          </h1>
          <p className="mt-4 text-lg">
            Sehatkan Dirimu dengan Berolahraga di Plarena Sport Center
          </p>
          <button className="mt-6 bg-lime-500 hover:bg-lime-600 text-black px-6 py-2 rounded-md font-medium">
            Booking Now
          </button>
        </div>
      </section>
    );
  }