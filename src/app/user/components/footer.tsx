export default function Footer() {
    return (
      <footer id="footer" className="bg-[#79A900] py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-black text-xl font-bold">Site Name</h3>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-black hover:text-gray-700">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-black hover:text-gray-700">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-black hover:text-gray-700">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#" className="text-black hover:text-gray-700">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-black font-bold mb-4">Topic</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-black hover:text-gray-700">Page</a></li>
                <li><a href="#" className="text-black hover:text-gray-700">Page</a></li>
                <li><a href="#" className="text-black hover:text-gray-700">Page</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }