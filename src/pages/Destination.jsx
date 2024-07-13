import { useLoaderData, Outlet } from "react-router-dom";
import { PlanetDiscreption } from "../components/Destination/PlanetDiscreption";
import { PlanetName } from "../components/Destination/PlanetName";
import { PlanetList } from "../components/Destination/PlanetList";
import { PlanetImg } from "../components/Destination/PlanetImg";
import { TravelOrDistance } from "../components/Destination/TravelOrDistance";

import { useState } from "react";
import MainHeader from "../components/shared/MainHeader";
const Destination = () => {
  const planets = useLoaderData();
  const [planetIndex, setPlanetIndex] = useState(0);
  console.log(planets);
  console.log(planets[planetIndex]);
  return (
    <main className='text-white container  p-6 sm:p-10 lg:px-[0] min-h-full mx-auto  py-[48px]'>
      <div className='flex  flex-col gap-6 min-h-full max-w-[1100px]'>
        <MainHeader label={"PICK YOUR DESTINATION"} number={"01"} />

        <div className='flex gap-8 flex-col lg:flex-row '>
          <PlanetImg image={planets[planetIndex].images.webp} />
          <div className='sm:px-[86px] lg:px-[47px] lg:w-1/2 '>
            <div className='space-y-6   '>
              <PlanetList
                planets={planets}
                setPlanetIndex={setPlanetIndex}
                planetIndex={planetIndex}
              />
              <div className=''>
                <PlanetName name={planets[planetIndex].name} />
                <PlanetDiscreption
                  description={planets[planetIndex].description}
                />
              </div>
              <hr />
              <div className='text-center  flex flex-col gap-6 sm:flex-row'>
                <TravelOrDistance
                  label='AVG. DISTANCE'
                  number={planets[planetIndex].distance}
                />
                <TravelOrDistance
                  label='Est. travel time'
                  number={planets[planetIndex].distance}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Destination;
