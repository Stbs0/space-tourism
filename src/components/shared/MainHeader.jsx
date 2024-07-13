import React from 'react'

const MainHeader = ({label,number}) => {
  return (
    <h3 className='font-barlow text-center tracking-[15%] sm:text-left sm:text-[20px] lg:text-[28px]'>
      <span className='inline-block mr-6 opacity-25 font-bold'>{number}</span>{label}
    </h3>
  );
}

export default MainHeader