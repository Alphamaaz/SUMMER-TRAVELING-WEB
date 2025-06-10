import React from 'react'
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


const Services = () => {
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
      <div className="pb-10">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          pagination={{
            el: ".custom-swiper-pagination",
            clickable: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="px-[70px] mt-9"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative rounded-[10px] overflow-hidden shadow-lg group h-full"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-[#00866BB2] bg-opacity-30 transition duration-500 group-hover:bg-[#FF870F] group-hover:bg-opacity-[0.7]" />

                <div className="relative z-10 text-white px-[30px] py-[20px] flex flex-col justify-between h-full">
                  <div className="w-24 h-24 border border-dashed border-white rounded-full flex items-center justify-center shadow-md">
                    <img
                      src={service.icon}
                      alt="icon"
                      className="h-[50px] w-[60px]"
                    />
                  </div>

                  <div>
                    <h3 className="text-[24px] font-[600] mt-5">
                      {service.title}
                    </h3>
                    <img src={curve} alt="curve" className="my-3 w-[275px]" />
                    <p className="text-[18px] mt-5">{service.description}</p>
                  </div>

                  <a
                    href="#"
                    className="flex gap-3 justify-center items-center text-[16px] text-[#00866B] font-[600] inline-block bg-white rounded-full px-4 py-[18px] hover:bg-[#FF870F] transition-colors mt-8"
                  >
                    EXPLORE MORE <ArrowRight />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* Dot pagination container */}
        </Swiper>
        <div className="custom-swiper-pagination mt-6 flex justify-center"></div>
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