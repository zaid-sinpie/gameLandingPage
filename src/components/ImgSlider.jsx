import React from 'react';
import image1 from '../assets/background2.png';
import image2 from '../assets/background1.png';

const ImgSlider = () => {
  return (
    <div className='h-[45%] max-md:w-[30%] lg:w-[40%] bg-black border-8 border-[#adadad] flex overflow-hidden '>
        <img src={image1} alt="background" className='h-full w-full slider'/>
        <img src={image2} alt="background" className='h-full w-full slider'/>
        <img src={image1} alt="background" className='h-full w-full slider'/>
        <img src={image2} alt="background" className='h-full w-full slider'/>
    </div>
  );
}

export default ImgSlider;
