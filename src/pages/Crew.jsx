import CirculItems from "../components/crew/CirculItems";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CrewImg from "../components/crew/CrewImg";
import CrewInfo from "../components/crew/CrewInfo";
import MainHeader from "../components/shared/MainHeader";
const Crew = () => {
  const crew = useLoaderData();
  const [crewIndex, setCrewIndex] = useState(0);
  console.log(crew);
  return (
    <main className='text-white mx-auto container  p-6 sm:p-10 lg:px-[165px]   lg:py-[48px]'>
      <div className='flex flex-col gap-6 '>
        <MainHeader
          label={"Peek your Crew"}
          number={"02"}
        />
        <div className='grid grid-cols-1 justify-center lg:flex-row gap-8 lg:grid lg:grid-cols-2 '>
          <div className=' sm:mx-[88px] lg:mx-0 lg:grid'>
            <div className='flex  flex-col lg:items-start gap-6'>
              <CrewInfo crew={crew[crewIndex]} />
              <CirculItems
                setCrewIndex={setCrewIndex}
                crewIndex={crewIndex}
              />
            </div>
          </div>
          <CrewImg crew={crew[crewIndex]} />
        </div>
      </div>
    </main>
  );
};

export default Crew;
