import React from "react";
export function TravelOrDistance({ number, label }) {
  return (
    <div className='text-center grow lg:text-left'>
      <h3 className='font-barlow text-[14px] tracking-[2px] text-[#D0D6F9] '>
        {label}
      </h3>
      <h2 className='font-Bellefair text-[28px] uppercase'>{number} </h2>
    </div>
  );
}
