export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white py-6 mt-10">
          <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
            {/* Left section */}
            <div>
              <p className="text-[10px] sm:text-sm">© {currentYear} KKN PMD Universitas Mataram.</p>
            </div>

            {/* Right section */}
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a
                href="https://www.instagram.com/kkn.desateros24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] sm:text-sm hover:text-gray-400"
              >
                Instagram
              </a>
            </div>
          </div>
        </footer>
    )
}