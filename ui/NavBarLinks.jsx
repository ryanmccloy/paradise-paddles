import { Link } from "react-scroll";

function NavBarLinks() {
  return (
    <ul className="md:gap-[20px] text-[10px] flex flex-row xl:gap-[35px] xl:text-[12px]">
      <li className="min-w-[60px]">
        <Link
          to="about-us"
          smooth="easeInOutQuad"
          duration={700}
          className="cursor-pointer transition-font hover:font-semibold"
        >
          About Us
        </Link>
      </li>
      <li className="min-w-[60px]">
        <Link
          to="rentals"
          smooth="easeInOutQuad"
          duration={700}
          className="cursor-pointer transition-font hover:font-semibold"
        >
          Rentals
        </Link>
      </li>
      <li className="min-w-[60px]">
        <Link
          to="contact-us"
          smooth="easeInOutQuad"
          duration={700}
          className="cursor-pointer transition-font hover:font-semibold"
        >
          Contact Us
        </Link>
      </li>
    </ul>
  );
}

export default NavBarLinks;
