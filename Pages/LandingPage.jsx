import { useEffect, useState } from "react";
import LandingPanels from "../ui/LandingPanels";
import LeftLanding from "../ui/LeftLanding";
import SignUpModal from "../ui/SignUpModal";

function LandingPage() {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpClick = function () {
    setShowSignUp((showModal) => !showModal);
  };

  const handleKeyDown = function (e) {
    if (e.key === "Escape") {
      setShowSignUp(false);
    }
  };

  useEffect(() => {
    if (showSignUp) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showSignUp]);

  return (
    <div
      className={`h-screen min-h-[800px] w-screen pl-[30px] max-w-[1800px] mx-auto  flex justify-between ${
        showSignUp ? "backdrop-blur-md" : ""
      }`}
    >
      <LeftLanding />
      <LandingPanels handleSignUpClick={handleSignUpClick} />

      {showSignUp && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50  flex justify-center items-center "
          onClick={handleSignUpClick}
        >
          <SignUpModal
            handleOverlayClick={(e) => e.stopPropagation()}
            handleSignUpClick={handleSignUpClick}
          />
        </div>
      )}
    </div>
  );
}

export default LandingPage;
