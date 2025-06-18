import React from "react";

const Banner: React.FC = () => {
  return (

    <div className="px-5 max-w-6xl flex flex-col justify-center item-center mt-8 sm:px-0 sm:mt-8 relative w-[100%] pb-[6rem]">
          
          <div className="flex justify-center flex-wrap relative py-10 h-auto w-[100vw] lg:pt-5 lg:text-6xl sm:text-4xl sm:pt-2 text-green-800 font-light font-serif">
            <div className="w-full text-[#36442a] max-w-[73%] lg:max-w-[32%] md:max lg:text-[2.9rem] text-center px-4 max-lg:text-[70px] max-lg:mt-2 leading-relaxed sm:leading-snug">
              With Great design comes great response
            </div>
          </div>
    </div>

    
  );
};

export default Banner;
