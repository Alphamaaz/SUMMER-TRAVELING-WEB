import React from "react";
import offerImage from "../images/offer.png"; // Make sure this import 
import img1 from '../images/offer1.jpg'; 
import img2 from '../images/offer2.jpg';
import img3 from '../images/offer3.jpg';
import img4 from '../images/offer4.jpg';
import CommonP from "./CommonP";
import TextWithShape from "./Text";
import { ChevronRight } from 'lucide-react';

const Offer = () => {
  return (
    <div
      className="relative w-full h-[600px] md:h-[500px] lg:h-[600px]  flex items-start justify-center gap-[100px] px-[72px]" // adjust height as needed
      style={{
        backgroundImage: `url(${offerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* left section  */}
      <div className="flex flex-col flex-1 max-w-[690px] items-start mt-[100px]">
        <CommonP text={"go and discover"} />
        <h1 className="text-[60px] text-black font-[400] mt-2 uppercase ">
          get <TextWithShape text={"special "} />
          offer
        </h1>
        <p className="text-[18px] text-[#929292] font-[400] mt-9">
          Limited-time offers on beach getaways, island escapes, and adventure
          tours—book your sunny escape now!
        </p>
        <button className="flex gap-2 bg-[#00866B] text-[16px] text-white font-[600] px-[30px] py-4 mt-10 rounded-[90px] hover:bg-[#FF870F] transition-colors">
          explore more <ChevronRight />
        </button>
      </div>

      {/* right section  */}
      <div>
        <div className="relative grid grid-cols-2 gap-14 max-w-[600px] mx-auto py-10 px-4 ">
          {/* Top Left Image */}
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-700 text-white w-[134px] h-[134px]  rounded-full flex  items-center justify-center ">

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
