import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MainHeader from "../components/shared/MainHeader";
const Technology = () => {
  const technology = useLoaderData();
  const [technologyIndex, setTechnologyIndex] = useState(0);
  console.log(technology);
  return (
    <main className='text-white mx-auto  container  p-6 sm:p-10 lg:px-[165px] relative  lg:py-[48px]'>
      <div className='grid grid-cols-1 gap-6 '>
        <MainHeader
          number={"03"}
          label={"SPACE LAUNCH 101"}
        />
        <div className=''>
          <div className='relative overflow-hidden w-screen left-1/2 right-1/2 -translate-x-1/2'>
        {/* add a black mask at the top and bottom */}
            <img
              src={technology[technologyIndex].images.portrait}
              className='"w-full h-auto object-cover'
              alt=''
            />
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Technology;
