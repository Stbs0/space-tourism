import React from "react";

function Circul({ setCrewIndex, index, crewIndex }) {
  return (
    <div
      onClick={() => setCrewIndex(index)}
      className={`size-[10px] bg-white rounded-full ${
        index === crewIndex ? "opacity-100" : "opacity-[17.44%]"
      }`}></div>
  );
}

export default Circul;
