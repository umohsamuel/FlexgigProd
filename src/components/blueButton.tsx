import React from "react";

type BlueButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  HandleClick?: () => void;
};

function BlueButton({ children, HandleClick, ...props }: BlueButtonProps) {
  return (
    <button
      onClick={HandleClick}
      className="bg-[#042268] rounded-lg w-[90%] md:w-full max-w-[320px] text-white p-2 mt-16 md:mt-12 mb-2 md:mb-4" {...props}
    >
      {children}
    </button>
  );
}

export default BlueButton;
