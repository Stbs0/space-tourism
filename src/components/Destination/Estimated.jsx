import React from "react";
export function Estimated({travel}) {
  return (
    <div>
      <h3 className='font-barlow text-[14px] tracking-[2px] text-[#D0D6F9]'>
        Est. travel time
      </h3>
      <h2 className='font-Bellefair uppercase text-[28px]'>{travel} </h2>
    </div>
  );
}
  