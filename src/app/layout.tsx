import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/view/components/footer";
import Navbar from "@/view/components/navbar";
import Paddingatas from "@/view/components/padding";


export const metadata: Metadata = {
  title: "Cleanex - Professional Cleaning Services",
  description: "Offers reliable, high-quality cleaning services for homes and businesses. Our experienced team ensures your space is spotless and hygienic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <Paddingatas/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
