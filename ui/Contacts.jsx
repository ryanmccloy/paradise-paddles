import { FaPhoneAlt } from "react-icons/fa";
import Contact from "./Contact";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Contacts() {
  return (
    <div className="flex flex-col gap-[10px]">
      <Contact icon={<FaPhoneAlt />} name="0123456789" />
      <Contact icon={<MdEmail />} name="info@paradisepaddles.com" />
      <Contact icon={<FaLocationDot />} name="123 Beach, City, Country" />
    </div>
  );
}

export default Contacts;
