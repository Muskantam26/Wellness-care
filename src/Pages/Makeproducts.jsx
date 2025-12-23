import React from "react";

/* ===== IMAGE IMPORTS ===== */
import leaf from "../Images/leaf-icon.png";
import pImg from "../Images/p.png";
import p2Img from "../Images/p2.png";
import prImg from "../Images/pr.png";
import logo from "../Images/Wellnesslogo.jpg";

const Makeproducts = () => {
  return (
    <>
      <div className="relative max-w-300 mx-auto flex flex-col items-center px-4">

        {/* ===== HEADING ===== */}
        <div className="text-center">
          <p className="label inline-flex items-center gap-2">
            <img src={leaf} alt="" />
            Natural steps
          </p>
          <h1 className="text-[32px] lg:text-[45px] font-medium font-[Instrument Sans] mt-4">
            How We Create Our Products
          </h1>
        </div>

        {/* ===== MAIN CONTAINER ===== */}
        <div className="flex flex-col lg:flex-row justify-center items-center mt-10 lg:mt-20 gap-10 lg:relative">

          {/* LEFT */}
          <div className="flex flex-col gap-10 lg:gap-30 justify-left lg:-mr-10 order-2 lg:order-1">

            <div className="lg:rotate-[8.63deg] text-left">
              <h2 className="flex items-center text-[15px] font-semibold gap-2">
                <img src={leaf} className="w-7.5 h-5" />
                Selecting Pure Herbal Ingredients
              </h2>
              <hr className="border-t border-dashed border-[#B5B5B5] my-2" />
              <p className="flex text-[12px] text-[#4E4E4E] gap-2">
                <img src={pImg} className="w-9 h-15.25 lg:rotate-[8deg]" />
                We begin by carefully selecting high-quality herbs, roots, leaves,
                and seeds sourced from trusted growers.
              </p>
            </div>

            <div className="lg:rotate-[-0.63deg] text-left">
              <h2 className="text-[15px] font-semibold">
                🍃 Cleaning & Sorting With Care
              </h2>
              <hr className="border-t border-dashed border-[#B5B5B5] my-2" />
              <p className="flex text-[12px] text-[#4E4E4E] gap-2">
                <img src={pImg} className="w-7.5 h-12.5 lg:rotate-[8deg]" />
                Each herb goes through a gentle cleaning and sorting process.
              </p>
            </div>

            <div className="lg:rotate-[-8.63deg] text-left">
              <h2 className="text-[15px] font-semibold">
                🌾 Slow Grinding for Maximum Potency
              </h2>
              <hr className="border-t border-dashed border-[#B5B5B5] my-2" />
              <p className="flex text-[12px] text-[#4E4E4E] gap-2">
                <img src={pImg} className="w-7.5 h-12.5 lg:rotate-[8deg]" />
                Herbs are slowly ground to preserve natural oils and aroma.
              </p>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div
            className="hidden lg:block w-137.5 h-159.25 bg-no-repeat bg-center bg-contain relative order-1 lg:order-2"
            style={{ backgroundImage: `url(${prImg})` }}
          >
            <div className="absolute w-37.5 h-37.5 rounded-full bg-white top-[51%] left-[50%]
              -translate-x-1/2 -translate-y-1/2 shadow-[inset_6px_6px_16px_rgba(16,16,16,0.3),inset_-6px_-6px_16px_rgba(16,16,16,0.3)]">
              <img
                src={logo}
                alt=""
                className="w-22.5 h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-10 lg:gap-30 justify-center lg:-ml-10 order-3">

            <div className="lg:rotate-[-12.63deg] lg:text-right">
              <h2 className="text-[17px] font-bold">
                📦 Hygienic Packaging & Fresh Delivery
              </h2>
              <hr className="border-t border-dashed border-[#B5B5B5] my-2" />
              <p className="flex text-[13px] font-semibold gap-2">
                Products are hygienically packed to lock freshness.
                <img src={p2Img} className="w-9 h-15.25 lg:rotate-[-30deg]" />
              </p>
            </div>

            <div className="lg:rotate-[-1.63deg] lg:text-right">
              <h2 className="text-[18px] font-bold">
                🌡️ Controlled Processing for Stability
              </h2>
              <hr className="border-t border-dashed border-[#B5B5B5] my-2" />
              <p className="flex text-[14px] font-semibold gap-2">
                Herbs are processed under controlled conditions.
                <img src={p2Img} className="w-9 h-15.25 lg:rotate-[-30deg]" />
              </p>
            </div>

            <div className="lg:rotate-[12.63deg] lg:text-right">
              <h2 className="text-[18px] font-bold">
                ⚖️ Shaping with Precision & Care
              </h2>
              <hr className="border-t border-dashed border-[#B5B5B5] my-2" />
              <p className="flex text-[14px] font-semibold gap-2">
                Each product is carefully shaped and measured.
                <img src={p2Img} className="w-9 h-15.25 lg:rotate-[-30deg]" />
              </p>
            </div>

          </div>
        </div>

        {/* ===== BOTTOM ===== */}
        <div className="flex flex-col items-center mt-10">
          <h2 className="text-[18px] font-bold mb-2">
            🧪 Handcrafted Herbal Blending
          </h2>
          <hr className="border-t border-dashed border-[#B5B5B5] w-full lg:w-80 my-2" />
          <p className="flex items-center text-[12px] gap-2 text-center">
            <img src={pImg} className="w-9 h-15.25 lg:rotate-[-30deg]" />
            Our formulations are created in small batches with precision.
          </p>
        </div>

      </div>
    </>
  );
};

export default Makeproducts;
