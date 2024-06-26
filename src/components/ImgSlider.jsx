import image1 from "../assets/background2.png";
import React, { useRef, useEffect, useState } from "react";
import image2 from "../assets/background1.png";

const ImgSlider = () => {
  const sliderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.5 } // Adjust the threshold as needed
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);
  return (
    <div className="overflow-hidden max-sm:h-auto">
      <figure
        className={`opacity-0 flex w-auto ml-[10rem] max-sm:ml-0  max-sm:flex-col max-sm:justify-around max-sm:items-center ${
          isVisible ? "animate-slide-in" : ""
        }`}
        ref={sliderRef}
      >
        <div className="h-[45%] max-md:w-[30rem] lg:w-[30rem] max-sm:h-auto max-sm:w-[80%] bg-black border-[0.8rem] border-[#adadad] flex overflow-hidden shadow-md rounded-sm">
          <img src={image1} alt="background" className="h-full w-full slider" />
          <img src={image2} alt="background" className="h-full w-full slider" />
          <img src={image1} alt="background" className="h-full w-full slider" />
          <img src={image2} alt="background" className="h-full w-full slider" />
        </div>
      </figure>
    </div>
  );
};

export default ImgSlider;
