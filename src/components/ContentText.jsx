import React, { useEffect, useRef, useState } from "react";

const ContentText = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Triggers when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    }, options);

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div className={`ml-[10rem] max-sm:ml-10 h-auto w-auto overflow-hidden`}>
      <h1
        ref={contentRef}
        className={`opacity-0 text-6xl font-Lilitai font-extrabold text-[#696969] max-sm:ml-0 ${
          isVisible ? "slide-in-bottom" : ""
        }`}
      >
        WAIFU'S WAR ZONE
      </h1>
    </div>
  );
};

export default ContentText;
