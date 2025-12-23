import React from "react";

import bgShape from "../Images/8e33cec9fc8e701b0f8ec05b007065840bdea97d.png";
import leafBg from "../Images/leaf.png";
import serviceImg from "../Images/service-img-1.webp.png";
import leafIcon from "../Images/leaf-icon.png";
import growthIcon from "../Images/738b376c32c3b5db95906df76dca15d115a40d62.png";
import organicIcon from "../Images/9f3deb59db4e3d2aa17e21006dad1b81932fd634.png";
import shopLeaf from "../Images/shopleaf.png";
import ourImg from "../Images/ourimg.png";

const Aboutus = () => {
  return (
    <section className="relative pt-16 lg:pt-[100px] px-6 lg:px-[80px] pb-[30px] bg-white overflow-hidden z-[2]">

      <img src={bgShape} className="hidden lg:block absolute w-[300px] left-[-100px] top-[-80px]" />
      <img src={leafBg} className="hidden lg:block absolute w-[300px] right-[-100px] top-[-80px] rotate-[-50deg]" />

      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[80px]">

        <div className="w-full lg:w-auto flex justify-center">
          <img
            src={serviceImg}
            className="w-[90%] sm:w-[350px] lg:w-[380px] h-auto lg:h-[550px] rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
          />
        </div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

          <p className="flex items-center gap-2 font-medium mb-[15px] lg:mr-[70%]">
            <img src={leafIcon} className="w-5" />
            About Wellness Plus
          </p>

          <h1 className="text-[32px] lg:text-[42px] mb-[25px]">
            Building a <span className="text-[rgba(59,183,126,1)]">Greener</span> Products
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 lg:gap-[100px] mb-[25px]">

            <div className="flex items-center gap-[10px] bg-[#f7f9f5] rounded-[30px] px-4">
              <img src={growthIcon} className="w-[50px] lg:w-[68px]" />
              <p><b>80%</b> Pure Growth</p>
            </div>

            <div className="flex items-center gap-[10px] bg-[#f7f9f5] rounded-[30px] px-4">
              <img src={organicIcon} className="w-[50px] lg:w-[68px]" />
              <p><b>95%</b> Organic Materials</p>
            </div>

          </div>

          <p className="text-[15px] lg:text-[16px] leading-[1.8] w-full lg:w-[780px]">
            Wellness Plus is a wellness-driven brand committed to improving everyday life through thoughtfully developed health, personal care, and lifestyle solutions.
          </p>

          <div className="flex gap-[15px] mt-[40px]">

            <div className="relative inline-flex items-center group">
              <img src={shopLeaf} className="w-[100px] absolute group-hover:translate-x-[40px]" />
              <button className="bg-[#315730] text-white px-8 py-[13px] rounded-[12px]">
                Shop Now
              </button>
            </div>

            <div className="relative inline-flex items-center group">
              <img src={ourImg} className="w-[100px] absolute rotate-[40deg] group-hover:translate-x-[40px]" />
              <button className="bg-[#FBDF7E] px-8 py-[13px] rounded-[12px]">
                Our Story
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
