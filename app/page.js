import Image from "next/image";
import Navbar from "./components/Navbar";
import coverImage from "../public/images/IMG_1490.jpg";
import { dataUmkm } from "./Data";
import Umkm from "./components/Umkm";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className="w-full mt-5">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-700 text-center">
          Website UMKM Desa Teros
        </h1>
        <div className="flex justify-center mt-4">
          <Image
            src={coverImage}
            width={600}
            height={400}
            alt="Cover Image"
            className="rounded-lg"
          />
        </div>

        <div className="mt-4 w-full flex justify-center px-4 sm:px-0">
          <p className="text-lg text-justify max-w-3xl sm:max-w-5xl">
            Desa Teros, yang terletak di Kecamatan Labuhan Haji, Kabupaten Lombok Timur, adalah sebuah desa yang kaya akan budaya dan keindahan alam. Dikelilingi oleh hamparan sawah hijau dan udara yang sejuk, desa ini memiliki masyarakat yang ramah serta mempertahankan tradisi dan kearifan lokal. Selain dikenal dengan sektor pertaniannya, Desa Teros juga memiliki potensi wisata yang menarik, menjadikannya destinasi yang cocok bagi mereka yang ingin merasakan kehidupan pedesaan yang asri dan autentik di Pulau Lombok.
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-4xl sm:text-5xl font-bold text-center">Data UMKM Desa Teros</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {dataUmkm.map((umkm, index) => (
            <Umkm
              key={index}
              image_url={umkm.image_url}
              name={umkm.nama}
              lokasi={umkm.lokasi}
              no_hp={umkm.no_hp}
            />
          ))}
        </div>

        <footer className="bg-gray-800 text-white py-6 mt-10">
          <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
            {/* Left section */}
            <div>
              <p className="text-sm">© {currentYear} KKN PMD Universitas Mataram.</p>
            </div>

            {/* Right section */}
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a
                href="https://www.instagram.com/kkn.desateros24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-400"
              >
                Instagram
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
