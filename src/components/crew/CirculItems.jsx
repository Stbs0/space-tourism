import React from "react";
import Circul from "./Circul";
function CirculItems({ setCrewIndex, crewIndex }) {
  return (
    <div className='flex gap-4 justify-center lg:place-self-start lg:gap-10 '>
      <Circul
        setCrewIndex={setCrewIndex}
        crewIndex={crewIndex}
        index={0}
      />
      <Circul
        setCrewIndex={setCrewIndex}
        crewIndex={crewIndex}
        index={1}
      />
      <Circul
        setCrewIndex={setCrewIndex}
        crewIndex={crewIndex}
        index={2}
      />
      <Circul
        setCrewIndex={setCrewIndex}
        crewIndex={crewIndex}
        index={3}
      />
    </div>
  );
}
export default CirculItems;
