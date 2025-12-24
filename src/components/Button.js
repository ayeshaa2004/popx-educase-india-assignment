import React from "react";

function Button({ children, type, onClick, className }) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
