import { Circul } from "../components/technology/circul";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MainHeader from "../components/shared/MainHeader";
const Technology = () => {
  const technology = useLoaderData();
  const [technologyIndex, setTechnologyIndex] = useState(0);
  console.log(window.innerWidth);
  return (
    <main className='text-white mx-auto  container overflow-hidden p-6 sm:p-10 lg:px-[165px] relative  lg:py-[48px]'>
      <div className='grid grid-cols-1  gap-6 '>
        <MainHeader
          number={"03"}
          label={"SPACE LAUNCH 101"}
        />
        <div className='grid grid-rows-2 lg:grid-cols-2 gap-8 lg:grid-rows-none relative '>
          <div className=' overflow-y-clip right-0 left-0 bottom-1/2 absolute h-[250px] sm:h-[300px]'>
            {/* add a black mask at the top and bottom */}
            <img
              src={
                window.innerWidth < 680
                  ? technology[technologyIndex].images.portrait
                  : technology[technologyIndex].images.landscape
              }
              className=' min-w-[100vw] absolute   -left-6 sm:-left-10  lg:-translate-x-[165px]  bottom-0 '
              alt=''
            />
          </div>
          <div className='grid grid-cols-1 row-start-2 row-end-3 gap-10 row-span-'>
            <div className='flex justify-center gap-4'>
              <Circul
                setTechnologyIndex={setTechnologyIndex}
                technologyIndex={technologyIndex}
                number={1}
              />
              <Circul
                setTechnologyIndex={setTechnologyIndex}
                technologyIndex={technologyIndex}
                number={2}
              />
              <Circul
                setTechnologyIndex={setTechnologyIndex}
                technologyIndex={technologyIndex}
                number={3}
              />
            </div>
            <div className='max-w-[500px] mx-auto'>
              <div className='flex flex-col container  h-[245px] lg:h-full lg:grid '>
                <div className='flex  flex-col lg:justify-end gap-4'>
                  <h3 className='font-Bellefair text-center  text-[18px]  opacity-50 sm:text-[24px] lg:text-[28px]  uppercase lg:text-left'>
                    the terminology
                  </h3>
                  <h2 className='font-Bellefair text-center  text-[24px] sm:text-[40px] lg:text-[56px] uppercase lg:text-left'>
                    {technology[technologyIndex].name}
                  </h2>
                </div>
                <p className='text-center text-[15px] sm:text-[16px] font-regularBarlow leading-[180%] text-ligth-blue lg:text-left'>
                  {technology[technologyIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Technology;
