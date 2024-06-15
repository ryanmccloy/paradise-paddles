import { useState } from "react";
import Button from "./Button";

function PanelTwo({ imageUrl, defaultIcon, hoverIcon }) {
  const [isHovered, setisHovered] = useState(false);

  const handleHover = function () {
    setisHovered((h) => !h);
  };

  return (
    <div
      className="landing-panel flex flex-col justify-between panel-image"
      style={{ "--image-url": `url(${imageUrl})` }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className=" panel-div">
        <Button>Sign Up</Button>
      </div>
      <img className="panel-icon" src={isHovered ? hoverIcon : defaultIcon} />
    </div>
  );
}

export default PanelTwo;
