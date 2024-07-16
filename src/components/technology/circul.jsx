import React from "react";
export function Circul({ setTechnologyIndex, technologyIndex, number }) {
  return (
    <button
      onClick={() => setTechnologyIndex(number - 1)}
      className={`rounded-full ${
        technologyIndex ===( number - 1)
          ? "bg-white text-dark-navy "
          : "bg-transparent text-white"
      } size-10 border border-white/25`}>
      {number}
    </button>
  );
}
