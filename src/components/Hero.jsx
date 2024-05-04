import React from "react";

const Hero = () => {
  const cssClasses = ` border-2 border-[#414141] p-1 rounded-md bg-[#414141] text-[#d7ff55] hover:bg-[#d7ff55] hover:text-[#414141]`;
  return (
    <section className="hero-section flex justify-end items-end min-h-[100vh] min-w-[100vw]">
      <figure className="h-full flex flex-col justify-between items-end text-red-500 py-[5rem]">
        <div className="px-[2rem] py-[1rem] bg-[#5b5b5bc5] backdrop-blur-sm text-[18px] font-bold text-[#d7ff55] rounded-l-full border-2 border-[#d7ff55] hover:text-[#414141] hover:bg-[#d7ff55a2] cursor-pointer">
          <button>
            <h2>DOWNLOAD <i className="fa-solid fa-download"></i></h2>
          </button>
        </div>
        <div></div>
        <div className="flex gap-2 px-[0.5rem] py-[0.5rem] text-[#414141] text-xl font-bold bg-[#d7ff55a2] rounded-md border-2 border-[#d7ff55] backdrop-blur-sm cursor-pointer">
          <a href="#"><i className={`fa-brands fa-twitter ${cssClasses}`}></i></a>
          <a href="#"><i className={`fa-brands fa-youtube ${cssClasses}`}></i></a>
          <a href="#"><i className={`fa-brands fa-linkedin ${cssClasses}`}></i></a>
          <a href="#"><i className={`fa-brands fa-discord ${cssClasses}`}></i></a>
        </div>
      </figure>
    </section>
  );
};

export default Hero;
