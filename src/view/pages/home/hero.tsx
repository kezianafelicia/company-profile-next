import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className=" bg-cover bg-center bg-no-repeat mt-28" style={{ backgroundImage: `url('/picture/home.jpeg')` }}>
      <div className="mt-[-96px] h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-5xl font-extrabold md:py-6 text-[#493628]">Spotless Results Every Time</h1>
        <p className="md:text-4xl sm:text-3xl text-xl font-bold pl-2 py-6 text-[#843028]">HIGHLY PROFESSIONAL CLEANING</p>
        <p className="md:text-xl md:pl-4 text-l font-bold py-1">
         We are committed to delivering professional cleaning services that make your home and workplace sparkle.
        </p>
        <p className="md:text-xl md:pl-4 text-l font-bold">
          Let us take care of the mess so you can focus on what matters most.
        </p>
        <Link href="/service">
            <button className="bg-[#493628] w-[200px] rounded-md text-xl font-bold my-10 mx-auto text-white p-3">Book Now</button>
        </Link>
      </div>
    </div>
  );
}
