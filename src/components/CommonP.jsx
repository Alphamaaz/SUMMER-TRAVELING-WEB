import React from 'react'

const CommonP = ({text}) => {
  return (
    <div className=" flex gap-2 items-center mb-3">
      <div className="h-[3px] w-[33px] bg-[#FF870F] mb-1"></div>
      <p className="text-orange-500 font-semibold tracking-wide uppercase ">
        {text}
      </p>
    </div>
  );
}

export default CommonP