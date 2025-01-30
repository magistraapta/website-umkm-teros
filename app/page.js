import Image from "next/image";
import Navbar from "./components/Navbar";
import { dataUmkm } from "./Data";
import Umkm from "./components/Umkm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Cover />
      <Sosialisasi />

      <div className="mt-6 flex justify-center px-4">
        <div className="w-full max-w-3xl">
          <h3 className="text-[24px] sm:text-5xl font-bold text-center">Data UMKM Desa Teros</h3>
          <p className="text-center text-[10px] sm:text-base mt-2 text-gray-500">
            Hasil proses pendataan UMKM di Desa Teros yang dilakukan oleh kelompok KKN PMD Universitas Mataram 2024/2025 pada 5 Dusun yang terdapat pada Desa Teros, Kecamatan Labuhan Haji, Kabupaten Lombok Timur.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 md:px-8 lg:px-16 mt-2 sm:mt-6">
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
      <Footer />
    </div>
  );
}

function Cover() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center px-4 md:px-8 lg:px-16 mt-10">
      <div className="text-center md:text-left">
        <h1 className="text-[24px] sm:text-[48px] md:text-5xl font-extrabold">Transformasi Digital Dengan UMKM di Desa Teros</h1>
        <p className="text-[10px] sm:text-base text-gray-500 mt-2">
          Mahasiswa KKN PMD Universitas Mataram bekerja sama dengan UMKM di Desa Teros dalam melakukan transformasi digital pada setiap usaha UMKM dengan melakukan pengenalan terkait digital marketing dan re-branding.
        </p>
      </div>
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image
          src={'/images/IMG_2019.JPG'}
          layout="fill"
          alt="image"
          className="rounded-2xl object-cover"
        />
      </div>
    </div>
  );
}

function Sosialisasi() {
  return (
    <div className="bg-gray-100 w-full py-10 px-4 md:px-8 lg:px-16 flex flex-col items-center mt-[48px]">
      <div className="max-w-4xl text-center">
        <h1 className="text-[24px] sm:text-[48px] md:text-5xl font-extrabold">
          Sosialisasi Terkait Pemanfaatan Sosial Media Bagi Para Pelaku UMKM
        </h1>
        <div className="relative w-full h-64 md:h-80 lg:h-96 mt-6">
          <Image
            src={'/images/IMG_1950.JPG'}
            layout="fill"
            alt="image"
            className="rounded-2xl object-cover object-bottom"
          />
        </div>
      </div>
    </div>
  );
}