import React from "react";
import ImgSlider from "./ImgSlider.jsx";
import ContentText from "./ContentText.jsx";

const Content = () => {
  return (
    <section className="min-h-[100vh] min-w-[100vw] bg-[#393939] relative flex flex-col justify-around max-sm:justify-start items-start pt-8 max-sm:pt-[7rem] max-sm:gap-8">
      <div className="flex max-sm:flex-col justify-between items-start gap-[5rem] max-sm:gap-8 max-sm:items-center">
        <ImgSlider />
        <div className="flex flex-col">
          <button className="text-4xl font-bold text-[#727272] px-10 py-6 rounded-full border-8 border-[#727272] uppercase max-sm:text-2xl shadow-md">
            Download Now
          </button>
        </div>
      </div>
      <ContentText />
    </section>
  );
};

export default Content;
