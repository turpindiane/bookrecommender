import React from "react";
import "./layout.css";

export default function Layout({ children }) {
  return (
    <div>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      {children}
    </div>
  );
}
