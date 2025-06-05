import React from 'react'
import "../styles/services.css"
import corner from "../images/service-top.png"
import rectangle from "../images/Rectangle.png"
import rectangle_1 from "../images/Rectangle 4.png"
import arrow from "../images/Vector.svg"
import suitcase from "../images/suitcase.svg"
import hulk from "../images/hulk.svg"
import  jam1 from "../images/jam_direction-f.png";
import jam2 from "../images/jam_direction-f (1).png";
import jam3 from "../images/jam_direction-f (2).png";
import CommonP from './CommonP';
import TextWithShape from './Text'
import { Plus } from 'lucide-react'
const WhyChoose = () => {
  return (
    <div className="mt-10 relative">
      <div className="services-container flex flex-row w-full px-[72px] gap-14">
        {/* left side of the section  */}
        <div className="flex-1 relative max-w-[620px] ">
          {/* Rectangle Image */}
          <img
            src={rectangle_1}
            alt="City"
            className="rounded-[30px] w-[422px] h-[422px] object-cover shadow-lg z-100 mt-[100px]"
          />

          {/* Circular Image - Overlapping */}
          <div className="absolute top-12 right-[30px] w-[219px] h-[330px] rounded-[900px] overflow-hidden border-4 border-white shadow-md">
            <img
              src={rectangle}
              alt="Town"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Circular Arrow Button */}
          <div className="absolute bottom-[60px] left-[70%] transform -translate-x-1/2 w-26 h-26 bg-white border-8 border-white  rounded-full">
            <div className="rotation1 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
              <img src={arrow} alt="arrow" className="h-[30px] w-[30px]" />
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-[630px] mt-12">
          <CommonP text={"Why We Are"} />
          <h1 className="text-[50px] font-[400] mt-2">
            Why <TextWithShape text={" Choose"} /> US
          </h1>
          <p className="text-[18px] font-[400] mt-2">
            We craft unforgettable summer journeys with handpicked destinations,
            exclusive deals, and flexible bookings. Whether you're chasing
            beaches, mountains, or sunsets—we make every trip easy, safe, and
            unforgettable.
          </p>
          <div className="flex mt-10 gap-4">
            <div>
              <img
                src={suitcase}
                alt="suitcase"
                className="h-[50px] w-[50px]"
              />
            </div>
            <div>
              <h4 className="font-[600] text-[23px] text-black ">
                Personalized Trips
              </h4>
              <p className="font-[400] text-[18px] text-[#929292]">
                From handpicked stays to curated experiences, we turn your
                travel dreams into reality.
              </p>
            </div>
          </div>

          <div className="flex mt-6 gap-4">
            <div>
              <img src={hulk} alt="suitcase" className="h-[50px] w-[50px]" />
            </div>
            <div>
              <h4 className="font-[600] text-[23px] text-black ">
                Trusted Travel Guide
              </h4>
              <p className="font-[400] text-[18px] text-[#929292]">
                Trusted by thousands of happy travelers, we’re your shortcut to
                summer bliss.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-wrap mt-6">
            {/* Start Booking Button */}
            <button className="bg-green-700 hover:bg-[#FF870F] text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-colors">
              START BOOKING
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Avatar Group + Label */}
            <div className="flex items-center gap-5">
              {/* Avatars */}
              <div className="flex -space-x-4">
                <img
                  className="w-12 h-12 rounded-full border-2 border-white"
                  src={jam1}
                  alt="User 1"
                />
                <img
                  className="w-12 h-12 rounded-full border-2 border-white"
                  src={jam2}
                  alt="User 2"
                />
                <img
                  className="w-12 h-12 rounded-full border-2 border-white"
                  src={jam3}
                  alt="User 3"
                />
                {/* Plus Icon */}
                <div className="w-12 h-12 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-green-700 text-[30px] font-bold cursor-pointer">
                  <Plus />
                </div>
              </div>

              {/* Label */}
              <div className="ml-5">
                <p className="text-lg font-semibold text-gray-800">2K+</p>
                <p className="text-sm text-gray-500 -mt-1">
                  Individual Traveller
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* right side section  */}

      <img
        src={corner}
        alt="corner"
        className="absolute top-0 lef-0 h-[108px] w-[215px]"
      />
    </div>
  );
}

export default WhyChoose;