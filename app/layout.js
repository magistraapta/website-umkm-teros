import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans"
});

export const metadata = {
  title: "UMKM Desa Teros",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/teros-logo.png" sizes="any" type="image/png" />

      </head>
      <body
        className={`${jakartaSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}