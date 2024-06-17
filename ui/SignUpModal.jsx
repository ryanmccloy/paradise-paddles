import SignUpForm from "./SignUpForm";

function SignUpModal({ handleOverlayClick }) {
  return (
    <div
      className="bg-off-white rounded-md shadow-md p-[20px] w-[30%]"
      onClick={handleOverlayClick}
    >
      <SignUpForm />
    </div>
  );
}

export default SignUpModal;
