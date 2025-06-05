import React from 'react'
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
const Holiday = () => {
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
      className=" pt-5  px-[72px] relative"
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
        <h1 className="text-[50px] font-[400] text-white">
          Best <TextWithShape text={"Holiday"} /> Packages
        </h1>
        <p className="text-[18px] font-[400] text-[#FDFDFD] mt-5">
          We take the pressure off so you can focus on enjoying the sunshine.
        </p>
      </div>
      <div className="py-12 relative">
        <Swiper
          modules={[Pagination]}
          spaceBetween={8}
          slidesPerView={3}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col p-4 w-full max-w-[400px] bg-white  border border-white shadow-[0px_0px_10px_rgba(0,0,0,0.25)] rounded-[10px] ">
                {/* Image Container */}
                <div className="w-full h-[266px] overflow-hidden">
                  <img
                    src={service.image}
                    alt="service"
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="mt-3">
                  <h2 className="text-[24px] font-[600] text-black">
                    {service.title}
                  </h2>
                </div>

                {/* Location & Discount */}
                <div className="mt-4 flex justify-between items-center">
                  <div
                    className="flex items-start
                   gap-2"
                  >
                    <img src={location} alt="location" className="h-6 w-6" />
                    <span className="text-[18px] text-[#929292] max-w-[194px]">
                      {service.description}
                    </span>
                  </div>
                  <div className="bg-[#FF870F] px-4 py-1 rounded-full">
                    <p className="text-[18px] text-white">50% off</p>
                  </div>
                </div>

                {/* Duration & Price */}
                <div className="mt-3 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img
                      src={service.icon}
                      alt="duration"
                      className="h-6 w-6"
                    />
                    <span className="text-[18px] text-[#929292]">
                      {service.time}
                    </span>
                  </div>
                  <p className="text-[24px] font-[600] text-[#FF870F]">
                    {service.budget}
                  </p>
                </div>

                {/* Button */}
                <button className="flex justify-center items-center gap-2 mt-6 py-3 bg-[#00866B] text-white text-[18px] font-[500] rounded-full hover:bg-[#006e58] transition-colors hover:bg-[#FF870F] transiton-colors">
                  View details <ChevronRight className="h-5 w-5" />
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
        className="balloon absolute w-[100px] top-0 left-0"
      />
      <img
        src={r_ballon}
        alt="ballon"
        className=" ballon absolute w-[100px] top-[80px] right-0"
      />
    </div>
  );
}

export default Holiday