import AboutUsImg from "../ui/AboutUsImg";
import AboutUsInfo from "../ui/AboutUsInfo";

function AboutUs() {
  return (
    <section
      id="about-us"
      className="bg-custom-gradient h-screen min-h-[800px] max-h-[1200px] max-w-[1800px] mx-auto min-w-screen flex flex-row justify-center items-center gap-[30px] md:gap-[60px] p-[20px]"
    >
      <AboutUsImg />
      <AboutUsInfo />
    </section>
  );
}

export default AboutUs;
