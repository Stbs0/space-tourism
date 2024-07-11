import React from "react";
export function PlanetList({ setPlanetIndex, planetIndex }) {
  return (
    <ul className='flex font-barlow gap-[32px] justify-center lg:justify-start h-8'>
      <li
        onClick={() => setPlanetIndex(0)}
        className={`h-full ${
          planetIndex === 0 && "border-b-white border-b-2"
        } cursor-pointer `}>
        <h3>MOON</h3>
      </li>
      <li
        onClick={() => setPlanetIndex(1)}
        className={`h-full${
          planetIndex === 1 && "border-b-white border-b-2"
        } cursor-pointer`}>
        <h3>MARS</h3>
      </li>
      <li
        onClick={() => setPlanetIndex(2)}
        className={`h-full${
          planetIndex === 2 && "border-b-white border-b-2"
        } cursor-pointer`}>
        <h3>EUROPA</h3>
      </li>
      <li
        onClick={() => setPlanetIndex(3)}
        className={`h-full ${
          planetIndex === 3 && "border-b-white border-b-2"
        } cursor-pointer `}>
        <h3>TITAN</h3>
      </li>
    </ul>
  );
}
