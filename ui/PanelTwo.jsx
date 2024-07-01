import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

function PanelTwo({ imageUrl, defaultIcon, hoverIcon, handleSignUpClick }) {
  const [isHovered, setisHovered] = useState(false);
  const { user } = useAuth();

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
        {!user && (
          <button
            className="transition-all hover:font-semibold"
            onClick={handleSignUpClick}
          >
            Sign Up
          </button>
        )}
      </div>
      <img className="panel-icon" src={isHovered ? hoverIcon : defaultIcon} />
    </div>
  );
}

export default PanelTwo;
