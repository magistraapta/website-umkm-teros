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
      <Branding/>

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
            produk={umkm.produk}
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
        <h1 className="text-[16px] sm:text-[20px] md:text-[32px] font-extrabold">Pengembangan Kewirausahaan Melalui Pelatihan dan Pendampingan Digital Marketing di Desa Teros, Kecamatan Labuhan Haji, Lombok Timur.</h1>
        <p className="text-[10px] sm:text-base text-gray-500 mt-2">
          Mahasiswa KKN PMD Universitas Mataram bekerja sama dengan UMKM di Desa Teros dalam melakukan transformasi digital pada setiap usaha UMKM dengan melakukan pengenalan terkait digital marketing dan re-branding.
        </p>
      </div>
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image
          src={'/images/IMG_1504.JPG'}
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

        <div className="mt-6">
          <p>Melalui inisiatif para mahasiswa KKN Pemberdayaan Masyarakat Desa (PMD) dari Universitas Mataram (UNRAM), digelar sosialisasi dan pelatihan pemasaran berbasis media sosial untuk mendukung UMKM setempat naik kelas.</p>
          <a href="https://mataramradio.com/2025/01/17/dukung-umkm-desa-teros-mahasiswa-kkn-pmd-unram-gelar-pelatihan-pemasaran-digital-berbasis-media-sosial/#google_vignette" className=" underline">Baca Selengkapnya</a>
        </div>
      </div>
    </div>
  );
}

function Branding() {
  return (
    <div className="bg-gray-100 w-full py-10 px-4 md:px-8 lg:px-16 flex flex-col items-center">
      <div className="max-w-4xl text-center">
        <h1 className="text-[24px] sm:text-[48px] md:text-5xl font-extrabold">
          Tranfsormasi Branding Bagi Para Pelaku UMKM di Desa Teros
        </h1>
        <div className="relative w-full h-64 md:h-80 lg:h-96 mt-6">
          <Image
            src={'/images/IMG_2084.JPG'}
            layout="fill"
            alt="image"
            className="rounded-2xl object-cover object-top"
          />
        </div>

        <div className="mt-6">
          <p>Kelompok mahasiswa Kuliah Kerja Nyata Pemberdayaan Masyarakat Desa (KKN PMD) Universitas Mataram (Unram) di Desa Teros, Kecamatan Labuhan Haji, Kabupaten Lombok Timur menggelar kegiatan tranformasi branding usaha Aida Mandiri, Kamis, 23 Januari 2025.</p>
          <a href="https://ntbsatu.com/2025/01/31/sinergi-mahasiwa-kkn-pmd-unram-dan-pelaku-umkm-desa-teros-bangun-ekonomi-lokal.html" className=" underline">Baca Selengkapnya</a>
        </div>
      </div>
    </div>
  )
}