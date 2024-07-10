import React from "react";
export function PlanetList({ setPlanetIndex }) {
  return (
    <ul className='flex font-barlow justify-evenly h-8'>
      <li
        onClick={() => setPlanetIndex(0)}
        className='h-full border-b-white border-b-2'>
        <h3>MOON</h3>
      </li>
      <li
        onClick={() => setPlanetIndex(1)}
        className='h-full border-b-white border-b-2'>
        <h3>MARS</h3>
      </li>
      <li
        onClick={() => setPlanetIndex(2)}
        className='h-full border-b-white border-b-2'>
        <h3>EUROPA</h3>
      </li>
      <li
        onClick={() => setPlanetIndex(3)}
        className='h-full border-b-white border-b-2'>
        <h3>TITAN</h3>
      </li>
    </ul>
  );
}
