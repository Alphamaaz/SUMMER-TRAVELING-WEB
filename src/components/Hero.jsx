import React, { useEffect, useRef } from "react";
import hero from '../images/hero.png'
import locationo from '../images/location.svg'
import tpe from '../images/type.svg'
import calendar from '../images/calendar.svg'
import guest from '../images/guest.svg'
import BG from '../images/BG.png'
import cloud from '../images/cloud.png'
import virus_large from '../images/virus_large.svg'
import virus_small from '../images/virus_small.svg'
import green_plane from '../images/green_plan.svg'
import locaton from '../images/locaton.svg'
import aeroplane from '../images/aeroplane.svg'
import track from '../images/track.png'
import trophy from '../images/trophy.png'
import "../styles/hero.css"
import { ChevronRight } from "lucide-react";

import TextWithShape from "./Text";
import { Search } from "lucide-react";
import Nav from './Nav';

const Hero = () => {
  const ref = useRef();

  useEffect(() => {
    let interval;
    const animate = () => {
      const el = ref.current;
      el.style.animation = "none";
      // trigger reflow
      void el.offsetWidth;
      el.style.animation = "sm_virus 7s ease-in-out";
    };

    animate(); // initial run
    interval = setInterval(() => {
      animate(); // repeat every 10s (7s animation + 3s pause)
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      className="bg-gradient-to-r from-white via-[#F4F9F8] to-[#FDF4EF]  "
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Nav />
      <div className="relative flex flex-col md:flex-row  justify-between">
        {/* Left Content */}
        <div className=" max-w-[680px] mx-[72px] py-[80px] ">
          <div className=" flex gap-2 items-center mb-3">
            <div className="h-[3px] w-[33px] bg-[#FF870F]"></div>
            <p className="text-orange-500 font-semibold tracking-wide  ">
              FIND YOUR SUMMER SPOT
            </p>
          </div>
          <h1 className="text-[56px] font-[400]  mb-6 leading-tight">
            WANDER WHERE THE <br />
            SUN <TextWithShape text="WARMS" />
            YOUR SOUL
          </h1>

          <p className="text-gray-500 text-lg ">
            Embrace the sunshine and explore handpicked summer escapes made for
            you. From sun-soaked beaches to cool mountain retreats—your perfect
            summer starts here.
          </p>

          <button className="flex items-center bg-teal-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-[#FF870F] transition-colors mt-[40px]">
            START BOOKING <ChevronRight className="h-[20px] w-[20px]" />
          </button>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center w-[700px]">
          <img
            src={hero} // replace with actual path
            alt="Traveler"
            className="hero_img w-[461px] h-[502px]"
          />
        </div>
        <img
          src={cloud} // replace with actual path
          alt="Traveler"
          className="cloud w-[200px] h-[123px] absolute top-[-8px] left-[48%] z-[-1]"
        />
        <img
          src={virus_small} // replace with actual path
          alt="Traveler"
          ref={ref}
          className="sm_virus w-[28px] h-[28px] absolute top-[20%] right-[35%] z-[-1]"
        />
        <img
          src={virus_large} // replace with actual path
          alt="Traveler"
          className="lg_virus w-[61px] h-[61px] absolute top-[50%] right-[45%] z-[-1]"
        />
        <img
          src={green_plane} // replace with actual path
          alt="Traveler"
          className="green_plane w-[300px] absolute top-[70%] right-[33%] z-[-1]"
        />
        <img
          src={trophy} // replace with actual path
          alt="Traveler"
          className=" trophy w-[140px] h-[130px] absolute bottom-[9%] right-[1%] z-[-1]"
        />
        <img
          src={track} // replace with actual path
          alt="Traveler"
          className="w-[130px] h-[250px] absolute top-[-20px] right-[3%] z-[-1]"
        />
        <img
          src={locaton} // replace with actual path
          alt="Traveler"
          className="w-[20px] h-[20px] absolute top-[-35px] right-[5%] z-[-1]"
        />
        <img
          src={aeroplane} // replace with actual path
          alt="Traveler"
          className="aeroplane w-[20px] h-[20px] absolute top-[78px] right-[5%] z-[-1]"
        />
      </div>

      {/* 2nd section  */}
      <div className="flex justify-between items-center w-[1220px] mx-auto border border-white shadow-[0px_0px_10px_0px_#FF870F40] rounded-[90px]  bg-white mt-8">
        {/* Location */}
        <div className="px-6 py-3 flex-1">
          <div className="flex gap-2 items-center justify-center">
            <img src={locationo} alt="location" className="h-[20px] w-[20px]" />
            <span className="text-[18px] font-[400] text-[#929292]">
              Location
            </span>
          </div>
          <h3 className="text-[20px] font-[400] mt-1 text-center">
            Where to next
          </h3>
        </div>

        {/* Divider */}
        <div className="h-[60px] w-[1px] bg-[#E3E3E3] mx-2"></div>

        {/* Type */}
        <div className="px-6 py-3 flex-1">
          <div className="flex gap-2 items-center justify-center mr-14">
            <img src={tpe} alt="type" className="h-[20px] w-[20px]" />
            <span className="text-[18px] font-[400] text-[#929292]">Type</span>
          </div>
          <h3 className="text-[20px] font-[400] mt-1 text-center">
            Booking Type
          </h3>
        </div>

        {/* Divider */}
        <div className="h-[60px] w-[1px] bg-[#E3E3E3] mx-2"></div>

        {/* Date */}
        <div className="px-6 py-3 flex-1">
          <div className="flex gap-2 items-center justify-center">
            <img src={calendar} alt="date" className="h-[20px] w-[20px]" />
            <span className="text-[18px] font-[400] text-[#929292]">
              Date From
            </span>
          </div>
          <h3 className="text-[20px] font-[400] mt-1 text-center">
            Select Date
          </h3>
        </div>

        {/* Divider */}
        <div className="h-[60px] w-[1px] bg-[#E3E3E3] mx-2"></div>

        {/* Guests */}
        <div className="px-6 py-3 flex-1">
          <div className="flex gap-2 items-center justify-center">
            <img src={guest} alt="guests" className="h-[20px] w-[20px]" />
            <span className="text-[18px] font-[400] text-[#929292]">
              Guests
            </span>
          </div>
          <h3 className="text-[20px] font-[400] mt-1 text-center">02</h3>
        </div>

        {/* Search Button - Now Full Height and Right-Aligned */}
        <div className="self-stretch flex">
          {" "}
          {/* Container to help with alignment */}
          <button className="bg-[#00866B] hover:bg-[#006e58] transition-colors rounded-r-[90px] px-8 h-full flex items-center justify-center gap-2">
            <span className="text-[16px] font-[600] text-white">Search</span>
            <Search className="h-[15px] w-[15px] text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
