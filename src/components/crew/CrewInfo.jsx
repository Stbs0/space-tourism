import React from "react";

const CrewInfo = ({ crew }) => {
  return (
    <div className='flex flex-col gap-6  h-[245px] lg:h-full lg:grid '>
      <div className='flex  flex-col lg:justify-end gap-2'>
        <h3 className='font-Bellefair text-center  text-[18px]  opacity-50 sm:text-[24px] lg:text-[28px]  uppercase lg:text-left'>
          {crew.role}
        </h3>
        <h2 className='font-Bellefair text-center  text-[24px] sm:text-[40px] lg:text-[56px] uppercase lg:text-left'>
          {crew.name}
        </h2>
      </div>
      <p className='text-center text-[15px] sm:text-[16px] font-regularBarlow leading-[180%] text-ligth-blue lg:text-left'>
        {crew.bio}
      </p>
    </div>
  );
};

export default CrewInfo;
