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
    <nav className="fixed w-full top-0 left-0 z-50 text-[#E4E0E1] bg-[#33251c] shadow">
      <div className="flex justify-between items-center h-20 font-bold max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-2">
          <Image className="w-[150px]" src="/picture/logo.png" alt="logo" width={150} height={50} />
        </div>
        <ul className="hidden md:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/about">About</Link>
          </li>
          <li className="p-4">
            <Link href="/service">Service</Link>
          </li>
          <li className="p-4">
            <Link href="/team">Teams</Link>
          </li>
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#33251c] ease-in-out duration-500"
            : "fixed left-[-100%] top-0 w-[60%] h-full ease-in-out duration-500"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#E4E0E1] m-4">Cleanex</h1>
        <li className="p-4 border-b border-gray-900">
          <Link href="/" onClick={handleNav}>Home</Link>
        </li>
        <li className="p-4 border-b border-gray-900">
          <Link href="/about" onClick={handleNav}>About</Link>
        </li>
        <li className="p-4 border-b border-gray-900">
          <Link href="/service" onClick={handleNav}>Service</Link>
        </li>
        <li className="p-4 border-b border-gray-900">
          <Link href="/team" onClick={handleNav}>Teams</Link>
        </li>
      </ul>
    </nav>
  );
}
