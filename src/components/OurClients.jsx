import React from "react";
import client from "../images/client.png";
import client2 from "../images/client2.png";
import CommonP from "./CommonP";
import TextWithShape from "./Text";
import { ChevronRight } from "lucide-react";

const OurClients = () => {
  return (
    <div
      className="w-full min-h-[600px] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 py-12 px-4 lg:px-[72px]"
      style={{
        backgroundImage: `url(${client})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Left Section - Image */}
      <div className="flex-1 flex justify-center max-w-[700px]">
        <img
          src={client2}
          alt="Happy client"
          className="w-full h-auto max-w-[500px] object-contain"
        />
      </div>

      {/* Right Section - Content */}
      <div className="flex-1 max-w-[700px] text-center lg:text-left">
        <CommonP text={"testimonials"} />
        <h1 className="text-[56px] text-black font-[400] mt-2 uppercase ">
          what <TextWithShape text={"our clients"} /> say
        </h1>
        <p className="text-lg text-[#929292] font-normal mt-6 lg:mt-9">
          Hear from happy travelers who turned their summer dreams into reality
          with us. Real stories, unforgettable experiences, and trusted memories
          from every corner of the world.
        </p>
        <button className="flex items-center gap-2 bg-[#00866B] text-white font-semibold px-8 py-4 mt-8 lg:mt-10 rounded-full hover:bg-[#FF870F] transition-colors mx-auto lg:mx-0">
          explore more <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default OurClients;
