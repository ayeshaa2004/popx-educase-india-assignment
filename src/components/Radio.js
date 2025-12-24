import React from "react";

function Radio({
  checked,
  label,
  name,
  value,
  onChange,
  className,
  radioclassname,
}) {
  return (
    <label className={className}>
      <input
        type="radio"
        checked={checked}
        name={name}
        value={value}
        onChange={onChange}
        className={radioclassname}
      />
      {label}
    </label>
  );
}

export default Radio;
