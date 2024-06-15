import { IoLogoFacebook, IoLogoInstagram, IoLogoTiktok } from "react-icons/io5";
import SocialIcon from "./SocialIcon";

function SocialIcons() {
  return (
    <div className="flex gap-4">
      <SocialIcon href="https://www.instagram.com" label="Instagram">
        <IoLogoInstagram />
      </SocialIcon>

      <SocialIcon href="https://www.Facebook.com" label="Facebook">
        <IoLogoFacebook />
      </SocialIcon>

      <SocialIcon href="https://www.tiktok.com" label="TikTok">
        <IoLogoTiktok />
      </SocialIcon>
    </div>
  );
}

export default SocialIcons;
