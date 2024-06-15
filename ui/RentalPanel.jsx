import RentalPanelInfo from "./RentalPanelInfo";
import RentalPanelPrices from "./RentalPanelPrices";

function RentalPanel({
  imageUrl,
  title,
  info,
  prices,
  isHovered,
  isOtherHovered,
  onHover,
  onHoverOut,
}) {
  return (
    <div
      className={` text-off-white w-1/4 rental-panel rounded-sm relative flex flex-col items-center overflow-hidden group hover:shadow-md transition-transform duration-300 ${
        isHovered
          ? "transform scale-105"
          : isOtherHovered
          ? "transform scale-90"
          : "transform scale-100"
      }`}
      style={{ "--image-url": `url(${imageUrl})` }}
      onMouseEnter={onHover}
      onMouseLeave={onHoverOut}
    >
      <h3 className="text-[26px] mt-[20px] z-10">{title}</h3>

      <div className="rental-panel-margin text-xs w-4/5 flex flex-col gap-[35px] z-10 opacity-0 group-hover:opacity-100 transition-opacity ease-linear duration-500">
        <RentalPanelInfo info={info} />
        <RentalPanelPrices prices={prices} />
      </div>
    </div>
  );
}

export default RentalPanel;
