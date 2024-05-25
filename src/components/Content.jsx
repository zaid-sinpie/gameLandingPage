import React from "react";
import ImgSlider from "./ImgSlider.jsx";
import ContentText from "./ContentText.jsx";
import imgBg from "../assets/spiderBg.svg";

const Content = () => {
  return (
    <section className="min-h-[100vh] min-w-[100vw] bg-[#393939] relative flex flex-col justify-around max-sm:justify-start items-start pt-8 max-sm:pt-[7rem] max-sm:gap-8 overflow-hidden">
      <div className="flex max-sm:flex-col justify-between items-start gap-[5rem] max-sm:gap-8 max-sm:items-center z-10">
        <ImgSlider />
        <div className="flex flex-col">
          <button className="text-4xl font-bold text-[#727272] hover:text-[#8f8f8f] bg-[#39393973] px-10 py-6 rounded-full border-8 border-[#727272] hover:border-[#8f8f8f] uppercase max-sm:text-2xl shadow-md backdrop-blur-sm">
            Download Now
          </button>
        </div>
        
      </div>
      <ContentText />
      <img src={imgBg} alt="background spider image" className="absolute w-[100rem] -right-[20rem] opacity-5 pointer-events-none max-sm:-right-[5rem] animate-tick"/>
    </section>
  );
};

export default Content;
