import CirculItems from "../components/crew/CirculItems";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
const Crew = () => {
  const crew = useLoaderData();
  const [crewIndex, setCrewIndex] = useState(0);
  console.log(crew);
  return (
    <main className='text-white  p-6 sm:p-10 lg:px-[0]   lg:py-[48px]'>
      <div className='flex flex-col gap-6'>
        <h3 className='font-barlow text-center tracking-[15%] sm:text-left sm:text-[20px] lg:text-[28px]'>
          <span className='inline-block mr-6 opacity-25 font-bold'>01</span>MEET
          YOUR CREW
        </h3>
        <div>
          <div>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-6 justify-center h-[245px] '>
                <div className='flex flex-col gap-2'>
                  <h3 className='font-Bellefair text-center  text-[18px] sm:text-left opacity-50 sm:text-[20px] lg:text-[28px] uppercase'>
                    {crew[crewIndex].role}
                  </h3>
                  <h2 className='font-Bellefair text-center  text-[24px] sm:text-left sm:text-[56px] lg:text-[80px] uppercase'>
                    {crew[crewIndex].name}
                  </h2>
                </div>
                <p className='text-center text-[15px] sm:text-[16px] font-regularBarlow leading-[180%] text-[#D0D6F9]'>
                  {crew[crewIndex].bio}
                </p>
              </div>
              <CirculItems />
            </div>
          </div>
          <div className='relative'>
          {/* add transparent gradient to this picture */}
            <img
              className='transparent-gradient'
              src={crew[crewIndex].images.webp}
              alt=''
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Crew;
