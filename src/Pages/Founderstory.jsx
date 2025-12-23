const Founderstory = () => {
  return (
    <>
      <div
        className="relative min-h-screen lg:h-screen w-full overflow-hidden bg-cover bg-center
        bg-[linear-gradient(to_bottom,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_10%,rgba(57,78,16,0.144)_40%,rgba(146,161,63,0.753)_90%,rgba(255,255,255,1)_100%),url('src/Images/Wellnessperfume.png')]"
      >
     
        <div className="relative w-full max-w-[1100px] pt-[60px] lg:pt-[90px] text-center text-white mx-auto lg:left-[200px] lg:mx-0 px-6">

          {/* LABEL */}
          <p className="flex items-center justify-center gap-[8px] text-[14px] lg:text-[15px] tracking-[1px]">
            <img src="src/Images/leaf.svg fill.png" alt="" className="w-[24px] lg:w-[28px]" />
            Founder Story
          </p>

          {/* HEADING */}
          <h2 className="text-[32px] lg:text-[45px] font-semibold leading-[1.2]">
            The Heart Behind the Brand
          </h2>

          {/* DESCRIPTION */}
       
          <p className="text-[16px] lg:text-[20px] font-semibold lg:leading-[30px] tracking-[-0.5px] lg:tracking-[-1px]
            w-full lg:w-[600px] mt-4 lg:mt-0 lg:ml-[30px] relative lg:left-[270px] lg:top-[10px]">
            Wellness Plus began in a small home kitchen with one belief —
            healthy products should be simple, honest and accessible.
          </p>

          {/* POINTS */}
        
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-[30px] lg:gap-[10px] mt-[40px] lg:mt-[20px] pb-10 lg:pb-0">

            {/* 01 */}
            <div className="relative text-center text-white text-[17px] lg:text-[19px] font-semibold lg:left-[50px] lg:top-[150px]">
              <img src="src/Images/fo.png" alt="" className="h-[60px] lg:h-[70px] w-auto mx-auto lg:relative lg:left-[70px]" />
              <span className="inline-flex items-center justify-center w-[60px] h-[45px] lg:w-[65px] lg:h-[50px] rounded-[40%] bg-[#DCE25A] text-[#394e10] mb-[10px] font-semibold">
                01
              </span>
              <p>Health From the Earth</p>
            </div>

            {/* 02 */}
            <div className="relative text-center text-white text-[17px] lg:text-[19px] font-semibold lg:top-[50px]">
              <img src="src/Images/fo.png" alt="" className="h-[60px] lg:h-[70px] w-auto mx-auto lg:relative lg:left-[70px]" />
              <span className="inline-flex items-center justify-center w-[60px] h-[45px] lg:w-[65px] lg:h-[50px] rounded-[40%] bg-[#DCE25A] text-[#394e10] mb-[10px] font-semibold">
                02
              </span>
              <p>Rooted in Sustainable Goodness</p>
            </div>

            {/* 03 */}
            <div className="relative text-center text-white text-[17px] lg:text-[19px] font-semibold lg:top-[-40px]">
              <img src="src/Images/fo.png" alt="" className="h-[60px] lg:h-[70px] w-auto mx-auto lg:relative lg:left-[70px]" />
              <span className="inline-flex items-center justify-center w-[60px] h-[45px] lg:w-[65px] lg:h-[50px] rounded-[40%] bg-[#DCE25A] text-[#394e10] mb-[10px] font-semibold">
                03
              </span>
              <p>Where Tradition Meets Technology</p>
            </div>

            {/* 04 */}
            <div className="relative text-center text-white text-[17px] lg:text-[19px] font-semibold lg:top-[50px]">
              <img src="src/Images/fo.png" alt="" className="h-[60px] lg:h-[70px] w-auto mx-auto lg:relative lg:left-[70px]" />
              <span className="inline-flex items-center justify-center w-[60px] h-[45px] lg:w-[65px] lg:h-[50px] rounded-[40%] bg-[#DCE25A] text-[#394e10] mb-[10px] font-semibold">
                04
              </span>
              <p>Baked for Shared Happiness</p>
            </div>

            {/* 05 */}
            <div className="relative text-center text-white text-[17px] lg:text-[19px] font-semibold lg:left-[20px] lg:top-[150px]">
              <img src="src/Images/fo.png" alt="" className="h-[60px] lg:h-[70px] w-auto mx-auto lg:relative lg:left-[70px]" />
              <span className="inline-flex items-center justify-center w-[60px] h-[45px] lg:w-[65px] lg:h-[50px] rounded-[40%] bg-[#DCE25A] text-[#394e10] mb-[10px] font-semibold">
                05
              </span>
              <p>Seeds of Better Snacking</p>
            </div>
          </div>

         
          <p className="text-[16px] lg:text-[20px] font-semibold lg:leading-[30px] tracking-[-0.5px] lg:tracking-[-1px]
            w-full lg:w-[600px] mt-10 lg:mt-0 lg:ml-[30px] relative lg:left-[270px] lg:top-[60px] pb-10">
            We wanted to bring back the flavors of childhood, the purity of local
            farms, and the warmth of homemade goodness.
          </p>

        </div>
      </div>
    </>
  );
};

export default Founderstory;