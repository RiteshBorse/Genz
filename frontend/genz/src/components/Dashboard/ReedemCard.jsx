import React from "react";
import star from "../../assets/star.png";
import Ratings from "./Ratings";

const ReedemCard = ({photo, heading, duration, coins}) => {
  return (
    <div className="p-3  rounded-xl w-72 h-96 shadow-[0_3px_10px_rgb(0,0,0,0.2)] mr-8">
      <img src={photo} alt="" className="w-full h-1/2"/>
      <p className="mt-2 text-lg font-bold text-blue-900">
        {heading}
      </p>
      <p className="font-semibold">Duration : {duration}</p>
      <p className="flex mt-2">
        <Ratings />
      </p>
      <button className="flex items-center justify-center gap-2 p-2 mx-auto border-2 border-black border-solid rounded-lg mt-9">
        <span className="font-bold">Reedem {coins}</span>
        <img src={star} alt="" className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ReedemCard;
