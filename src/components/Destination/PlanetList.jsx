import React from "react";
export function PlanetList({}) {
  return <ul className='flex font-barlow justify-evenly h-8'>
          <li className='h-full border-b-white border-b-2'>
            <h3>MOON</h3>
          </li>
          <li className='h-full border-b-white border-b-2'>
            <h3>MARS</h3>
          </li>
          <li className='h-full border-b-white border-b-2'>
            <h3>EUROPA</h3>
          </li>
          <li className='h-full border-b-white border-b-2'>
            <h3>TITAN</h3>
          </li>
        </ul>;
}
  