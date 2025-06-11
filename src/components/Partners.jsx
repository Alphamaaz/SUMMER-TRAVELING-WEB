import React from "react";
import offerImage from "../images/offer.png";
import logo1 from "../images/logo1.svg";
import logo2 from "../images/logo2.svg";
import logo3 from "../images/logo3.svg";
import logo4 from "../images/logo4.svg";
import logo5 from "../images/logo5.svg";
import TextWithShape from "./Text";
import CommonP from "./CommonP";

const Partners = () => {
  const logos = [
    { logo: logo1 },
    { logo: logo2 },
    { logo: logo3 },
    { logo: logo4 },
    { logo: logo5 },
    { logo: logo1 },
    { logo: logo2 },
    { logo: logo3 },
    { logo: logo4 },
    { logo: logo5 },
    { logo: logo1 },
    { logo: logo2 },
    { logo: logo3 },
    { logo: logo4 },
    { logo: logo5 },
    { logo: logo1 },
    { logo: logo2 },
    { logo: logo3 },
    { logo: logo4 },
    { logo: logo5 },
  ];

  // Duplicate the logos array to create seamless looping
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div
      className="w-full h-[400px] md:h-[500px] lg:h-[550px] flex flex-col items-center justify-center gap-[40px] px-[30px] md:px-[72px]"
      style={{
        backgroundImage: `url(${offerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      
      <div className="pt-5 flex flex-col items-center">
        <CommonP text={"our partners"} />
        <h1 className="text-[24px] min-[400px]:text-[30px] md:text-[50px] font-[400] text-black">
          OUR <TextWithShape text={"trusted"} />
          PARTNERS
        </h1>
        <p className="text-[15px] md:text-[18px] font-[400] text-[#929292] mt-6 text-center">
          Proudly partnered with top travel brands, airlines, and resorts to
          bring you the best <br />
          summer experiences.
        </p>
      </div>
      <div className="overflow-hidden w-full relative">
        <div className="marquee flex gap-5 md:gap-10">
          {[...logos, ...logos, ...logos, ...logos].map((item, index) => (
            <div
              key={index}
              className="bg-[#FDFDFD] px-[8px] md:px-[40px] py-[8px] md:py-[25px] flex items-center justify-center border border-[#DEDEDE] rounded-[90px] min-w-[200px] flex-shrink-0"
            >
              <img src={item.logo} alt="logo" className="w-[100px] md:w-[130px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
