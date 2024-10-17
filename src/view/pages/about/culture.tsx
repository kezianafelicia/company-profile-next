import { FaHandshake, FaStar, FaHeart, FaLeaf, FaLightbulb } from 'react-icons/fa';

export default function Culture() {
  const values = [
    { title: "Integrity",
      description: "We are honest and transparent in all our dealings with clients, partners, and employees. Trust and accountability form the foundation of our service.",
      logo:<FaHandshake size={50} />
    },
    { title: "Excellence", description: "We aim for perfection in every clean, leaving no detail overlooked. Our team is committed to delivering superior quality that exceeds expectations every time.",
    logo: <FaStar size={50} />
     },
    { title: "Customer-Centricity", description: "Our clients are at the heart of everything we do. We listen, understand their unique needs, and provide personalized cleaning solutions that ensure satisfaction.",
      logo: <FaHeart size={50} />
    },

    { title: "Sustainability", description: "We care about the environment and use eco-friendly products to protect our planet while maintaining our cleaning standards.",
      logo: <FaLeaf size={50} />
     },
    { title: "Innovation", description: "We continuously seek out new technologies, methods, and tools to improve our services. We stay ahead of industry trends to be the best",
    logo: <FaLightbulb size={50} />
     }
  ];



  return (
    <div>
          <div className="mx-auto py-20 px-4 md:px-8 bg-white text-[#493628]">
      <div className=" md:order-1 mt-8 md:mt-0 text-center">
            <h2 className="text-4xl font-bold mb-4">Culture</h2>
            <p className="text-xl">
            At Cleanex, our culture is built on a strong foundation of shared values that guide every aspect of our business.
            </p>
          </div>
    <div className="flex flex-wrap justify-center gap-4 md:gap-10 py-10">
      {values.map((value, index) => (
        <div
          key={index}
          className="flex flex-col w-full rounded-lg  transition-all duration-350 p-10 justify-center items-center text-center bg-[#fee9e8] md:basis-[calc(33.33%-1.67rem)]"
        >
          <div className="mb-7 md:mb-10 text-[#ff615e]">{value.logo}</div>
          <h5 className="text-2xl font-bold m-0 mb-2">{value.title}</h5>
          <div className="text-lg font-light">
            <p>{value.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  </div>
  );
};
