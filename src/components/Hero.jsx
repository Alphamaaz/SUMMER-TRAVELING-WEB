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
import { ChevronDown, ChevronRight } from "lucide-react";

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

  
    const dateInputRef = useRef(null);
  
    const handleFocusInput = () => {
      if (dateInputRef.current) {
        dateInputRef.current.showPicker?.(); // For modern browsers
        dateInputRef.current.focus();        // Fallback for older ones
      }
    };
  return (
    <section
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
        <div className=" w-full max-w-[calc(100%-60px)] md:max-w-[680px] mx-auto mx-[30px] md:mx-[72px] pt-[40px] md:py-[80px] ">
          <div className=" flex gap-2 items-center mb-3">
            <div className="h-[3px] w-[33px] bg-[#FF870F]"></div>
            <p className="text-orange-500 font-semibold tracking-wide  ">
              FIND YOUR SUMMER SPOT
            </p>
          </div>
          <h1 className="text-[24px] min-[400px]:text-[30px] md:text-[50px] font-[500] md:font[400]   md:mb-6 leading-tight">
            WANDER WHERE THE <br />
            SUN <TextWithShape text="WARMS" />
            YOUR SOUL
          </h1>
          <img
            src={hero} // replace with actual path
            alt="Traveler"
            className="md:hidden  w-[350px] h-auto"
          />
          <p className="text-gray-500 text-sm md:text-lg mt-4 md:mt-2">
            Embrace the sunshine and explore handpicked summer escapes made for
            you. From sun-soaked beaches to cool mountain retreats—your perfect
            summer starts here.
          </p>

          <button className="flex w-[90%] md:w-fit justify-center items-center bg-teal-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-[#FF870F] transition-colors mt-[25px] md:mt-[40px]">
            START BOOKING <ChevronRight className="h-[20px] w-[20px]" />
          </button>
        </div>

        {/* Right Image */}
        <div className="hidden md:flex items-center justify-center w-[700px]">
          <img
            src={hero} // replace with actual path
            alt="Traveler"
            className="hero_img w-[461px] h-[502px]"
          />
        </div>
        <img
          src={cloud} // replace with actual path
          alt="Traveler"
          className="hidden md:flex cloud w-[200px] h-[123px] absolute top-[-8px] left-[48%] z-[-1]"
        />
        <img
          src={virus_small} // replace with actual path
          alt="Traveler"
          ref={ref}
          className="hidden md:flex sm_virus w-[28px] h-[28px] absolute top-[20%] right-[35%] z-[-1]"
        />
        <img
          src={virus_large} // replace with actual path
          alt="Traveler"
          className="hidden md:flex lg_virus w-[61px] h-[61px] absolute top-[50%] right-[45%] z-[-1]"
        />
        <img
          src={green_plane} // replace with actual path
          alt="Traveler"
          className="hidden md:flex green_plane w-[300px] absolute top-[70%] right-[33%] z-[-1]"
        />
        <img
          src={trophy} // replace with actual path
          alt="Traveler"
          className=" hidden md:flex trophy w-[140px] h-[130px] absolute bottom-[9%] right-[1%] z-[-1]"
        />
        <img
          src={track} // replace with actual path
          alt="Traveler"
          className="hidden md:flex w-[130px] h-[250px] absolute top-[-20px] right-[3%] z-[-1]"
        />
        <img
          src={locaton} // replace with actual path
          alt="Traveler"
          className="hidden md:flex w-[20px] h-[20px] absolute top-[-35px] right-[5%] z-[-1]"
        />
        <img
          src={aeroplane} // replace with actual path
          alt="Traveler"
          className="hidden md:flex aeroplane w-[20px] h-[20px] absolute top-[78px] right-[5%] z-[-1]"
        />
      </div>

      {/* 2nd section  */}
      <form className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center max-w-[1220px] mx-auto border border-white shadow-[0px_0px_10px_0px_#FF870F40] rounded-md md:rounded-[90px] bg-white mt-8 overflow-hidden">
          {/* Location */}
          <div className="relative px-4 sm:px-6 py-3 flex-1 w-full border-b lg:border-b-0 lg:border-r border-[#E3E3E3]">
            <div className="flex gap-2 items-center justify-center">
              <img
                src={locationo}
                alt="location"
                className="h-4 w-4 sm:h-5 sm:w-5"
              />
              <span className="text-sm sm:text-[18px] font-[400] text-[#929292]">
                Location
              </span>
            </div>
            <select className="appearance-none bg-white text-base sm:text-[20px] font-[400] mt-1 text-center w-full focus:outline-none pr-8 cursor-pointer">
              <option disabled selected>
                Where to next
              </option>
              <option>Skardu, Pakistan</option>
              <option>Paris, France</option>
              <option>Bali, Indonesia</option>
            </select>
            <div className="absolute right-6 bottom-3 pointer-events-none text-[#929292] text-xl">
              <ChevronDown />
            </div>
          </div>

          {/* Type */}
          <div className="relative px-4 sm:px-6 py-3 flex-1 w-full border-b lg:border-b-0 lg:border-r border-[#E3E3E3]">
            <div className="flex gap-2 items-center justify-center">
              <img src={tpe} alt="type" className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-[18px] font-[400] text-[#929292]">
                Type
              </span>
            </div>
            <select className="appearance-none bg-white text-base sm:text-[20px] font-[400] mt-1 text-center w-full focus:outline-none pr-8 cursor-pointer">
              <option disabled selected>
                Booking Type
              </option>
              <option>One Way</option>
              <option>Round Trip</option>
              <option>Multi-City</option>
            </select>
            <div className="absolute right-6 bottom-3 pointer-events-none text-[#929292] text-xl">
              <ChevronDown />
            </div>
          </div>

          {/* Date */}
          <div
            onClick={handleFocusInput}
            className="px-4 sm:px-6 py-3 flex-1 w-full border-b lg:border-b-0 lg:border-r border-[#E3E3E3] cursor-pointer"
          >
            <div className="flex gap-2 items-center justify-center cursor-pointer">
              <img
                src={calendar}
                alt="date"
                className="h-4 w-4 sm:h-5 sm:w-5"
              />
              <span className="text-sm sm:text-[18px] font-[400] text-[#929292]">
                Date From
              </span>
            </div>
            <input
              ref={dateInputRef}
              type="date"
              className="appearance-none bg-white text-base sm:text-[20px] font-[400] mt-1 text-center w-full focus:outline-none cursor-pointer"
            />
          </div>

          {/* Guests */}
          <div className="relative px-4 sm:px-6 py-3 flex-1 w-full border-b lg:border-b-0 border-[#E3E3E3]">
            <div className="flex gap-2 items-center justify-center md:justify-start md:ml-5">
              <img src={guest} alt="guests" className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="text-sm sm:text-[18px] font-[400] text-[#929292]">
                Guests
              </span>
            </div>
            <select className="appearance-none bg-white text-base sm:text-[20px] font-[400] mt-1 text-center md:pl-10 w-full focus:outline-none  cursor-pointer">
              <option className="md:text-start">01</option>
              <option className="md:text-start">02</option>
              <option className="md:text-start">03</option>
              <option className="md:text-start">04+</option>
            </select>
            <div className="absolute right-6 bottom-3 pointer-events-none text-[#929292] text-xl">
              <ChevronDown />
            </div>
          </div>

          {/* Search Button */}
          <div className="w-full lg:w-auto self-stretch">
            <button
              type="submit"
              className="bg-[#00866B] hover:bg-[#FF870F] duration-400 transition-colors md:rounded-b-[20px] lg:rounded-b-none lg:rounded-r-[90px] px-6 py-3 sm:px-8 sm:py-4 lg:h-full w-full flex items-center justify-center gap-2"
            >
              <span className="text-sm sm:text-[16px] font-[600] text-white">
                Search
              </span>
              <Search className="h-3 w-3 sm:h-[15px] sm:w-[15px] text-white" />
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Hero;
