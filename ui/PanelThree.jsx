import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "./Button";
import { useAuth } from "../contexts/AuthContext";

function PanelThree({ imageUrl, defaultIcon, hoverIcon, handleLogInClick }) {
  const [isHovered, setisHovered] = useState(false);
  const { user } = useAuth();

  const navigate = useNavigate();

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
        {user ? (
          <button
            className="transition-all hover:font-semibold hover:text-off-white"
            onClick={() => navigate("/account")}
          >
            My Account
          </button>
        ) : (
          <Button type="full" handler={handleLogInClick}>
            Log In
          </Button>
        )}
      </div>
      <img className="panel-icon" src={isHovered ? hoverIcon : defaultIcon} />
    </div>
  );
}

export default PanelThree;
