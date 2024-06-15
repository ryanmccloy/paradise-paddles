import { useState } from "react";

function PanelOne({ imageUrl, defaultIcon, hoverIcon }) {
  const [isHovered, setisHovered] = useState(false);

  const handleHover = function () {
    setisHovered((h) => !h);
  };

  return (
    <div
      className="landing-panel flex items-end panel-image"
      style={{ "--image-url": `url(${imageUrl})` }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <img className="panel-icon" src={isHovered ? hoverIcon : defaultIcon} />
    </div>
  );
}

export default PanelOne;
