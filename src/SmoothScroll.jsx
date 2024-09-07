import Scrollbar from "smooth-scrollbar";
import { useEffect } from "react";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

const overscrollOptions = {
  enable: true,
  effect: "bounce",
  damping: 0.15,
  maxOverscroll: 150,
  glowColor: "#fff",
};

const options = {
  damping: 0.07,
  plugins: {
    overscroll: { ...overscrollOptions },
  },
};

const Scroll = () => {
  useEffect(() => {
    // Initialize Smooth Scrollbar with Overscroll plugin
    Scrollbar.use(OverscrollPlugin);

    // Attach scrollbar to a specific element
    const scrollbar = Scrollbar.init(document.querySelector("#scroll-container"), options);

    return () => {
      if (scrollbar) scrollbar.destroy();
    };
  }, []);

  return null;
};

export default Scroll;
