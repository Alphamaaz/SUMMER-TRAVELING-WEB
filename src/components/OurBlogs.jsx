import React from 'react'
import mask from "../images/Rectangle 6.png";
import blogs1 from "../images/blogs1.jpg";
import blogs2 from "../images/blogs2.jpg";
import blogs3 from "../images/blogs3.jpg";
import plane_r from "../images/plane-r.png";
import plane_l from "../images/plane-l.png";
import TextWithShape from './Text';
import CommonP from './CommonP';
import { CalendarDays, MessageSquareMore } from "lucide-react";

const OurBlogs = () => {


    const cards = [
      {
        title: "Living Sustainability: A Day In The Life Atrealar....",
        img: blogs1,
        date: "24 Dec, 2024",
        comments: 2,
      },
      {
        title: "Phychology Is A Broad Field So Considering Narrowing",
        img: blogs2,
        date: "24 Dec, 2024",
        comments: 2,
      },
      {
        title: "Affordable Therapy Options For The People Need Help",
        img: blogs3,
        date: "24 Dec, 2024",
        comments: 2,
      },
    ];

  return (
    <div
      className=" relative w-full min-h-[600px] flex flex-col items-center  gap-8 lg:gap-16 py-10 px-4 lg:px-[72px]"
      style={{
        backgroundImage: `url(${mask})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="pt-5 flex flex-col items-center ">
        <CommonP text={"Blogs and news"} />
        <h1 className="text-[50px] font-[400] text-black">
          OUR <TextWithShape text={"BLOGS"} />
        </h1>
        <p className="text-[18px] font-[400] text-[#929292] mt-6 text-center">
          Get inspired with travel tips, destination guides, and stories to
          spark <br />
          your next summer adventure
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md group"
          >
            {/* Image */}
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-[447px] object-cover  transition-transform duration-300"
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-[#FF870F] opacity-0 hover:opacity-[0.7] transition-opacity"></div>

            {/* Bottom Info */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-[20px] font-[600] mb-3 line-clamp-2">
                {card.title}
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-600 gap-4">
                <div className="flex items-center gap-2">
                  <CalendarDays className="text-green-600" />
                  <span>{card.date}</span>
                </div>
                <span className="text-gray-400">|</span>
                <div className="flex items-center gap-2">
                  <MessageSquareMore className="text-green-600" />
                  <span>{card.comments} Comments</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <img
        src={plane_l}
        alt="plane"
        className="service_shape  absolute top-0 right-0 "
      />
      <img
        src={plane_r}
        alt="plane"
        className="plane absolute top-15 left-0"
      />
    </div>
  );
}

export default OurBlogs