import { useState } from "react";
import { IoIosClose } from "react-icons/io";

function AccountSettings() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = function () {
    setIsOpen(true);
  };

  const handleClose = function (e) {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div
      className={`border-2 border-gray-700 rounded-md p-[15px] text-center relative ${
        !isOpen ? "cursor-pointer" : ""
      }`}
      onClick={handleOpen}
    >
      <h3>Update Personal Information</h3>

      {isOpen && (
        <IoIosClose
          className="text-[20px] absolute top-4 right-4 cursor-pointer"
          onClick={handleClose}
        />
      )}

      {isOpen && <p>lol</p>}
    </div>
  );
}

export default AccountSettings;
