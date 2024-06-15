import LandingPanels from "../ui/LandingPanels";
import LeftLanding from "../ui/LeftLanding";

function LandingPage() {
  return (
    <div
      className=" min-h-screen min-w-screen pl-[30px] max-w-[1800px] mx-auto  flex justify-between 
    "
    >
      <LeftLanding />
      <LandingPanels />
    </div>
  );
}

export default LandingPage;
