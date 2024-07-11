import React from "react";
export function PlanetImg({ image }) {
  console.log(image);
  return (
    <div className='w-full lg:w-1/2 '>
      <img
        className='w-[150px] sm:w-[300px] lg:w-[480px] mx-auto'
        src={image}
        alt=''
      />
    </div>
  );
}
