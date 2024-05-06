import React from "react";
import ImgSlider from "./ImgSlider.jsx";
import ContentText from "./ContentText.jsx";
import image from '../assets/background1.png';

const Content = () => {
  return (
    <section className="min-h-[100vh] min-w-[100vw] bg-[#414141] relative flex flex-col justify-around max-sm:justify-start items-start pt-8 max-sm:pt-[7rem] max-sm:gap-4">
      <div className="flex max-sm:flex-col justify-between items-start">
        <ImgSlider />
        <div className="ml-10 text-stone-50">
          REGISTER BOX
        </div>
      </div>
      <ContentText />
    </section>
  );
};

export default Content;
