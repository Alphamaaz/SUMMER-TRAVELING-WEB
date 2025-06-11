import React from "react";
import offerImage from "../images/offer.png"; // Make sure this import 
import img1 from '../images/offer1.jpg'; 
import img2 from '../images/offer2.jpg';
import img3 from '../images/offer3.jpg';
import img4 from '../images/offer4.jpg';
import line from '../images/line.svg';
import v_line from '../images/v_line.svg';
import CommonP from "./CommonP";
import TextWithShape from "./Text";
import { ChevronRight } from 'lucide-react';

const Offer = () => {
  return (
    <div
      className="relative w-full  flex items-center md:items-start justify-center md:gap-[100px] px-[30px] md:px-[72px] pb-4" // adjust height as needed
      style={{
        backgroundImage: `url(${offerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* left section  */}
      <div className="flex flex-col flex-1 md:max-w-[690px] items-center md:items-start mt-[50px] md:mt-[100px]">
        <CommonP text={"go and discover"} />
        <h1 className="text-[30px] md:text-[60px] text-black font-[400] mt-2 uppercase ">
          get <TextWithShape text={"special "} />
          offer
        </h1>
        <div className="md:hidden relative grid grid-cols-2 gap-6 sm:gap-10 md:gap-14 w-full max-w-[600px] mx-auto py-6 md:py-10 mt-3">
          {/* Decorative lines - hidden on mobile */}
          <img
            src={line}
            alt="line"
            className="hidden md:block w-[300px] md:w-[480px] absolute top-[50%] right-[10%]"
          />
          <img
            src={v_line}
            alt="line"
            className="hidden md:block w-[2px] absolute top-[20%] right-[50%]"
          />

          {/* Top Left Image */}
          <img
            src={img1}
            alt="Top Left"
            className="rounded-br-[30px] sm:rounded-br-[50px] md:rounded-br-[100px] object-cover w-full h-[120px] sm:h-[160px] md:h-[220px]"
          />

          {/* Top Right Image */}
          <img
            src={img2}
            alt="Top Right"
            className="rounded-bl-[30px] sm:rounded-bl-[50px] md:rounded-bl-[100px] object-cover w-full h-[120px] sm:h-[160px] md:h-[220px]"
          />

          {/* Bottom Left Image */}
          <img
            src={img3}
            alt="Bottom Left"
            className="rounded-tr-[30px] sm:rounded-tr-[50px] md:rounded-tr-[100px] object-cover w-full h-[120px] sm:h-[160px] md:h-[220px]"
          />

          {/* Bottom Right Image */}
          <img
            src={img4}
            alt="Bottom Right"
            className="rounded-tl-[30px] sm:rounded-tl-[50px] md:rounded-tl-[100px] object-cover w-full h-[120px] sm:h-[160px] md:h-[220px]"
          />

          {/* Center Discount Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-700 text-white w-20 h-20 sm:w-28 sm:h-28 md:w-[134px] md:h-[134px] rounded-full flex items-center justify-center z-10">
            <div className="rotation flex justify-center items-center relative">
              <span className="absolute text-xs sm:text-sm md:text-[18px] font-[400] top-4 sm:top-6 md:top-7 right-4 sm:right-6 md:right-8">
                %
              </span>
              <div className="flex gap-1 sm:gap-2 items-center justify-center">
                <span className="text-2xl sm:text-4xl md:text-[50px] font-[700] leading-[1]">
                  40
                </span>
                <span className="text-xs sm:text-sm md:text-[18px] font-[400] mt-1 sm:mt-2">
                  Off
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-[18px] text-[15px] text-[#929292] text-center md:text-start font-[400] mt-3 md:mt-9">
          Limited-time offers on beach getaways, island escapes, and adventure
          tours—book your sunny escape now!
        </p>
        <button className="flex items-center justify-center w-[90%] md:w-fit gap-2 bg-[#00866B] text-[16px] text-white font-[600] px-[20px] md:px-[30px]  py-3 md:py-4 mt-10 rounded-[90px] hover:bg-[#FF870F] transition-colors duration-300">
          Explore more <ChevronRight />
        </button>
      </div>

      {/* right section  */}
      <div>
        <div className="hidden relative md:grid grid-cols-2 gap-14 max-w-[600px] mx-auto py-10 px-4 ">
          {/* Top Left Image */}
          <img
            src={line}
            alt="line"
            className="w-[480px] absolute top-[50%] right-[10%]"
          />
          <img
            src={v_line}
            alt="line"
            className="w-[2px] absolute top-[20%] right-[50%]"
          />
          <img
            src={img1}
            alt="Top Left"
            className="rounded-br-[100px] object-cover w-full h-[220px]"
          />

          {/* Top Right Image */}
          <img
            src={img2}
            alt="Top Right"
            className="rounded-bl-[100px] object-cover w-full h-[220px]"
          />

          {/* Bottom Left Image */}
          <img
            src={img3}
            alt="Bottom Left"
            className="rounded-tr-[100px] object-cover w-full h-[220px]"
          />

          {/* Bottom Right Image */}
          <img
            src={img4}
            alt="Bottom Right"
            className="rounded-tl-[100px] object-cover w-full h-[220px]"
          />

          {/* Center Discount Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-700 text-white w-[134px] h-[134px]  rounded-full flex  items-center justify-center z-10">
            <div className="rotation  flex  justify-center items-center rletive">
              <span className=" absolute text-[18px] font-[400] top-7 right-8">
                %
              </span>
              <div className="flex gap-2 items-center justify-center ">
                <span className="text-[50px] font-[700] leading-[1]">40</span>
                <span className="text-[18px] font-[400] mt-2">Off</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
