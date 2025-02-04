import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex items-center gap-x-6 sm:gap-x-16 p-4 justify-center">
            <h1 className="text-[24px] sm:text-3xl font-bold">UMKM Desa Teros</h1>
            {/* <div className="flex gap-x-2 sm:gap-x-6 text-gray-500 text-[10px] sm:text-base">
                <Link href="/about">Tentang Kami</Link>
            </div> */}
        </div>
    )
}