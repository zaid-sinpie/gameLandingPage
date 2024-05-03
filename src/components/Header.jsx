const Header = () => {
  return (
    <ul className="header flex text-stone-500 flex-col justify-between item-center bg-[#d7ff55] h-full w-[8rem] px-4 fixed left-0 top-0 py-2 gap-8">
      <div className="font-bold bg-[#414141] px-1 py-2 rounded-md flex flex-col items-center justify-center cursor-pointer gap-2">
        <p className="text-2xl text-[#d7ff55]">JOIN</p>
        <div className="flex gap-4">
          <div className="py-3 px-6 rounded-full bg-[#d7ff55]"></div>
          <div className="py-3 px-6 rounded-full bg-[#d7ff55]"></div>
        </div>
        <button className="te gap-2xt-[1rem] bg-[#d7ff55] px-1 py-1 rounded-sm text-[#414141] border-[1px] border-[#d7ff55] hover:text-[#d7ff55] hover:bg-[#414141]">
          Download
        </button>
      </div>
      <div className="flex flex-col h-auto gap-[10rem] max-md:gap-0 max-sm:gap-[10rem] sm:gap-[10rem]">
        <figure className="w-[20rem] px-2 py-2 text-[#414141] h-auto transform translate-x-[-7rem] translate-y-0 -rotate-90 rounded-md flex flex-col justify-around items-start">
          <h1 className="text-4xl text-[#414141] font-extrabold uppercase">
            gamer spirits
          </h1>
          <p className="text-[#414141] uppercase font-bold text-xs">
            the hunt is on!!
          </p>
          <div className="text-[#414141] text-2xl w-full flex justify-between items-center">
            <p className="uppercase font-bold text-xl">Champions</p>
            <button className="flex gap-2 items-center bg-[#414141] text-[#d7ff55] text-xl px-1 py-1 rounded-md font-extrabold border-2 border-[#414141] hover:bg-transparent hover:text-[#414141]">
              <i className="fa-solid fa-square-share-nodes"></i>SHARE
            </button>
          </div>
        </figure>
        <button className="text-[15px] font-bold bg-[#414141] text-[#d7ff55] rounded-md py-2 hover:bg-transparent hover:text-[#414141] border-2 border-[#414141]">
          <p className="font-bold text-2xl -rotate-12">WWZ</p>
          Download
        </button>
      </div>
    </ul>
  );
};

export default Header;
