import React from "react";
export function PlanetImg({ image }) {
  console.log(image)
  return (
    <div className='mx-auto py-[18.5px] '>
      <img
        className='size-[150px] '
        src={image}
        alt=''
      />
    </div>
  );
}
