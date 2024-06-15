import Logo from "./Logo";
import NavBarLinks from "./NavBarLinks";

function NavBar() {
  return (
    <div className="flex flex-row gap-[40px] items-center">
      <Logo />

      <NavBarLinks />
    </div>
  );
}

export default NavBar;
