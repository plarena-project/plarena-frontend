import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="user-page">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
