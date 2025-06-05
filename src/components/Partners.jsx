import React from 'react'
import offerImage from "../images/offer.png"; // Make sure this import 
import logo1 from "../images/logo1.svg"; // Make sure this import 
import logo2 from "../images/logo2.svg"; // Make sure this import 
import logo3 from "../images/logo3.svg"; // Make sure this import 
import logo4 from "../images/logo4.svg"; // Make sure this import 
import logo5 from "../images/logo5.svg"; // Make sure this import 
import TextWithShape from './Text';
import CommonP from './CommonP';

const Partners = () => {
    const logos =[
        {logo:logo1},
        {logo:logo2},
        {logo:logo3},
        {logo:logo4},
        {logo:logo5},
    ]
  return (
    <div
      className=" w-full h-[400px] md:h-[500px] lg:h-[550px]  flex flex-col items-center justify-center gap-[40px]  px-[72px]" // adjust height as needed
      style={{
        backgroundImage: `url(${offerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="pt-5 flex flex-col items-center ">
        <CommonP text={"our partners"} />
        <h1 className="text-[50px] font-[400] text-black">
          OUR <TextWithShape text={"trusted"} />
          PARTNERS
        </h1>
        <p className="text-[18px] font-[400] text-[#929292] mt-6 text-center">
          Proudly partnered with top travel brands, airlines, and resorts to
          bring you the best <br />
          summer experiences.
        </p>
      </div>
      <div className="overflow-hidden w-full">
        <div className="marquee flex gap-10">
          {[...logos, ...logos].map((item, index) => (
            <div
              key={index}
              className="bg-[#FDFDFD] px-[40px] py-[25px] flex items-center justify-center border border-[#DEDEDE] rounded-[90px] min-w-[200px]"
            >
              <img src={item.logo} alt="logo" className="w-[130px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners