const Makeproducts = () => {
  return (
    <>
      <div className="relative max-w-300 mx-auto  flex flex-col items-center px-4
      ">

        {/* ===== HEADING ===== */}
        <div className="text-center">
          <p className="label  inline-flex items-center gap-2">
            <img src="src/Images/leaf.svg fill.png" alt="" />
            Natural steps
          </p>
          <h1 className="text-[32px] lg:text-[45px] font-medium font-[Instrument Sans] mt-4">
            How We Create Our Products
          </h1>
        </div>

        {/* ===== MAIN CONTAINER ===== */}
        <div className="flex flex-col lg:flex-row justify-center items-center mt-10 lg:mt-20 gap-10 lg:relative">

        
          <div className="flex flex-col gap-10 lg:gap-30 justify-left lg:-mr-10 order-2 lg:order-1">
            {/* 1 */}
            <div className="lg:transform lg:rotate-[8.63deg] text-left">
              <h2 className="flex items-center text-[15px] font-semibold font-[Instrument Sans] text-[#181818] gap-2 justify-left">
                <img src="src/Images/leaf.svg fill.png" className="w-7.5 h-5" />
                Selecting Pure Herbal Ingredients
              </h2>
              <hr className="border-t border-dashed border-[#B5B5B5] my-2"/>
              <p className="flex text-[12px] text-[#4E4E4E] leading-4.5 font-[Nunito Sans] gap-2 lg:justify-end w-full lg:w-90">
                <img src="src/Images/p.png" className="w-9 h-15.25 lg:rotate-[8deg]" />
               We begin by carefully selecting high-quality herbs, roots, leaves, and seeds sourced from trusted growers who follow natural and sustainable farming practices.
              </p>
            </div>

            {/* 2 */}
            <div className="lg:transform lg:rotate-[-0.63deg] text-left">
              <h2 className="text-[15px] font-semibold text-[#181818]">🍃 Cleaning & Sorting With Care</h2>
              <hr className="border-t border-dashed border-[#B5B5B5] my-2"/>
              <p className="flex text-[12px] text-[#4E4E4E] gap-2 lg:justify-end">
                <img src="src/Images/p.png" className="w-7.5 h-12.5 lg:rotate-[8deg]" />
               Each herb goes through a gentle cleaning and sorting process to remove impurities while preserving its natural properties.
              </p>
            </div>

            {/* 3 */}
            <div className="lg:transform lg:rotate-[-8.63deg] text-left">
              <h2 className="text-[15px] font-semibold text-[#181818]">🌾 Slow Grinding for Maximum Potency</h2>
              <hr className="border-t border-dashed border-[#B5B5B5] my-2"/>
              <p className="flex text-[12px] text-[#4E4E4E] gap-2 lg:justify-end">
                <img src="src/Images/p.png" className="w-7.5 h-12.5 lg:rotate-[8deg]" />
                 Herbs are slowly ground using controlled methods to preserve their natural oils, aroma, and active compounds.
              </p>
            </div>
          </div>

       
          <div
            className="hidden lg:block w-137.5 h-159.25 bg-no-repeat bg-center bg-contain relative order-1 lg:order-2"
            style={{ backgroundImage: "url(src/Images/pr.png)" }}
          >
            <div className="absolute w-37.5 h-37.5 rounded-full bg-white top-[51%] left-[50%] -translate-x-1/2 -translate-y-1/2
              shadow-[inset_6px_6px_16px_rgba(16,16,16,0.3),inset_-6px_-6px_16px_rgba(16,16,16,0.3)]">
              <img
                src="src/Images/Wellness logo.jpg"
                alt=""
                className="w-22.5 h-20 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>

          <div className="flex flex-col gap-10 lg:gap-30 justify-center lg:-ml-10 order-3">
            {/* 4 */}
            <div className="lg:transform lg:rotate-[-12.63deg] lg:text-right w-full lg:w-130">
              <h2 className="text-[17px] font-bold text-[#181818]">📦 Hygienic Packaging & Fresh Delivery</h2>
              <hr className="border-t border-dashed border-[#B5B5B5] my-2"/>
              <p className="flex text-[13px] font-semibold text-[#4E4E4E] gap-2">
              Once prepared, products are hygienically packed to lock in freshness and quality. Every package is designed to protect the product and deliver it safely while maintaining its herbal integrity.
                <img src="src/Images/p2.png" className="w-9 h-15.25 lg:rotate-[-30deg]" />
              </p>
            </div>

            {/* 5 */}
            <div className="lg:transform lg:rotate-[-1.63deg] lg:text-right w-full lg:w-130">
              <h2 className="text-[18px] font-bold text-[#181818]">🌡️ Controlled Processing for Stability</h2>
              <hr className="border-t border-dashed border-[#B5B5B5] my-2"/>
              <p className="flex text-[14px] font-semibold text-[#4E4E4E] gap-2">
              Herbal products are processed under carefully controlled conditions to protect their natural benefits. This ensures the herbs remain effective, stable, and suitable for long-term use.
                <img src="src/Images/p2.png" className="w-9 h-15.25 lg:rotate-[-30deg]" />
              </p>
            </div>

            {/* 6 */}
            <div className="lg:transform lg:rotate-[12.63deg] lg:text-right w-full lg:w-130">
              <h2 className="text-[18px] font-bold text-[#181818]">⚖️ Shaping with Precision & Care</h2>
              <hr className="border-t border-dashed border-[#B5B5B5] my-2"/>
              <p className="flex text-[14px] font-semibold text-[#4E4E4E] gap-2">
              Each product is carefully shaped, measured, or formulated to ensure uniformity and quality. This step ensures that every unit meets our standards for purity, safety, and performance.
                <img src="src/Images/p2.png" className="w-9 h-15.25 lg:rotate-[-30deg]" />
              </p>
            </div>
          </div>
        </div>

        {/* ===== CENTER BOTTOM STEP ===== */}
        <hr className="hidden lg:block border-t border-dashed border-[#171515] w-20 my-0 rotate-90"/>
        <div className="flex flex-col items-center mt-10 lg:mt-2">
          <h2 className="text-[18px] font-bold text-[#181818] mb-2">🧪 Handcrafted Herbal Blending</h2>
          <hr className="border-t border-dashed border-[#B5B5B5] w-full lg:w-80 my-2"/>
          <p className="flex flex-row lg:flex-row items-center text-[12px] text-[#4E4E4E] gap-2 justify-center w-full lg:w-130 text-center lg:text-left">
            <img src="src/Images/p.png" className="w-9 h-15.25 lg:rotate-[-30deg]" />
            Our formulations are created in small batches by blending herbs in precise proportions. This handcrafted approach ensures balance, consistency, and effectiveness in every product while respecting traditional wellness practices.
          </p>
        </div>

      </div>
    </>
  );
};

export default Makeproducts;