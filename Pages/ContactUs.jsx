import LeftContactUs from "../ui/LeftContactUs";
import RightContactUs from "../ui/RightContactUs";

function ContactUs() {
  return (
    <section
      id="contact-us"
      className="h-screen min-h-[800px] max-h-[990px] w-screen max-w-[1800px] mx-auto flex"
    >
      <LeftContactUs />
      <RightContactUs />
    </section>
  );
}

export default ContactUs;
