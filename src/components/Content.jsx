import React from "react";
import ImgSlider from "./ImgSlider.jsx";
import ContentText from "./ContentText.jsx";


const Content = () => {
  return (
    <section className="min-h-[100vh] min-w-[100vw] bg-[#414141] relative flex flex-col justify-around max-sm:justify-start items-start pt-8 max-sm:pt-[7rem] max-sm:gap-4">
      <ImgSlider />
      <ContentText />
    </section>
  );
};

export default Content;
