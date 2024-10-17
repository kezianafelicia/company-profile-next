import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
  const services = [
    "Residential Cleaning",
    "Office & Commercial Cleaning",
    "Customized Cleaning"
  ];

  const addservices = [
    "Window Cleaning",
    "Carpet Cleaning",
    "Post-Construction Cleaning"
  ];

  return (
    <div className="w-full bg-[#33251c] text-[#E4E0E1] py-2">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">

        <div className="flex flex-col justify-center text-left">
          <h1 className="text-xl font-bold">Our Services</h1>
          <ul className="mt-2">
            {services.map((service, index) => (
              <li key={index} className="py-1 text-m hover:text-gray-300 cursor-pointer">
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center text-left">
          <h1 className="text-xl font-bold">Additional Services</h1>
          <ul className="mt-2">
            {addservices.map((addservice, index) => (
              <li key={index} className="py-1 text-m hover:text-gray-300 cursor-pointer">
                {addservice}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-center items-start">
          <h1 className="text-xl font-bold">Contact Us</h1>
          <div className="flex flex-col mt-2 space-y-2 text-left">
            <div className="flex items-center hover:text-gray-300 cursor-pointer">
              <FaFacebookSquare size={18} />
              <span className="ml-2">Facebook: @Cleanex</span>
            </div>
            <div className="flex items-center hover:text-gray-300 cursor-pointer">
              <FaInstagram size={18} />
              <span className="ml-2">Instagram: @cleanex</span>
            </div>
            <div className="flex items-center hover:text-gray-300 cursor-pointer">
              <FaTwitterSquare size={18} />
              <span className="ml-2">Twitter: @cleanex</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
