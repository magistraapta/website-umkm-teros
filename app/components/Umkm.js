import Image from "next/image";

export default function Umkm({ image_url, name, lokasi, no_hp }) {
    return (
      <div className="mt-5 w-full p-4">
        <div className="relative w-full h-[300px]"> {/* Adjust height as needed */}
          <Image
            src={image_url}
            layout="fill"
            objectFit="cover"
            alt="gambar umkm"
            className="rounded-lg"
          />
        </div>
        <div className="mt-3">
          <p className="text-base sm:text-2xl font-semibold">{name}</p>
          <p className="text-[10px] sm:text-base">Lokasi: {lokasi}</p>
        </div>
        <div className="mt-3">
          <a
            href={`https://wa.me/${no_hp}`}
            className="bg-green-500 text-white px-2 sm:px-4 py-2 text-[10px] sm:text-base rounded-lg hover:bg-green-600 mt-6"
          >
            WhatsApp
          </a>
        </div>
      </div>
    );
  }
  