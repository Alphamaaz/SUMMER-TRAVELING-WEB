import React, { useState } from 'react'
import skurdu from "../images/skardu.jpg"
import paris from "../images/paris.jpg"
import indonesia from "../images/indonesia.jpg"
import time from "../images/clock.svg"
import location from "../images/location.svg"
import l_ballon from "../images/l-ballon.png"
import r_ballon from "../images/r-ballon.png"
import mask from "../images/mask_b.png"
import CommonP from './CommonP';
import TextWithShape from './Text';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ChevronRight } from "lucide-react";
import CustomCursor from './Cursor'
const Holiday = () => {
  const [cursorActive, setCursorActive] = useState(false);
    const services = [
      {
        image: skurdu,
        icon: time,
        title: "Experience the incredible pakistan with us",
        description: "Skardu,  Pakiustan",
        time: "6 Days - 2 Nights",
        budget: "$200",
      },
      {
        image: paris,
        icon: time,
        title: "Paris, France",
        description: "Île-de-France region, Northern France",
        time: "6 Days - 2 Nights",
        budget: "PKR 30,000",
      },
      {
        image: indonesia,
        icon: time,
        title: "Bali, Indonesia",
        description: "Southeast Asia, Indonesia",
        time: "6 Days - 2 Nights",
        budget: "PKR 35,000",
      },
      {
        image: indonesia,
        icon: time,
        title: "Bali, Indonesia",
        description: "Southeast Asia, Indonesia",
        time: "6 Days - 2 Nights",
        budget: "PKR 35,000",
      },
      {
        image: indonesia,
        icon: time,
        title: "Bali, Indonesia",
        description: "Southeast Asia, Indonesia",
        time: "6 Days - 2 Nights",
        budget: "PKR 35,000",
      },
      {
        image: indonesia,
        icon: time,
        title: "Bali, Indonesia",
        description: "Southeast Asia, Indonesia",
        time: "6 Days - 2 Nights",
        budget: "PKR 35,000",
      },
      {
        image: indonesia,
        icon: time,
        title: "Bali, Indonesia",
        description: "Southeast Asia, Indonesia",
        time: "6 Days - 2 Nights",
        budget: "PKR 35,000",
      },
      {
        image: indonesia,
        icon: time,
        title: "Bali, Indonesia",
        description: "Southeast Asia, Indonesia",
        time: "6 Days - 2 Nights",
        budget: "PKR 35,000",
      },
    ];
  return (
    <div
      className=" pt-5 px-[40px] md:px-[72px] relative"
      style={{
        backgroundImage: `url(${mask})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <img src={mask} alt="" className=" w-full " /> */}
      <div className="py-5 flex flex-col justify-center items-center ">
        <CommonP text={"awesome tours"} />
        <h1 className="text-[24px] min-[400px]:text-[30px] md:text-[50px] font-[400] text-white">
          Best <TextWithShape text={"Holiday"} /> Packages
        </h1>
        <p className="text-[15px] md:text-[18px] text-center md:text-start font-[400] text-[#FDFDFD] mt-3 md:mt-5">
          We take the pressure off so you can focus on enjoying the sunshine.
        </p>
      </div>
      <div className="py-4 md:py-12 relative">
        <CustomCursor active={cursorActive} />
        <Swiper
          modules={[Pagination]}
          spaceBetween={8}
          slidesPerView={1} // 1 slide on mobile
          breakpoints={{
            640: {
              slidesPerView: 2, // 2 slides on tablet
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: 3, // 3 slides on desktop
              spaceBetween: 16,
            },
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex flex-col p-3 sm:p-4 w-full max-w-[400px] mx-auto bg-white border border-white shadow-[0px_0px_10px_rgba(0,0,0,0.25)] rounded-[10px] cursor-none hover-custom-card"
                onMouseEnter={() => setCursorActive(true)}
                onMouseLeave={() => setCursorActive(false)}
              >
                {/* Image Container */}
                <div className="w-full h-[180px] sm:h-[220px] md:h-[266px] overflow-hidden">
                  <img
                    src={service.image}
                    alt="service"
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="mt-2 sm:mt-3">
                  <h2 className="text-lg sm:text-xl md:text-[24px] font-[600] text-black">
                    {service.title}
                  </h2>
                </div>

                {/* Location & Discount */}
                <div className="mt-2 sm:mt-4 flex justify-between items-center">
                  <div className="flex items-start gap-1 sm:gap-2">
                    <img
                      src={location}
                      alt="location"
                      className="h-5 w-5 sm:h-6 sm:w-6"
                    />
                    <span className="text-sm sm:text-base md:text-[18px] text-[#929292] max-w-[150px] sm:max-w-[194px]">
                      {service.description}
                    </span>
                  </div>
                  <div className="bg-[#FF870F] px-2 sm:px-4 py-1 rounded-full">
                    <p className="text-sm sm:text-base md:text-[18px] text-white">
                      50% off
                    </p>
                  </div>
                </div>

                {/* Duration & Price */}
                <div className="mt-2 sm:mt-3 flex justify-between items-center">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <img
                      src={service.icon}
                      alt="duration"
                      className="h-5 w-5 sm:h-6 sm:w-6"
                    />
                    <span className="text-sm sm:text-base md:text-[18px] text-[#929292]">
                      {service.time}
                    </span>
                  </div>
                  <p className="text-lg sm:text-xl md:text-[24px] font-[600] text-[#FF870F]">
                    {service.budget}
                  </p>
                </div>

                {/* Button */}
                <button className="flex justify-center items-center gap-2 mt-4 sm:mt-6 py-2 sm:py-3 bg-[#00866B] text-white text-base sm:text-[18px] font-[500] rounded-full hover:bg-[#FF870F] transition-colors">
                  View details{" "}
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Container - MUST be outside Swiper */}
        <div className="custom-pagination mt-8"></div>
      </div>

      {/* Add this CSS to your global styles (or in a CSS file) */}
      <style jsx global>{`
        .custom-pagination {
          position: relative;
          display: flex !important;
          justify-content: center;
          align-items: center;
          height: 20px;
          margin-top: 30px;
          z-index: 10;
        }

        .custom-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.5);
          margin: 0 4px !important;
          opacity: 1;
          transition: all 0.3s ease;
          display: inline-block !important;
          border-radius: 50%;
          cursor: pointer;
        }

        .custom-bullet-active {
          width: 24px;
          background: #ff870f;
          border-radius: 14px;
        }

        /* Force show pagination on all devices */
        .swiper-pagination {
          display: flex !important;
        }
      `}</style>

      <img
        src={l_ballon}
        alt="ballon"
        className="hidden md:flex  balloon absolute w-[100px] top-0 left-0"
      />
      <img
        src={r_ballon}
        alt="ballon"
        className="hidden md:flex ballon absolute w-[100px] top-[80px] right-0"
      />
    </div>
  );
}

export default Holiday