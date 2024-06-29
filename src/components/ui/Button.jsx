import React from "react";

function Button({ name, arrowIcon = null, type = "button", onClick, width, height, className }) {
  const buttonStyle = {
    minWidth: width || "186px",
    height: height || "42px",
    padding: "2px 4px",
    borderRadius: "100px",
    background: "linear-gradient(to right, #FF3131, #FF914D)",
    fontSize: "16px",
    color: "white",
  };
  return (
    <button
      className={`focus:outline-none focus:shadow-outline flex items-center justify-center ${className}`}
      style={buttonStyle}
      type={type}
      onClick={onClick}
    >
      {name}
      {arrowIcon ? (
        <img src={arrowIcon} alt="Arrow Icon" className="inline-block ml-2" />
      ) : (
        ""
      )}
    </button>
  );
}

export default Button;
