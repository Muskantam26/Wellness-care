const Aboutus = () => {
  return (
    <>
     
      <section className="relative pt-16 lg:pt-[100px] px-6 lg:px-[80px] pb-[30px] bg-white overflow-hidden lg:overflow-visible z-[2]">

        <img
          src="src/Images/8e33cec9fc8e701b0f8ec05b007065840bdea97d.png"
          alt=""
          className="hidden lg:block absolute w-[300px] left-[-100px] top-[-80px]"
        />

        <img
          src="src/Images/leaf.png"
          alt=""
          className="hidden lg:block absolute w-[300px] right-[-100px] top-[-80px] rotate-[-50deg]"
        />

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[80px]">

          <div className="w-full lg:w-auto flex justify-center">
            <img
              src="src/Images/service-img-1.webp.png"
              alt="Product"
              className="w-[90%] sm:w-[350px] lg:w-[380px] h-auto lg:h-[550px] rounded-[20px] object-fill object-center shadow-[0_20px_50px_rgba(0,0,0,0.1)] lg:ml-[50px]"
            />
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

            <p className="flex items-center gap-2 font-medium mb-[15px] lg:mr-[70%]">
              <img src="src/Images/leaf.svg fill.png" alt="" />
              About Wellness Plus
            </p>

            <h1 className="text-[32px] lg:text-[42px] leading-[1.2] mb-[25px] 
              [text-shadow:0px_0px_4px_rgba(0,0,0,0.25),0px_4px_4px_rgba(0,0,0,0.25)]">
              Building a <span className="text-[rgba(59,183,126,1)]">Greener</span> Products
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-[100px] mb-[25px] w-full justify-center lg:justify-start">

              <div className="flex items-center gap-[10px] bg-[#f7f9f5] rounded-[30px] px-4">
                <img
                  src="src/Images/738b376c32c3b5db95906df76dca15d115a40d62.png"
                  alt=""
                  className="w-[50px] lg:w-[68px] h-auto"
                />
                <p className="font-[Instrument Sans] font-medium text-[16px] lg:text-[19px] leading-[40px]">
                  <b>80%</b> Pure Growth
                </p>
              </div>

              <div className="flex items-center gap-[10px] bg-[#f7f9f5] rounded-[30px] px-4">
                <img
                  src="src/Images/9f3deb59db4e3d2aa17e21006dad1b81932fd634.png"
                  alt=""
                  className="w-[50px] lg:w-[68px] h-auto"
                />
                <p className="font-[Instrument Sans] font-medium text-[16px] lg:text-[19px] leading-[40px]">
                  <b>95%</b> Organic Materials
                </p>
              </div>

            </div>

       
            <p className="font-[Inter] text-[15px] lg:text-[16px] leading-[1.8] lg:leading-[35.61px] tracking-[-1%] text-justify lg:text-justify w-full lg:w-[780px] text-[rgba(29,31,30,1)]">
              Wellness Plus is a wellness-driven brand committed to improving everyday life through thoughtfully developed health, personal care, and lifestyle solutions. <br className="hidden lg:block" />
              Our goal is to support individuals in their journey toward a healthier, more confident, and more balanced lifestyle. Every product is created with care, keeping quality, consistency, and well-being at the core.
              We believe wellness is not a destination—it’s a way of living.
            </p>

         
            <div className="flex flex-wrap justify-center lg:justify-start gap-[15px] mt-[40px] lg:mt-[30px]">

              <div className="relative inline-flex items-center group">
                <img
                  src="src/Images/shopleaf.png"
                  alt=""
                  className="w-[100px] lg:w-[120px] absolute transition-transform duration-400 ease-in-out
                  group-hover:translate-x-[40px]"
                />
                <button className="bg-[#315730] text-white px-8 lg:px-[50px] py-[13px] rounded-[12px] border-none cursor-pointer">
                  <span className="relative z-10 block transition-transform duration-400 ease-in-out group-hover:-translate-x-[40px]">
                    Shop Now
                  </span>
                </button>
              </div>

              <div className="relative inline-flex items-center group">
                <img
                  src="src/Images/ourimg.png"
                  alt=""
                  className="w-[100px] lg:w-[120px] absolute rotate-[40deg] transition-transform duration-400 ease-in-out
                  group-hover:translate-x-[40px]"
                />
                <button className="bg-[#FBDF7E] text-[#2d3748] px-8 lg:px-[50px] py-[13px] rounded-[12px] border-none cursor-pointer">
                  <span className="relative z-10 block transition-transform duration-400 ease-in-out group-hover:-translate-x-[40px]">
                    Our Story
                  </span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;