import bgImage from "../Images/Wellnessperfume.png";
import leafIcon from "../Images/leaf-icon.png";
import foIcon from "../Images/fo.png";

const Founderstory = () => {
  return (
    <div
      className="relative min-h-screen lg:h-screen w-full overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `
          linear-gradient(
            to bottom,
            rgba(255,255,255,1) 0%,
            rgba(255,255,255,0) 10%,
            rgba(57,78,16,0.144) 40%,
            rgba(146,161,63,0.753) 90%,
            rgba(255,255,255,1) 100%
          ),
          url(${bgImage})
        `,
      }}
    >
      <div className="relative w-full max-w-[1100px] pt-[60px] lg:pt-[90px] text-center text-white mx-auto px-6">

        {/* LABEL */}
        <p className="flex items-center justify-center gap-[8px] text-[14px] lg:text-[15px]">
          <img src={leafIcon} className="w-[24px] lg:w-[28px]" alt="" />
          Founder Story
        </p>

        <h2 className="text-[32px] lg:text-[45px] font-semibold">
          The Heart Behind the Brand
        </h2>

        <p className="text-[16px] lg:text-[20px] font-semibold w-full lg:w-[600px] mx-auto mt-4">
          Wellness Plus began in a small home kitchen with one belief —
          healthy products should be simple, honest and accessible.
        </p>

        <div className="flex flex-col lg:flex-row justify-center gap-[30px] mt-[40px]">

          {[1,2,3,4,5].map((num) => (
            <div key={num} className="text-center text-white font-semibold">
              <img src={foIcon} className="h-[60px] mx-auto" alt="" />
              <span className="inline-flex items-center justify-center w-[60px] h-[45px] rounded-[40%] bg-[#DCE25A] text-[#394e10] mb-[10px]">
                {`0${num}`}
              </span>
              <p>
                {
                  [
                    "Health From the Earth",
                    "Rooted in Sustainable Goodness",
                    "Where Tradition Meets Technology",
                    "Baked for Shared Happiness",
                    "Seeds of Better Snacking",
                  ][num - 1]
                }
              </p>
            </div>
          ))}

        </div>

        <p className="text-[16px] lg:text-[20px] font-semibold w-full lg:w-[600px] mx-auto mt-10 pb-10">
          We wanted to bring back the flavors of childhood, the purity of local
          farms, and the warmth of homemade goodness.
        </p>

      </div>
    </div>
  );
};

export default Founderstory;
