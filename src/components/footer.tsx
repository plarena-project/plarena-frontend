export default function Footer() {
  return (
    <footer id="footer" className="bg-limeCustom py-10 text-black">
      <div className="container mx-auto px-6 font-bold">

        <div className="flex justify-center space-x-6 mb-4 text-sm">
          <a href="#" className="hover:underline">Privacy & Policy</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Refund Policy</a>
        </div>

        <div className="text-center border-t border-black pt-4 text-sm">
          &copy; {new Date().getFullYear()} Plarena Sport. All rights reserved.
        </div>
      </div>
    </footer>
  );
}