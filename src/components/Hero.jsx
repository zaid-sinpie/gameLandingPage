import React from "react";

const Hero = () => {
  return (
    <section className="hero-section flex justify-end items-end">
      <figure className="h-full flex flex-col justify-between items-center text-red-500 py-[5rem]">
        <div className="px-[2rem] py-[1rem] bg-[#414141] text-xl font-bold text-[#d7ff55] rounded-l-full border-2 border-[#d7ff55] hover:text-[#414141] hover:bg-[#d7ff55] cursor-pointer">
          <button>
            <h2>DOWNLOAD</h2>
          </button>
        </div>
        <div className="px-[2rem] py-[1rem] bg-[#414141] text-xl font-bold text-[#d7ff55] rounded-md border-2 border-[#d7ff55] hover:text-[#414141] hover:bg-[#d7ff55]">
          <button>
            <h2>SHARE</h2>
          </button>
        </div>
      </figure>
    </section>
  );
};

export default Hero;
