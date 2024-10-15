import Hero from "@/view/pages/home/hero";
import Overview from "@/view/pages/home/overview";
import Testimonial from "@/view/pages/service/testimonial";
import Teams from "@/view/pages/team/teams";
import Product from "@/view/pages/service/product";

export default function Home() {

  return (
    <div>
      <Hero/>
      <Overview/>
      <Product/>
      <Testimonial/>
      <Teams/>
    </div>
  );
}
