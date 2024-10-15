import Isicontentful from "@/contentful/isicontentfulhistory";
import Culture from "@/view/pages/about/culture";
import CompanyProfile from "@/view/pages/about/profile";

export default function About() {

  return (
    <div>
      <CompanyProfile/>
      <Isicontentful/>
      <Culture/>
    </div>
  );
}
