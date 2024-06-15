import { useState } from "react";
import Button from "./Button";

function PanelThree({ imageUrl, defaultIcon, hoverIcon }) {
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
        <Button type="full">Log In</Button>
      </div>
      <img className="panel-icon" src={isHovered ? hoverIcon : defaultIcon} />
    </div>
  );
}

export default PanelThree;
