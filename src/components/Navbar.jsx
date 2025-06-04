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
      <div className="bg-[#00866B]">
        <div className="flex justify-between items-center py-[15px] px-[70px]">
          <div className="flex gap-5 items-center">
            <img src={facebook} alt="facebook" className="h-[24px] w-[24px]" />
            <img
              src={instagram}
              alt="instagram"
              className="h-[24px] w-[24px]"
            />
            <img src={pintrest} alt="pintrest" className="h-[24px] w-[24px]" />
            <img src={x} alt="x" className="h-[24px] w-[24px]" />
          </div>
          <div className="flex gap-3 items-center">
            <img src={america} alt="america" className="h-[34px] w-[34px]" />
            <select
              name="select"
              id="select"
              className="bg-transparent text-white font-[400] text-[18px] focus:outline-none hover:bg-[var(--primary1)]  py-1 rounded transition-colors duration-200 cursor-pointer"
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
      <div className="flex px-[70px] py-7 gap-[120px]">
        <div className="w-[333px]">
          <h1 className="text-[32px] font-[700] uppercase">laynova sunscape</h1>
        </div>
        <div className="flex justify-around w-[70%]">
          <div className="flex gap-3 items-center">
            <img src={location} alt="location" className="h-[50px] w-[50px]" />
            <p className="text-[18px] font-[400] text-[#929292]">
              Fifth Avenue 1001, XYZ, <br className="hidden md:inline" /> New
              York Morris Streat
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <img src={email} alt="email" className="h-[50px] w-[50px]" />
            <p className="text-[18px] font-[400] text-[#929292]">
              info@summertravel.com
            </p>
          </div>
          <div className="flex gap-3 items-center ">
            <img src={phone} alt="phone" className="h-[50px] w-[50px]" />
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
