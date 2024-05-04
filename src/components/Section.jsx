import React, { useRef } from 'react';

const Section = ({ children }) => {
  const containerRef = useRef(null);

  const handleScroll = (e) => {
    // Horizontal scrolling
    containerRef.current.scrollLeft += e.deltaY / 2;
  };

  return (
    <section className='wrapper-section relative w-screen h-screen bg-gray-700 overflow-hidden'>
      <div
        ref={containerRef}
        className="scroll-container flex"
        onWheel={handleScroll} // Attach the handleScroll function to the onWheel event
        style={{ overflowX: 'scroll', overflowY: 'hidden'}} // Ensure overflow properties are set
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
