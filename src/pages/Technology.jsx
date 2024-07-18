import { Circul } from "../components/technology/circul";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MainHeader from "../components/shared/MainHeader";

const Technology = () => {
  const technology = useLoaderData();
  const [technologyIndex, setTechnologyIndex] = useState(0);

  return (
    <main className='text-white mx-auto   overflow-hidden p-6 sm:p-10 lg:pl-[165px] relative lg:py-[48px]'>
      <div className='grid grid-cols-1 gap-6'>
        <MainHeader
          number={"03"}
          label={"SPACE LAUNCH 101"}
        />
        <div className='grid grid-rows-2 lg:grid-cols-2 gap-8 lg:grid-rows-none'>
          <div className='relative overflow-y-hidden lg:order-2 h-[250px] sm:h-[300px] lg:h-auto'>
            <img
              src={
                window.innerWidth < 680 || window.innerWidth > 1024
                  ? technology[technologyIndex].images.portrait
                  : technology[technologyIndex].images.landscape
              }
              className='absolute top-0 left-0 w-full h-full object-cover '
              alt=''
            />
          </div>
          <div className='flex flex-col  lg:flex-row justify-center lg:justify-start gap-10 lg:pl-10'>
            <div className='flex justify-center lg:flex-col gap-4'>
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
            <div className='max-w-[500px] mx-auto lg:mx-0'>
              <div className='flex flex-col gap-4'>
                <h3 className='font-Bellefair text-center lg:text-left text-[18px] sm:text-[24px] lg:text-[28px] opacity-50 uppercase'>
                  the terminology
                </h3>
                <h2 className='font-Bellefair text-center lg:text-left text-[24px] sm:text-[40px] lg:text-[56px] uppercase'>
                  {technology[technologyIndex].name}
                </h2>
                <p className='text-center lg:text-left text-[15px] sm:text-[16px] font-regularBarlow leading-[180%] text-light-blue'>
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
