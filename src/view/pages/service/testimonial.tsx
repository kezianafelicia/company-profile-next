import Box from "@/view/components/box";


export default function Testimonial() {
  const testimonial = [
    {
      imageUrl: "picture/rachel.jpg",
      title: "Rachel Venya",
      heading: "Thorough and Efficient!",
      content:
        "I’m so impressed with the service! The staff was professional and friendly, and my office has never looked better. I will definitely use them again!",
    },
    {
      imageUrl: "picture/niscap.jpg",
      title: "Nicholas Saputra",
      heading: "Best Cleaning Service Ever!",
      content:
        "I've tried several cleaning services, but Kinclong is by far the best. They pay attention to every detail, and I love that they use eco-friendly products!",
    },
    {
      imageUrl: "picture/igun.jpg",
      title: "Ivan Gunawan",
      heading: "UNCHHHH CLEANEX TEAMMM!!",
      content:
        "The team from Cleanex did an incredible job on my home. They were thorough, efficient, and left everything sparkling clean. Highly recommended!",
    },
  ];

  return (
    <div className="w-full py-[10rem] px-4 bg-white text-[#493628]">
      <div className=" md:order-1 mt-8 md:mt-0 text-center">
            <h2 className="text-4xl font-bold mb-4">Our Customers' Testimonial</h2>
            <p className="text-xl">
            Let's hear what they say about us!
            </p>
          </div>
      <div className=" mx-auto grid md:grid-cols-3 gap-8 py-9">
        {testimonial.map((testimonial, index) => (
          <Box
            key={index}
            imageUrl={testimonial.imageUrl}
            title={testimonial.title}
            heading={testimonial.heading}
            content={testimonial.content}
          />
        ))}
      </div>
    </div>
  );
};
