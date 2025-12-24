import React from "react";

function Input({ label, required, className, labelclassname, type, ...props }) {
  return (
    <div>
      <label className={labelclassname}>
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </label>
      <input type={type} {...props} className={className} />
    </div>
  );
}

export default Input;
