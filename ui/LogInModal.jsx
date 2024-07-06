import LogInForm from "./LogInForm";

function LogInModal({ handleOverlayClick, handleLogInClick }) {
  return (
    <div
      className="bg-off-white rounded-md shadow-md p-[20px] w-[30%]"
      onClick={handleOverlayClick}
    >
      <LogInForm handleLogInClick={handleLogInClick} />
    </div>
  );
}

export default LogInModal;
