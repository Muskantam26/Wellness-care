import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

/*  IMAGE IMPORTS */
import leaf from "../Images/leaf.svg fill.png";
import l2 from "../Images/l2.png";
import ourimg from "../Images/ourimg.png";
import three from "../Images/three.png";

const OurStory = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <div className="px-6 py-12 lg:px-50 lg:py-25 overflow-y-auto overflow-x-hidden">

      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-15">

        {/* LEFT CONTENT */}
        <div className="flex-[1.2]">
          <p className="flex items-center gap-2 font-semibold relative lg:-left-2.5">
            <img src={leaf} alt="" className="w-7" />
            Our Story (The Journey)
          </p>

          <h1 className="text-4xl md:text-[52px] font-semibold leading-[1.2] mt-4 lg:-mt-20">
            A <span className="text-[#90C52D]">Story</span>

            <span className="relative inline-block w-17.5 h-25 lg:w-22.5 lg:h-35">
              <img
                src={l2}
                alt=""
                className="absolute w-25 lg:w-35 top-10 lg:top-22.5 -left-5 animate-float"
              />
              <img
                src={l2}
                alt=""
                className="absolute w-25 lg:w-35 top-10 lg:top-22.5 -left-1.25 rotate-25 animate-float delay-[0.8s]"
              />
            </span>

            <span className="relative inline-block w-17.5 h-25 lg:w-22.5 lg:h-35 -ml-2.5 lg:-ml-5">
              <img
                src={ourimg}
                alt=""
                className="absolute w-25 lg:w-35 top-10 lg:top-22.5 -left-5 animate-float"
              />
              <img
                src={ourimg}
                alt=""
                className="absolute w-25 lg:w-35 top-10 lg:top-22.5 -left-2.5 rotate-[-20deg] animate-float delay-[1.2s]"
              />
            </span>

            Rooted in Earth, Culture, and Care.
          </h1>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 mt-6 lg:mt-20">
          <h3 className="text-[20px] lg:text-[22px] font-semibold text-[#4E4E4E] relative lg:-top-7.5">
            We <span className="text-[#FDB900]">promise</span> to honor the land that gives us everything.
          </h3>

          <p className="text-[14px] leading-5.5 lg:leading-5 text-[#6A6A6A] relative lg:-top-7.5 mt-2">
            From partnering with responsible farmers to choosing grains that enrich the soil,
            we stay committed to practices that support nature rather than exploit it.
          </p>
        </div>
      </div>

      {/* BUTTON */}
      <div className="relative flex justify-center lg:justify-start lg:left-120 lg:top-5 items-center group mt-16 lg:mt-10">
        <img
          src={ourimg}
          alt=""
          className="absolute w-25 lg:w-30 transition-transform duration-400 ease-in-out group-hover:translate-x-10 z-0"
        />

        <img
          src={ourimg}
          alt=""
          className="w-25 md:w-30 absolute rotate-40 transition-transform duration-400 ease-in-out
          -translate-x-10 group-hover:translate-x-10"
        />

        <button className="bg-[#FBDF7E] text-[#2d3748] px-10 md:px-12.5 py-2.75 md:py-3.25 rounded-xl">
          <p className="transition-transform duration-400 ease-in-out translate-x-7.5 group-hover:-translate-x-10">
            Our Story
          </p>
        </button>
      </div>

      {/* THREE CARDS */}
      <div className="flex flex-col lg:flex-row gap-20 lg:gap-5 mt-25 lg:mt-7.5 items-center">

        {/* CARD 1 */}
        <div className="border border-[#768653] rounded-[20px] h-100 w-full max-w-103.25 relative" data-aos="zoom-in">
          <div className="relative">
            <img src={ourimg} alt="" className="relative -top-15 -left-3.75" />
            <img src={ourimg} alt="" className="absolute -top-27.5 -left-6.75" />
          </div>
          <h1 className="text-[60px] lg:text-[70px] font-semibold relative -top-37.5 left-5">The</h1>
          <p className="text-[21px] font-medium relative -top-42.5 left-5">Beginning</p>
          <span className="block text-[12px] leading-5.75 font-medium text-[#4E4E4E]
          relative -top-62.5 ml-37.5 lg:ml-47.5 pr-4 text-justify lg:-left-3.75">
            It all started with a simple thought — why has real, healthy food become rare?
          </span>
        </div>

        {/* CARD 2 */}
        <div className="border border-[#768653] rounded-[20px] h-87.5 w-full max-w-103.25 mt-20 lg:mt-25 relative"
          data-aos="zoom-in" data-aos-delay="150">
          <div className="relative">
            <img src={l2} alt="" className="relative -top-22.5 rotate-[-60deg] w-full lg:w-100 h-72.5" />
            <img src={l2} alt="" className="absolute -top-35 -left-3 rotate-[-60deg] w-full lg:w-100 h-72.5" />
          </div>
          <h1 className="text-[60px] lg:text-[70px] font-semibold relative -top-37.5 left-5">The</h1>
          <p className="text-[21px] font-medium relative -top-42.5 left-5">Mission</p>
        </div>

        {/* CARD 3 */}
        <div className="border border-[#768653] rounded-[20px] h-100 w-full max-w-103.25 relative mt-20 lg:mt-0"
          data-aos="zoom-in" data-aos-delay="300">
          <img src={three} alt="" className="relative left-10 lg:left-17.5 -top-25" />
          <h1 className="text-[60px] lg:text-[70px] font-semibold relative -top-37.5 left-5">The</h1>
          <p className="text-[21px] font-medium relative -top-42.5 left-5">Craft</p>
        </div>

      </div>
    </div>
  );
};

export default OurStory;
