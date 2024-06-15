import Contacts from "./Contacts";
import SocialIcons from "./SocialIcons";

function LeftContactUs() {
  return (
    <div
      className="bg-red-500 contact-us-bg flex-1 text-off-white p-[60px] flex flex-col gap-[40px]"
      style={{ "--image-url": "url(../Img/contact-us-bg.jpg)" }}
    >
      <h2>
        <span className="font-semibold">F</span>requently
        <br />
        <span className="font-semibold">A</span>sked
        <br />
        <span className="font-semibold">Q</span>uestions
      </h2>

      <SocialIcons />
      <Contacts />
    </div>
  );
}

export default LeftContactUs;
