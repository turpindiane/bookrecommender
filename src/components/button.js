import React from "react";
import "./layout.css";
import { padding } from "./button.module.css";

export default function Button({ name, value, id, onClick, className }) {
  return (
    <div className={padding}>
      <input
        type="button"
        className={className}
        name={name}
        value={value}
        id={id}
        onClick={onClick}
      />
    </div>
  );
}
