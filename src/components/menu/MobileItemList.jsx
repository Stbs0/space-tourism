import React from "react";
import { NavLink } from "react-router-dom";
export function MobileItemList({label,number,path}) {
  return (
    <li className='has-[.active]:border-r-white border-r-2 border-transparent'>
      <NavLink
        to={path}
        className='text-left tracking-[2px]  
        '>
        <span className='font-bold inline-block mr-[12px] w-[19px] tracking-[2.7px]'>
          {number}
        </span>
        {label}
      </NavLink>
    </li>
  );
}
