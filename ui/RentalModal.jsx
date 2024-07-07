import RentalForm from "./RentalForm";

function RentalModal({ handleOverlayClick, handleRentalClick }) {
  return (
    <div
      className="bg-off-white rounded-md shadow-md p-[20px] w-[30%] "
      onClick={handleOverlayClick}
    >
      <RentalForm handleRentalClick={handleRentalClick} />
    </div>
  );
}

export default RentalModal;
