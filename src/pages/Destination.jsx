import { useLoaderData, Outlet } from "react-router-dom";
import { PlanetDiscreption } from "../components/Destination/PlanetDiscreption";
import { PlanetName } from "../components/Destination/PlanetName";
import { PlanetList } from "../components/Destination/PlanetList";
import { PlanetImg } from "../components/Destination/PlanetImg";
import { Destince } from "../components/Destination/Destince";
import { Estimated } from "../components/Destination/Estimated";
import { useState } from "react";

const Destination = () => {
  const planets = useLoaderData();
  const [planetIndex, setPlanetIndex] = useState(0);
  console.log(planets[planetIndex]);
  return (
    <main className='text-white grow p-6'>
      <div className='flex flex-col gap-6   grow'>
        <h3 className='font-barlow text-center tracking-[15%]'>
          <span className='inline-block mr-6 opacity-25 font-bold'>01</span>PICK
          YOUR DESTINATION
        </h3>

        <div className='flex gap-8 flex-col '>
          <PlanetImg image={planets[planetIndex].images.webp} />
          <div className='space-y-6 '>
            <PlanetList
              planets={planets}
              setPlanetIndex={setPlanetIndex}
            />
            <div>
              <PlanetName name={planets[planetIndex].name} />
              <PlanetDiscreption
                description={planets[planetIndex].description}
              />
            </div>
            <hr />
            <div className='space-y-6 text-center'>
              <Destince distance={planets[planetIndex].distance} />
              <Estimated travel={planets[planetIndex].travel} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Destination;
