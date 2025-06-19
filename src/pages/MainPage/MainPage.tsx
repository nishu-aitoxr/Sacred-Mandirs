import React from "react";
//import './MainPage.css';
import MainPageContent from './MainPageContent';

const MainPage: React.FC = () => {
  return (
    <div className="bg-[#b2bca4] h-[200vh] relative w-[100%] overflow-hidden">
      <div className="pt-6 pl-10 pr-10">
        <div className="flex justify-between">
          <h1 className="lg:text-[2rem] sm:mt-4 sm:text-[1.8rem]">SACRED HERITAGE</h1>

          <div className="flex lg:gap-40 lg:mt-7 lg:text-[1rem] sm:gap-[5rem] sm:text-[1.1rem]   sm:mt-6">
            <div>Soap</div>
            <div>About</div>
            <div>Zodiac Gems</div>
            <div>Contact</div>
          </div>



          {/* Full search input only on desktop */}
          <div className="hidden xl:block lg:mt-5">
            <div className="relative w-[17rem]">
              <input
                type="text"
                placeholder="Search..."
                className="pl-4 pr-10 py-1 bg-slate-100 w-full rounded-md outline-none"
              />
              <img
                src="./search.png"
                alt="search"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5"
              />
            </div>


          </div>

          <div className="flex xl:hidden pt-6">
            <img
              src="./search.png"
              alt="search icon"
              className="w-7 h-7 cursor-pointer"
            />
          </div>


        </div>
      </div>

      <MainPageContent />
    </div>
  );
};

export default MainPage;
