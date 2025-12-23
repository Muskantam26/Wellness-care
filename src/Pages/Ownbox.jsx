/* IMPORTS */
import leaf from "../Images/leaf-icon.png";
import ownVideo from "../Images/grok-video-a21fed34-23fb-4aa9-a10e-3473efb1318f.mp4";

const Ownbox = () => {
  return (
    <div className="own-box md:mt-32">

      <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen overflow-hidden">

        {/* ===== VIDEO ===== */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full 
          -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src={ownVideo} type="video/mp4" />
        </video>

        {/* ===== GRADIENT OVERLAY ===== */}
        <div className="absolute inset-0 z-20 pointer-events-none 
        bg-linear-to-b from-white via-white/0 to-white"></div>

        {/* ===== PLAY ICON ===== */}
        <div className="absolute z-40 top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2 
        lg:left-auto lg:right-[33%] lg:translate-x-0 
        w-16 h-16 rounded-full bg-white flex items-center 
        justify-center cursor-pointer hover:scale-105 
        transition-transform duration-300">
          <span className="w-11 h-11 bg-[#CFA76C] rounded-full flex items-center justify-center">
            <i className="fa-solid fa-play text-white"></i>
          </span>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="absolute z-30 bottom-10 lg:top-[40%] 
        left-1/2 lg:left-[15%] transform 
        -translate-x-1/2 lg:translate-x-0 
        w-[90%] lg:w-[60%] text-white 
        text-center lg:text-left">

          <h3 className="flex items-center justify-center lg:justify-start 
          gap-2 font-semibold text-base lg:text-lg">
            <img src={leaf} alt="" className="w-5 h-5" />
            Build Your Own Box
          </h3>

          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl 
          lg:leading-tight mt-2">
            Green Living Starts with <br className="hidden lg:block" />
            Create Your Healthy Box
          </h1>

          <p className="text-xs md:text-sm lg:text-base mt-3 
          leading-relaxed max-w-3xl mx-auto lg:mx-0">
            Pick your favorite snacks and mixes. Choose 4, 6, or 8 items
            and build a box that fits your lifestyle perfectly.
            <br className="hidden lg:block" />
            Save more, enjoy more, and experience the fun of customizing
            your own healthy hamper.
          </p>

        </div>

      </div>
    </div>
  );
};

export default Ownbox;
