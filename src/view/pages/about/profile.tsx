import Isicontentful from "@/contentful/isicontentfulhistory";
import Image from "next/image";

export default function CompanyProfile() {
  return (
    <div className="">
      <div className=" mx-auto py-12 px-4 md:px-8">
        <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
          <div className="md:order-2">
            <img
              src="picture/cleaner.jpg"
              alt="grow-better"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div className="text-gray-800 md:order-1 mt-8 md:mt-0">
            <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
            <p className="text-md text-justify">
            At Cleanex, we are more than just a cleaning service—we are a team of professionals driven by the belief that clean, healthy environments are essential for living and working well. Founded with a mission to deliver exceptional cleaning solutions, we take pride in offering personalized services that cater to both residential and commercial clients. Every space we clean is treated with care, precision, and a commitment to excellence. We’ve earned the trust of countless satisfied customers through our reliability, attention to detail, and consistent high-quality results.
            </p>
          </div>
        </div>
      </div>

      <section className=" mx-auto py-12 px-4 md:px-8 ">
        <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
          <div>
            <img
              src="picture/cleaningsupply.jpg"
              alt="Cleaning Supply"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div className="text-gray-800 md:order-1 mt-8 md:mt-0">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-md mb-4 text-justify">
            At Cleanex, we combine over three decades of experience with personalized, eco-friendly cleaning solutions to meet your unique needs. Our highly trained staff is dedicated to delivering exceptional service, using the latest techniques and environmentally safe products. With a proven track record of over 10,000 satisfied clients and 10 branches, we are a trusted name in the industry. We pride ourselves on reliability, attention to detail, and a commitment to customer satisfaction, ensuring your space is spotless while you enjoy peace of mind.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
