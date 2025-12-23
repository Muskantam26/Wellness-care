import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Products = () => {
useEffect(() => {
  AOS.init({
    duration: 800,
    easing: "ease-out-cubic",
    once: false,     
    offset: 80,     
  });
}, []);


  return (
    <>
      <div className="p-main px-4">
        <div className="block text-center">
          {/* Adjusted: mt-[130px] for desktop, reduced for mobile */}
          <p className="label mt-20 lg:mt-32.5 flex justify-center items-center gap-2">
            <img src="src/Images/leaf.svg fill.png" alt="" />
            Our Products
          </p>

          <h1 className="text-3xl lg:text-[45px] font-medium font-['Instrument Sans'] text-center">
            Explore Our Naturally Crafted Products
          </h1>

          <span className="block text-[12px] font-medium text-[#4E4E4E] font-['Instrument Sans'] max-w-150 mx-auto">
            Wholesome flavors, clean ingredients, and honest craftsmanship — designed to nourish every moment of your day.
          </span>
        </div>

        {/* GRID - Adjusted: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-5 justify-items-center items-start max-w-300 mx-auto mt-12.5 mb-20">

          {[
            "c1330f2e195a04f106c5e47898effdba3c638d41.png",
            "a0eacad4c1bd6bd4b5317c45bdce39c7db1065b7.png",
            "39fe2a128e5cfeb9fb56c6fd4e15b78715a3747b.png",
            "750c6ae880a381c014fd60f671557d74306702ad.png",
            "e41711179454d1e855b77c3e10aca17477d278eb.png",
            "796fdc976c22516a565e0570bb8ea99d418a2d05.png",
          ].map((img, i) => (
            
            <div
              key={i}
             data-aos="zoom-in-up"

               data-aos-delay={i * 120}
              className="w-full max-w-90 h-140 bg-white rounded-[10px] relative shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1.5"
            >
              {/* CARD NO */}
              <span className="absolute top-6.25 right-7.5 text-[24px] font-semibold text-white">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="w-full pt-6.25 px-7.5">
                <img
                  src={`src/Images/${img}`}
                  alt="product"
                  className="w-full h-70 rounded-[15px] object-cover block mx-auto"
                />
              </div>

              {/* TEXT */}
              <h3 className="mt-3.5 mx-7.75 mb-1.5 text-[26px] font-semibold text-black font-['Instrument Sans']">
                Name
              </h3>

              <p className="mx-7.75 text-[15px] font-semibold leading-[1.45] text-[#4E4E4E]">
                Lorem Ipsum is simply dummy. Lorem Ipsum has been the industry's standard dummy.
              </p>

            <div className="relative flex justify-center mt-6">
  <div className="relative inline-flex items-center group">
    <img
      src="src/Images/shopleaf.png"
      alt=""
      className="w-24 md:w-30 absolute transition-transform duration-400 ease-in-out
      -translate-x-2.5 group-hover:translate-x-10"
    />

    <button className="bg-[#315730] text-white px-10 md:px-12.5 py-3 md:py-3.25 rounded-xl border-none cursor-pointer">
      <p className="transition-transform duration-400 ease-in-out
      translate-x-7.5 group-hover:-translate-x-10">
        View more
      </p>
    </button>
  </div>
</div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;