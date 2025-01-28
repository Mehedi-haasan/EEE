// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Icon } from "@iconify/react";


const ClientReview = ({name,message,image}) => {

  return (
   <div className="grid grid-cols-12">
          <div className="grid col-span-3">
        <img src={image} alt="image3" className="h-[80px] w-[80px] items-center p-2 ml-2 lg:ml-1 mt-2 justify-center flex rounded-full"/>
       </div>

       <div className="grid col-span-9">
            <div>
                <h2 className=" text-2xl font-semibold px-2 pt-4">{name}</h2>
                <div className="flex">
                  <Icon icon="solar:star-bold" width="16px" className="mx-1 mt-2 text-[#FFA500]"/>
                  <Icon icon="solar:star-bold" width="16px" className="mt-2 text-[#FFA500]"/>
                  <Icon icon="solar:star-bold" width="16px" className="mx-1 mt-2 text-[#FFA500]"/>
                  <Icon icon="solar:star-bold" width="16px" className="mt-2 text-[#FFA500]"/>
                  <Icon icon="solar:star-bold" width="16px" className="mx-1 mt-2 text-[#FFA500]"/>
                </div>
            </div>
            <p className="px-2 py-4">{message}</p>
        
        </div>
   </div>
  );
};

export default ClientReview;

