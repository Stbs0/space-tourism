import React from "react";

function Circul({ isActive }) {
  return (
    <div
      className={`size-[10px] bg-white rounded-full ${
        isActive ? "opacity-[17.44%]" : "opacity-100"
      }`}></div>
  );
}

export default Circul;
