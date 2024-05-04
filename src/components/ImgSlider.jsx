import React from "react";
import image1 from "../assets/background2.png";
import image2 from "../assets/background1.png";

const ImgSlider = () => {
  return (
    <figure className="w-auto ml-[10rem]">
      <div className="h-[45%] max-md:w-[30%] lg:w-[40%] max-sm:h-auto max-sm:w-[80%] max-sm:ml-[1rem] bg-black border-8 border-[#adadad] flex overflow-hidden shadow-md">
        <img src={image1} alt="background" className="h-full w-full slider" />
        <img src={image2} alt="background" className="h-full w-full slider" />
        <img src={image1} alt="background" className="h-full w-full slider" />
        <img src={image2} alt="background" className="h-full w-full slider" />
      </div>
    </figure>
  );
};

export default ImgSlider;
