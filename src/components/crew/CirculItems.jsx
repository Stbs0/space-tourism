import React from "react";
import Circul from "./Circul";
function CirculItems({isActive}) {
  return (
    <div className='flex gap-[6px] justify-center '>
     <Circul isActive={isActive} />
     <Circul isActive={isActive} />
     <Circul isActive={isActive} />
     <Circul isActive={isActive} />
    </div>
  );
}
export default CirculItems;
