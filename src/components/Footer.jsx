
import offerImage from "../images/footer.png"
import send from "../images/send.svg"
import "../styles/footer.css"
import { Mail,Phone } from "lucide-react";
import x from "../images/x.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import pintrest from "../images/pinterest.svg";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import React from 'react';
import "../styles/footer.css";

const Footer = () => {
  // ... your existing imports and image array ...
  const images = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
  ];
  return (
    <div
      className="relative w-full min-h-[450px] pt-8  px-4 md:px-12 lg:px-[72px] flex flex-col md:flex-row flex-wrap justify-between gap-8 md:gap-12"
      style={{
        backgroundImage: `url(${offerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Brand Info Section */}
      <div className="text-white flex-1 min-w-[250px] max-w-[400px]">
        <h1 className="text-2xl md:text-[32px] font-bold mb-5">LAYNOVA SUNSCAPE</h1>
        <p className="text-base md:text-[18px] mb-7">
          Lorem ipsum dolor sit amet consectetur. Nec cursus eu lectus mauris ut viverra.
        </p>

        <div className="mb-8">
          <h2 className="text-xl md:text-[24px] font-semibold mb-5">
            Subscribe to our Newsletter
          </h2>
          <div className="flex items-center border-b border-white pb-2">
            <input
              type="text"
              placeholder="ENTER YOUR EMAIL HERE..."
              className="bg-transparent outline-none border-none w-full text-white placeholder-white/70"
            />
            <button className="hover:scale-110 transition-transform">
              <img src={send} alt="send" className="w-8 h-8 md:w-[40px] md:h-[40px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="text-white flex-1 min-w-[150px] max-w-[200px]">
        <h1 className="text-xl md:text-[24px] font-semibold mb-4">Quick Links</h1>
        <div className="h-px w-full bg-white mb-4"></div>
        <ul className="space-y-3">
          {['Home', 'About', 'Services', 'Packages', 'Blog'].map((item) => (
            <li key={item} className="hover:text-[#FF870F] cursor-pointer transition-colors">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Section */}
      <div className="text-white flex-1 min-w-[200px] max-w-[250px]">
        <h2 className="text-xl md:text-[24px] font-semibold mb-4">To Communicate</h2>
        <div className="h-px w-[130px] bg-white mb-4"></div>

        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <p className="text-base md:text-[18px]">123-456-789</p>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            <p className="text-base md:text-[18px]">info@summertravel.com</p>
          </div>
        </div>

        <div className="flex gap-4">
          {[facebook, instagram, pintrest, x].map((icon, index) => (
            <img 
              key={index} 
              src={icon} 
              alt="social" 
              className="h-6 w-6 hover:scale-125 transition-transform cursor-pointer" 
            />
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="text-white flex-1 min-w-[250px] max-w-[300px]">
        <h1 className="text-xl md:text-[24px] font-semibold mb-4">Our Gallery</h1>
        <div className="grid grid-cols-3 gap-2 md:gap-2">
          {images.map((item, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-md hover:scale-105 transition-transform cursor-pointer"
            >
              <img 
                src={item.img} 
                alt="gallery" 
                className="h-20 w-20 md:h-[88px] md:w-[88px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full  flex justify-center items-center text-center text-white/80  pt-2 border-t border-white/20">
        <p>© {new Date().getFullYear()} Laynova Sunscape. All rights reserved.</p>
      </div>
    </div>
  );
};



export default Footer