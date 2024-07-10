import { Estimated } from "./Estimated";
import { Destince } from "./Destince";
import { PlanetDiscreption } from "./PlanetDiscreption";
import { PlanetName } from "./PlanetName";
import { PlanetList } from "./PlanetList";
import { PlanetImg } from "./PlanetImg";
const Planet = ({ planets }) => {
  return (
    <div className='flex gap-8 flex-col '>
      <PlanetImg />
      <div className='space-y-6 '>
        <PlanetList />
        <div>
          <PlanetName />
          <PlanetDiscreption />
        </div>
        <hr />
        <div className='space-y-6 text-center'>
          <Destince />
          <Estimated />
        </div>
      </div>
    </div>
  );
};
export default Planet;
