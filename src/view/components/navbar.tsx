"use client"

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full top-0 left-0 z-50 text-[#E4E0E1] bg-[#33251c] shadow ">
      <div className="flex justify-between items-center h-20 font-bold max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-2">
          <Link href="/">
          <Image className="w-[150px]" src="/picture/logo.png" alt="logo" width={150} height={50} />
          </Link>
        </div>
        <div className="hidden md:flex">
          <div className="p-4 hover:text-white cursor-pointer">
            <Link href="/">Home</Link>
          </div>
          <div className="p-4 hover:text-white cursor-pointer">
            <Link href="/about">About</Link>
          </div>
          <div className="p-4 hover:text-white cursor-pointer">
            <Link href="/service">Service</Link>
          </div>
          <div className="p-4 hover:text-white cursor-pointer">
            <Link href="/team">Teams</Link>
          </div>
        </div>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900  text-[#E4E0E1] bg-[#33251c] ease-in-out duration-500"
            : "fixed left-[-100%] top-0 w-[60%] h-full ease-in-out duration-500 text-[#E4E0E1]"
        }
      >
        <Link href="/">
          <Image className="p-2 py-5 w-[150px]" src="/picture/logo.png" alt="logo" width={150} height={50} />
        </Link>
        <div className="p-4 border-b border-gray-900 hover:text-white cursor-pointer font-bold ">
          <Link href="/" onClick={handleNav}>Home</Link>
        </div>
        <div className="p-4 border-b border-gray-900 hover:text-white cursor-pointer font-bold">
          <Link href="/about" onClick={handleNav}>About</Link>
        </div>
        <div className="p-4 border-b border-gray-900 hover:text-white cursor-pointer font-bold">
          <Link href="/service" onClick={handleNav}>Service</Link>
        </div>
        <div className="p-4 border-b border-gray-900 hover:text-white cursor-pointer font-bold">
          <Link href="/team" onClick={handleNav}>Teams</Link>
        </div>
      </div>
    </div>
  );
}
