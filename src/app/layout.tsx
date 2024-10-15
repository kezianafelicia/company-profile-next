import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/view/components/footer";
import Navbar from "@/view/components/navbar";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        {children}
        <Footer/>
      </body>
    </html>
  );
}
