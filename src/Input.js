import React from "react";

export const Input = function(props) {
  const { type, name, placeholder } = props;
  return (
    <div className="Input">
      <input
        id={name}
        autoComplete="false"
        required
        type={type}
        placeholder={placeholder}
      />
      <label htmlFor={name} />
    </div>
  );
};
