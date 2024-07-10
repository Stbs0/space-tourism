import React from "react";
export function Destince({distance}) {
  return (
    <div className='text-center  '>
      <h3 className='font-barlow text-[14px] tracking-[2px] text-[#D0D6F9]'>
        AVG. DISTANCE
      </h3>
      <h2 className='font-Bellefair text-[28px] uppercase'>{distance} </h2>
    </div>
  );
}
