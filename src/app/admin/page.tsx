// app/admin/page.tsx
import CardDashboard from "./components/CardDashboard";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-center text-3xl font-bold italic mb-10">
          <span className="text-black">Plarena</span>{" "}
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

      <footer className="mt-20 bg-lime-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center flex-wrap">
            <p className="text-lg font-semibold">Site name</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
