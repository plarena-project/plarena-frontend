'use client';

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-10 py-5 bg-white shadow-md">
      <div className="text-xl font-bold italic">
        PLARENA <span className="text-[#79A900] not-italic font-bold">SPORT</span>
      </div>
      <nav className="flex space-x-6">
        <a href="#home" className="px-4 py-2 rounded-md hover:bg-[#79A900] transition">Home</a>
        <a href="#about" className="px-4 py-2 rounded-md hover:bg-[#79A900] transition">About</a>
        <a href="#payment" className="px-4 py-2 rounded-md hover:bg-[#79A900] transition">Payment Guide</a>
        <a href="#footer" className="px-4 py-2 rounded-md hover:bg-[#79A900] transition">Contact</a>
      </nav>
      <button className="px-4 py-2 rounded-md bg-[#79A900] text-black border-2 border-[#79A900] transition">Sign-up</button>
    </header>
  );
}
