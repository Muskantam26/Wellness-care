import React from "react";
import Navbar from "../components/navbar";

function Home() {
  return (
    <div className="p-2.5">
      <div
        className="min-h-[80vh] w-full rounded-[10px] bg-cover bg-center relative flex flex-col text-white 
        shadow-[inset_-8px_-8px_18px_2px_#10101030,inset_8px_8px_17px_1px_#10101030]"
        style={{ backgroundImage: "url('src/Images/wellnessgifhome.gif')" }}
      >
        <Navbar />

      
        <div className="mt-20 md:mt-50 mb-auto mx-6 md:ml-25 md:w-162.5 max-w-full">
          
          <p className="flex items-center text-[14px] md:text-[16px] mb-3.75 text-white">
            <img
              src="src/Images/leaf.svg fill.png"
              alt=""
              className="w-8 h-6 md:w-10 md:h-8 mr-2"
            />
            <span className="flex-1">
              No preservatives. No shortcuts. Just natural that brings comfort, energy, and joy.
            </span>
          </p>

          
          <h1 className="text-4xl md:text-[60px] font-semibold leading-[1.1] mb-5 text-white
          text-shadow-[2px_2px_10px_rgba(0,0,0,0.2)]">
            Rise Beyond Limits with <br className="hidden md:block" /> Wellness Plus
          </h1>

          <p className="text-[14px] md:text-[15px] mb-7.5 text-white max-w-[400px] md:max-w-none">
            A holistic wellness brand focused on health, personal care, and
            lifestyle products designed to support balanced and conscious living.
          </p>

          {/* BUTTONS */}
         
          <div className="flex flex-row md:flex-row gap-6 md:gap-5 pb-10">
            
            {/* SHOP */}
            <div className="relative inline-flex items-center group w-fit">
              <img
                src="src/Images/shopleaf.png"
                alt=""
                className="w-24 md:w-30 absolute transition-transform duration-400 ease-in-out
                 translate-x-[-10px] group-hover:translate-x-10"
              />
              <button className="bg-[#315730] text-white px-10 md:px-12.5 py-3 md:py-3.25 rounded-xl border-none cursor-pointer">
                <p className="transition-transform duration-400 ease-in-out
                 translate-x-[30px] group-hover:-translate-x-10">
                  Shop Now
                </p>
              </button>
            </div>

            {/* STORY */}
            <div className="relative inline-flex items-center group w-fit ">
              <img
                src="src/Images/ourimg.png"
                alt=""
                className="w-[100px] md:w-[120px] absolute rotate-[40deg] transition-transform duration-400 ease-in-out
                 translate-x-[-10px] group-hover:translate-x-[40px]"
              />
              <button className="bg-[#FBDF7E] text-[#2d3748] px-[40px] md:px-[50px] py-[11px] md:py-[13px] rounded-[12px] border-none cursor-pointer">
                <p className="transition-transform duration-400 ease-in-out
                 translate-x-[30px] group-hover:-translate-x-[40px]">
                  Our Story
                </p>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;