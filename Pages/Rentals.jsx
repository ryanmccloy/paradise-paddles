import { useEffect, useState } from "react";
import { RentalProvider } from "../contexts/RentalContext";
import toast from "react-hot-toast";

import { useAuth } from "../contexts/AuthContext";
import Button from "../ui/Button";
import RentalPanels from "../ui/RentalPanels";
import SignUpModal from "../ui/SignUpModal";
import RentalModal from "../ui/RentalModal";

function Rentals() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showRental, setShowRental] = useState(false);

  const { user } = useAuth();

  const handleCheckClick = function () {
    if (!user) {
      setShowSignUp((showModal) => !showModal);
      toast("Please create an account to make a reservation", {
        duration: 4000,
        position: "top-center",

        style: { textAlign: "center" },

        // Custom Icon
        icon: "🏝️",

        // Change colors of success/error/loading icon
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },

        // Aria
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      });
    } else {
      setShowRental((showRental) => !showRental);
    }
  };

  const handleSignUpClick = function () {
    setShowSignUp((showModal) => !showModal);
  };

  const handleRentalClick = function () {
    setShowRental((showRental) => !showRental);
  };

  const handleKeyDown = function (e) {
    if (e.key === "Escape") {
      setShowSignUp(false);
      setShowRental(false);
    }
  };

  useEffect(() => {
    if (showSignUp || showRental) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showSignUp, showRental]);

  return (
    <RentalProvider>
      <section
        id="rentals"
        className={`h-screen min-h-[800px] max-h-[990px] min-w-screen max-w-[1800px] mx-auto flex flex-col gap-[5vh] items-center py-[10vh] ${
          showSignUp || showRental ? "backdrop-blur-md" : ""
        }`}
      >
        <h2 className="">Rentals</h2>

        <RentalPanels />

        <Button type="full" handler={handleCheckClick}>
          Check Availability
        </Button>

        {showSignUp && !user && (
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

        {showRental && user && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50  flex justify-center items-center "
            onClick={handleRentalClick}
          >
            <RentalModal
              handleOverlayClick={(e) => e.stopPropagation()}
              handleRentalClick={handleRentalClick}
            />
          </div>
        )}
      </section>
    </RentalProvider>
  );
}

export default Rentals;
