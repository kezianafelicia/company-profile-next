import { GiFamilyHouse, GiMagicBroom } from "react-icons/gi";
import { ImOffice } from "react-icons/im";
import Cards from "@/view/components/card";

export default function Product() {
  const products = [
    {
      Icon: GiFamilyHouse,
      title: "Residential Cleaning",
      price: "Rp 200.000,00",
      description: [
        "High-quality cleaning services",
        "Experienced staff",
        "Safe and eco-friendly products",
      ],
    },
    {
      Icon: ImOffice,
      title: "Office & Commercial Cleaning",
      price: "Rp 500.000,00",
      description: [
        "Professional cleaning for businesses",
        "Custom schedules available",
        "Guaranteed satisfaction",
      ],
    },
    {
      Icon: GiMagicBroom,
      title: "Customized Cleaning",
      price: "Flexible Price",
      description: [
        "Tailored cleaning services",
        "Flexible booking options",
        "Affordable pricing",
      ],
    },
  ];

  return (
    <div className="w-full py-20 px-4 text-[#493628]">
           <div className="text-[#493628] md:order-1 mt-8 md:mt-0 text-center ">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl">
            We provide a range of professional cleaning services tailored to meet the diverse needs of our clients.
            </p>
          </div>
      <div className="mx-auto grid md:grid-cols-3 gap-8 py-20 px-2">
        {products.map((product, index) => (
          <Cards
            key={index}
            Icon={product.Icon}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};
