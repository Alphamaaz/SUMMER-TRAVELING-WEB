import React, { useState } from 'react'
import "../styles/services.css"
import CommonP from './CommonP'
import TextWithShape from './Text';
import right from "../images/right.png"
import left from "../images/left.png"
import nature from "../images/nature.jpg"
import Black from "../images/Black.svg"
import curve from "../images/curve.svg"
import Black2 from "../images/Black (2).svg";
import Black3 from "../images/Black (1).svg"
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CustomCursor from './Cursor';


const Services = () => {
   const [cursorActive, setCursorActive] = useState(false);
    const services = [
      {
        title: "Curated Summer Destinations",
        description:
          "Discover top-rated beaches, islands, and hidden gems, handpicked for the perfect summer escape.",
        image: nature,
        icon:Black
      },
      {
        title: "Flexible Bookings",
        description:
          "Plan your trip your way—with no-stress cancellations, date changes, and easy payment options.",
        image: nature,
        icon:Black2
      },
      {
        title: "Proper Guidelines",
        description:
          "Get custom itineraries built around your interests—whether it's adventure, relaxation, or culture.",
        image: nature,
        icon:Black3
      },
      {
        title: "Proper Guidelines",
        description:
          "Get custom itineraries built around your interests—whether it's adventure, relaxation, or culture.",
        image: nature,
        icon:Black3
      },
      {
        title: "Proper Guidelines",
        description:
          "Get custom itineraries built around your interests—whether it's adventure, relaxation, or culture.",
        image: nature,
        icon:Black3
      },
      {
        title: "Proper Guidelines",
        description:
          "Get custom itineraries built around your interests—whether it's adventure, relaxation, or culture.",
        image: nature,
        icon:Black3
      },
      {
        title: "Proper Guidelines",
        description:
          "Get custom itineraries built around your interests—whether it's adventure, relaxation, or culture.",
        image: nature,
        icon:Black3
      },
      {
        title: "Proper Guidelines",
        description:
          "Get custom itineraries built around your interests—whether it's adventure, relaxation, or culture.",
        image: nature,
        icon:Black3
      },
    ];
      
  return (
    <div className=" bg-[linear-gradient(to_bottom,_#FFF8F1,_#E0F7EF)] relative py-12 px-[40px] md:px-[72px]">
      <div className="w-full flex flex-col justify-center items-center mx-auto text-center">
        <CommonP text={"What we Offer"} />
        <h1 className="text-[30px] md:text-[50px] font-[500] md:font-[400] mt-1">
          OUR <TextWithShape text={"SERVICES"} />
        </h1>
        <p className="text-[15px] md:text-[18px]  font-[400] text-[#929292] mt-4">
          We take the pressure off so you can focus on enjoying the sunshine.
        </p>
      </div>
      <div className="pb-10 px-4 sm:px-6 lg:px-[70px]">
        <CustomCursor active={cursorActive} />
        <Swiper
          modules={[Pagination]}
          spaceBetween={20} // Reduced space on mobile
          pagination={{
            el: ".custom-swiper-pagination",
            clickable: true,
          }}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="mt-6 sm:mt-9"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative rounded-[10px] overflow-hidden shadow-lg group h-[400px] sm:h-[450px]"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "400px", // Ensure minimum height on mobile
                }}
                onMouseEnter={() => setCursorActive(true)}
                onMouseLeave={() => setCursorActive(false)}
              >
                <div className="absolute inset-0 bg-[#00866BB2] bg-opacity-30 transition duration-500 group-hover:bg-[#FF870F] group-hover:bg-opacity-[0.7]" />

                <div className="relative z-10 text-white px-4 sm:px-6 lg:px-[30px] pt-[30px] pb-[15px] sm:py-5 lg:py-[20px] flex flex-col justify-between h-full">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border border-dashed border-white rounded-full flex items-center justify-center shadow-md mx-auto lg:mx-0">
                    <img
                      src={service.icon}
                      alt="icon"
                      className="h-8 w-10 sm:h-10 sm:w-12 lg:h-[50px] lg:w-[60px]"
                    />
                  </div>

                  <div className="text-center lg:text-left">
                    <h3 className="text-xl sm:text-2xl lg:text-[24px] font-[600] mt-3 sm:mt-4 lg:mt-5">
                      {service.title}
                    </h3>
                    <img
                      src={curve}
                      alt="curve"
                      className="my-2 sm:my-3 w-full max-w-[275px] mx-auto lg:mx-0"
                    />
                    <p className="text-sm sm:text-base lg:text-[18px] mt-3 sm:mt-4 lg:mt-5">
                      {service.description}
                    </p>
                  </div>

                  <a
                    href="#"
                    className="flex gap-2 sm:gap-3 justify-center items-center text-sm sm:text-base lg:text-[16px] text-[#00866B] font-[600]  bg-white rounded-full px-3 sm:px-4 py-2 sm:py-3 lg:py-[18px] hover:bg-[#FF870F] transition-colors mt-4 sm:mt-6 lg:mt-8  lg:mx-0"
                  >
                    EXPLORE MORE{" "}
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-swiper-pagination mt-4 sm:mt-6 flex justify-center"></div>
      </div>

      <img
        src={right}
        alt="right"
        className="service_shape1  w-[60px] md:w-[100px] absolute top-[80px] left-0"
      />
      <img
        src={left}
        alt="right"
        className="service_shape w-[60px] md:w-[100px] absolute top-0 right-0"
      />
    </div>
  );
}

export default Services