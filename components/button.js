import React from "react";
import "./layout.css";

export default function Button({ name, value, id, onClick, className }) {
  return (
    <input
      type="button"
      className={className}
      name={name}
      value={value}
      id={id}
      onClick={onClick}
    />
  );
}
