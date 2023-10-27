import React from "react";

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <>
      <button
        className={`flex justify-center items-center gap-2 px-7 py-5 border font-montserrat text-lg leading-none ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-coral-blue text-white border-coral-blue"
        } rounded-full ${fullWidth && "w-full"}`}
      >
        {label}
        {iconUrl && (
          <img
            src={iconUrl}
            alt="icon "
            className="ml-2 rounded-full w-5 h-5"
          />
        )}
      </button>
    </>
  );
};

export default Button;