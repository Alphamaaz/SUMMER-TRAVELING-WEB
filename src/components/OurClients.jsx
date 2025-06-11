import React from "react";
import client from "../images/client.png";
import client2 from "../images/client2.png";
import pol4 from "../images/pol1.jpg";
import pol3 from "../images/pol2.jpg";
import pol2 from "../images/pol3.jpg";
import pol1 from "../images/pol4.jpg";
import inner from "../images/Polygon 1.svg";
import outer from "../images/Polygon 2.svg";
import commas from "../images/commas.svg";
import stars from "../images/stars.svg";
import CommonP from "./CommonP";
import TextWithShape from "./Text";
import { ChevronRight } from "lucide-react";

const OurClients = () => {
  return (
    <div
      className="w-full  flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 py-12 px-4 lg:px-[72px]"
      style={{
        backgroundImage: `url(${client})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Left Section - Image */}
      <div className="relative hidden md:flex flex-1 flex justify-center max-w-[700px]">
        <img
          src={outer}
          alt="Happy client"
          className="w-full h-auto max-w-[500px] object-contain"
        />
        <img
          src={inner}
          alt="Happy client"
          className="absolute top-6 w-full h-auto max-w-[450px] object-contain"
        />
        <img
          src={pol1}
          alt="Happy client"
          className="absolute top-[75px] right-[60px] w-[84px] h-[84px] max-w-[450px] object-cover rounded rounded-[900px] border-[2px] border-orange-500"
        />
        <img
          src={pol3}
          alt="Happy client"
          className="absolute top-[75px] left-[60px] w-[84px] h-[84px] max-w-[450px] object-cover rounded rounded-[900px] border-[2px] border-orange-500"
        />
        <img
          src={pol2}
          alt="Happy client"
          className="absolute bottom-[85px] right-[60px] w-[84px] h-[84px] max-w-[450px] object-cover rounded rounded-[900px] border-[2px] border-orange-500"
        />
        <img
          src={pol4}
          alt="Happy client"
          className="absolute bottom-[85px] left-[60px] w-[84px] h-[84px] max-w-[450px] object-cover rounded rounded-[900px] border-[2px] border-orange-500"
        />
        <img
          src={commas}
          alt="Happy client"
          className="absolute top-[55px] w-[74px] h-[48px] max-w-[450px] object-contain "
        />
        {/* profile  */}
        <div className="absolute top-[150px] flex items-center">
          <div>
            <img
              src={pol1}
              alt="Happy client"
              className=" w-[50px] h-[50px] object-cover rounded rounded-[900px] border-[2px] border-white"
            />
          </div>
          <div className="ml-2">
            <h4 className="text-white text-[20px] font-[400] uppercase">
              Lara Alex
            </h4>
            <img
              src={stars}
              alt="Happy client"
              className=" w-[74px] h-[25px] w-[102px] object-contain "
            />
          </div>
        </div>
        <div className="absolute top-[50%]">
          <p className="text-white text-[18px] text-center leadinf-normal font-[400] max-w-[280px]">
            "Booking through this site made my Bali trip completely stress-free!
            The beach resort, the itinerary, everything was perfect. Best summer
            ever!"
          </p>
        </div>
      </div>

      {/* Right Section - Content */}
      <div className="flex-1 max-w-[700px] text-center lg:text-left">
        <CommonP text={"testimonials"} />
        <h1 className="text-[30px] md:text-[56px] text-black font-[400] mt-2 uppercase ">
          what <TextWithShape text={"our clients"} /> say
        </h1>
        <img
          src={client2}
          alt="Happy client"
          className="md:hidden w-full h-auto max-w-[500px] object-contain mt-5"
        />
        <p className="text-[15px] md:text-lg  text-[#929292] font-normal mt-6 lg:mt-9">
          Hear from happy travelers who turned their summer dreams into reality
          with us. Real stories, unforgettable experiences, and trusted memories
          from every corner of the world.
        </p>
        <button className="w-[90%] md:w-fit flex items-center justify-center gap-2 bg-[#00866B] text-white font-semibold px-8 py-4 mt-8 lg:mt-10 rounded-full hover:bg-[#FF870F] transition-colors duration-300 mx-auto lg:mx-0">
          Explore more <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default OurClients;
