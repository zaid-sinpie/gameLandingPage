import React, { useState } from "react";

const CookiesPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <dialog className="w-fit py-2 px-4 flex gap-4 bg-[#fff] items-center rounded-md fixed bottom-[2rem] max-sm:text-xs max-sm:flex-col z-20 shadow-md">
          <p>
            Accept cookies for better experience{" "}
            <a className="text-[#69dcff] underline" href="#">
              Learn More
            </a>{" "}
          </p>
          <button
            className="text-[#414141] bg-[#d7ff55] border-[#414141] border py-2 px-6 font-bold rounded-lg"
            onClick={handleClose}
          >
            OK
          </button>
        </dialog>
      )}
    </>
  );
};

export default CookiesPopup;
