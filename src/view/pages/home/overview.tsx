import Image from "next/image";
import Link from "next/link";

export default function Overview() {
  return (
    <div className="w-full py-20 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 text-[#3B3030]">
        <img className="w-[500px] rounded-xl mx-auto my-4" src="/picture/cleaner.jpg" alt="cleaner"/>
        <div className="flex flex-col justify-center">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Company Overview</h1>
          <p className="text-justify p-2">With over 100 years of experience, Cleanex has built a reputation for excellence in residential and commercial cleaning. Our skilled team is equipped with the latest tools and techniques to ensure that every space is left pristine. We pride ourselves on our attention to detail, customer satisfaction, and eco-conscious practices.</p>
          <Link href="/about">
            <button className="bg-[#493628] w-[200px] rounded-md font-medium my-6 mx-auto text-white py-3">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
