import React from "react";

const CrewImg = ({ crew }) => {
  return (
    <div className=' grid  '>
      <img
        className='transparent-gradient   '
        src={crew.images.webp}
        alt=''
      />
    </div>
  );
};
export default CrewImg;
