import PanelOne from "./PanelOne";
import PanelThree from "./PanelThree";
import PanelTwo from "./PanelTwo";

function LandingPanels({ handleSignUpClick, handleLogInClick }) {
  return (
    <div className="flex flew-row ">
      <PanelOne
        imageUrl="/Img/SUP.jpg"
        defaultIcon="/Img/paddle-surf.png"
        hoverIcon="/Img/paddle-surf-white.png"
      />
      <PanelTwo
        imageUrl="../Img/kayak.jpg"
        defaultIcon="../Img/kayak.png"
        hoverIcon="../Img/kayak-white.png"
        handleSignUpClick={handleSignUpClick}
      />
      <PanelThree
        imageUrl="../Img/surf.jpg"
        defaultIcon="../Img/surfboard.png"
        hoverIcon="../Img/surfboard-white.png"
        handleLogInClick={handleLogInClick}
      />
    </div>
  );
}

export default LandingPanels;
