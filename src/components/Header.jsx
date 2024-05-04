const Header = () => {
  return (
    <ul className="header flex text-stone-500 flex-col max-sm:flex-row justify-between max-sm:justify-center item-center bg-[#d7ff55] h-full w-[8rem] px-4 max-sm:px-0 fixed left-0 top-0 py-2 gap-8 max-sm:gap-2 z-10 max-sm:w-full max-sm:h-[6rem]">
      <div className="font-bold bg-[#414141] px-1 py-2 rounded-md flex flex-col items-center justify-center cursor-pointer gap-2 max-sm:w-fit">
        <p className="text-2xl max-sm:text-xl text-[#d7ff55]">JOIN</p>
        {/* <div className="flex gap-4">
          <div className="py-3 px-6 rounded-full bg-[#d7ff55]"></div>
          <div className="py-3 px-6 rounded-full bg-[#d7ff55]"></div>
        </div> */}
        <button className="bg-[#d7ff55] px-1 py-1 max-sm:px-[0.5px] max-sm:py-[0.5px] rounded-sm text-[#414141] border-[1px] border-[#d7ff55] hover:text-[#d7ff55] hover:bg-[#414141]">
          Download
        </button>
      </div>
      <div className="flex flex-col max-sm:flex-row h-auto gap-[10rem] max-md:gap-0 max-sm:gap-1 sm:gap-0">
        <figure className="w-[20rem] max-sm:w-auto px-2 py-2 text-[#414141] h-auto transform translate-x-[-7rem] -translate-y-[7rem] max-sm:translate-y-0 -rotate-90 max-sm:rotate-0 max-sm:translate-x-0 rounded-md flex flex-col justify-around items-start">
          <h1 className="text-4xl max-sm:text-xl text-[#414141] font-extrabold uppercase">
            gamer spirits
          </h1>
          <p className="text-[#414141] uppercase font-bold text-xs">
            the hunt is on!!
          </p>
          <div className="text-[#414141] text-2xl w-full flex justify-between items-center max-sm:justify-start max-sm:gap-8">
            <p className="uppercase font-bold text-xl max-sm:text-xs">Champions</p>
            <button className="download-nav-btn flex gap-2 items-center bg-[#414141] text-[#d7ff55] text-xl max-sm:text-xs px-1 py-1 rounded-md font-extrabold border-2 border-[#414141] hover:bg-transparent hover:text-[#414141]">
              <i className="fa-solid fa-square-share-nodes"></i>SHARE
            </button>
          </div>
        </figure>
        <button className="text-[15px] font-bold bg-[#414141] text-[#d7ff55] rounded-md py-2 max-sm:px-2 hover:bg-transparent hover:text-[#414141] border-2 border-[#414141]">
          <p className="font-bold text-2xl -rotate-12">WLZ</p>
          Register
        </button>
      </div>
    </ul>
  );
};

export default Header;
