import React from "react";

export default function Button({ text, onClick, className, size, children }) {

  //Check for the size to change shape of the button
  if (size == "sm") {
    size = "h-8";
  } else {
    size = "h-12";
  }

  //If there are children return the element with children inside
  if (children) {
    return (
      <button
        className={`w-20 rounded-md ${size} ${className ? className : ""}`}
        onClick={onClick}
      >
        {children}
        {text}
      </button>
    );
  }

  return (
    <button
      className={`w-20 rounded-md ${size} ${className ? className : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
