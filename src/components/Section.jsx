import React, { useRef } from 'react';

const Section = ({ children }) => {
  const containerRef = useRef(null);

  const handleScroll = (e) => {
    // Horizontal scrolling
    containerRef.current.scrollLeft += e.deltaY;
  };

  return (
    <section className='wrapper-section relative w-screen h-screen max-sm:w-auto bg-gray-700 overflow-hidden max-sm:overflow-auto max-sm:flex-col'>
      <div
        ref={containerRef}
        className="scroll-container flex max-sm:flex-col"
        onWheel={handleScroll}
        style={{ overflowX: 'scroll', overflowY: 'hidden'}}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
