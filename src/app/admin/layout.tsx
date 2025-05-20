import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-page">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
