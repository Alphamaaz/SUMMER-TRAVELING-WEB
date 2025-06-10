import React from "react";
import america from "../images/america.png";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import pintrest from "../images/pinterest.svg";
import location from "../images/location.svg";
import email from "../images/email.svg";
import phone from "../images/phone.svg";
import x from "../images/x.svg";


const Navbar = () => {
    
  return (
    <div>
      <div className="bg-orange-500 md:bg-[#00866B]">
        <div className="flex justify-between items-center py-[15px] px-[20px] md:px-[70px]">
          <div className="flex gap-5 items-center">
            <img
              src={facebook}
              alt="facebook"
              className="h-[18px] w-[18px] md:h-[24px] md:w-[24px] cursor-pointer"
            />
            <img
              src={instagram}
              alt="instagram"
              className="h-[18px] w-[18px] md:h-[24px] md:w-[24px] cursor-pointer"
            />
            <img
              src={pintrest}
              alt="pintrest"
              className="h-[18px] w-[18px] md:h-[24px] md:w-[24px] cursor-pointer"
            />
            <img
              src={x}
              alt="x"
              className="h-[18px] w-[18px] md:h-[24px] md:w-[24px] cursor-pointer"
            />
          </div>
          <div className="flex gap-2 md:gap-3 items-center">
            <img
              src={america}
              alt="america"
              className="h-[24px] w-[24px] md:h-[34px] md:w-[34px]  cursor-pointer"
            />
            <select
              name="select"
              id="select"
              className="bg-transparent text-white font-[400] tex-[16px] md:text-[18px] focus:outline-none hover:bg-[var(--primary1)]  py-1 rounded transition-colors duration-300 cursor-pointer"
            >
              <option
                value="Eng"
                className="text-black bg-white hover:bg-[var(--primary1)] hover:text-white p-2"
              >
                Eng
              </option>
              <option
                value="Urdu"
                className="text-black bg-white hover:bg-[var(--primary1)] hover:text-white p-2"
              >
                Urdu
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* logo and address section  */}
      <div className="hidden md:flex flex-col md:flex-row  px-[30px] md:px-[70px] py-3 md:py-7 gap-[120px]">
        <div className="w-full md:w-[333px] text-center md-text-start ">
          <h1 className="text-[24px] text-center md:text-start md:text-[32px] font-[700] uppercase">
            laynova sunscape
          </h1>
        </div>
        <div className="w-full md:w-[70%] flex justify-between md:justify-around ">
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <img src={location} alt="location" className="h-[45px] w-[45px]" />
            <p className="text-[18px] font-[400] text-[#929292]">
              Fifth Avenue 1001, XYZ, <br className="hidden md:inline" /> New
              York Morris Streat
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <img src={email} alt="email" className="h-[45px] w-[45px]" />
            <p className="text-[18px] font-[400] text-[#929292]">
              info@summertravel.com
            </p>
          </div>
          <div className="flex gap-3 items-center ">
            <img src={phone} alt="phone" className="h-[45px] w-[45px]" />
            <p className="text-[18px] font-[400] text-[#929292]">
              012-345-678-9
            </p>
          </div>
        </div>
      </div>

      {/* menues section  */}
    </div>
  );
};

export default Navbar;
