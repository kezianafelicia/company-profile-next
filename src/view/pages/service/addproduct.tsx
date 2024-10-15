import {  GiWindowBars, GiVacuumCleaner } from "react-icons/gi";
import { ImTree } from "react-icons/im";
import Cards from "@/view/components/card";

export default function Addproduct() {
  const addproducts = [
    {
      Icon: GiWindowBars,
      title: "Window Cleaning",
      price: "Rp 350.000,00",
      description: [
        "Crystal-clear window cleaning",
        "Interior & exterior options",
        "Safe cleaning methods",
      ],
    },
    {
      Icon: GiVacuumCleaner,
      title: "Carpet & Upholstery Cleaning",
      price: "Rp 600.000,00",
      description: [
        "Deep cleaning for carpets and sofas",
        "Eliminates dust mites and allergens",
        "Safe for delicate fabrics",
      ],
    },
    {
      Icon: ImTree,
      title: "Post-Construction Cleaning",
      price: "Rp 800.000,00",
      description: [
        "Thorough cleaning after renovation",
        "Removes debris and dust",
        "Specialized tools for hard-to-reach areas",
      ],
    },
  ];

  return (
    <div className="w-full py-[10rem] px-4 text-[#493628]">
      <div className="text-[#493628] md:order-1 mt-8 md:mt-0 text-center ">
        <h2 className="text-4xl font-bold mb-4">Additional Services</h2>
        <p className="text-xl">
        We also offer a comprehensive separate selection of specialized cleaning services designed to accommodate the unique requirements of our clients.
        </p>
      </div>


      <div className="max-w-[1240px] py-20 mx-auto grid md:grid-cols-3 gap-8">
        {addproducts.map((addproduct, index) => (
          <Cards
            key={index}
            Icon={addproduct.Icon}
            title={addproduct.title}
            price={addproduct.price}
            description={addproduct.description}
          />
        ))}
      </div>
    </div>
  );
};
