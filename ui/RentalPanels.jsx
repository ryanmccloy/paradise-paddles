import { useState } from "react";
import { useRental } from "../contexts/RentalContext";
import RentalPanel from "./RentalPanel";

function RentalPanels() {
  const [hoveredPanel, setHoveredPanel] = useState(null);
  const rentalData = useRental();

  return (
    <div className="flex gap-[60px] justify-center w-full h-[60vh]  min-h-[420px]">
      {rentalData.map((data, index) => (
        <RentalPanel
          key={index}
          index={index}
          imageUrl={data.imageUrl}
          title={data.title}
          info={data.info}
          prices={data.prices}
          isHovered={hoveredPanel === index}
          onHover={() => setHoveredPanel(index)}
          isOtherHovered={hoveredPanel !== null && hoveredPanel !== index}
          onHoverOut={() => setHoveredPanel(null)}
        />
      ))}
    </div>
  );
}

export default RentalPanels;
