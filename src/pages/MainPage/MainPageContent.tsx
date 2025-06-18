import React from "react";
import Banner from "../Banner/Banner";

const Home: React.FC = () => {
  const handleCardClick = (category: string) => {
    console.log(`${category} card clicked`);
    // Add your navigation or action logic here
  };

  return (
    <div className="px-5 max-w-6xl flex flex-col justify-center item-center mt-8 sm:px-0 sm:mt-8 relative w-[100%]">
      < Banner />
      <div className="flex justify-center flex-wrap relative py-10 h-auto w-[100vw] lg:pt-5 lg:text-6xl sm:text-4xl sm:pt-2 text-green-800 font-light font-serif">
        <div className="w-full text-[#36442a] max-w-[50%] lg:max-w-[50%] lg:text-[3rem] text-center px-4 max-lg:text-[70px] max-lg:mt-2 leading-relaxed sm:leading-snug">
          Find the right crystal for you
        </div>
      </div>

      <div className="w-[100vw] flex justify-center sm:pl-1 sm:pr-1 ">
        <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-[1.4rem] sm:gap-[2.5rem] sm:w-[80%]  lg:px-40  lg:w-[100%] ">
          {/* Shop by Intention Card */}
          <div
            className="bg-yellow-50 lg:p-8  text-center rounded-[0.5rem]  transition-all duration-300 cursor-pointer border-2 border-transparent hover:shadow-lg md:p-5 "
            onClick={() => handleCardClick("intention")}
          >
            <h3 className="text-xl text-green-700 mb-5 font-medium">
              Shop by Intention
            </h3>

            <div className="flex justify-center gap-4 mb-5 sm:gap-2">
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl text-white bg-yellow-400 sm:w-9 sm:h-9 sm:text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#F9DB78"
                  >
                    <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                  </svg>
                </div>
                <span className="text-xs text-gray-600">Love</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl text-white bg-green-500 sm:w-9 sm:h-9 sm:text-base">
                  💰
                </div>
                <span className="text-xs text-gray-600">Wealth</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl text-white bg-blue-500 sm:w-9 sm:h-9 sm:text-base">
                  🛡️
                </div>
                <span className="text-xs text-gray-600">Protection</span>
              </div>
            </div>

            <div className="flex justify-center gap-4 mb-5 sm:gap-2">
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl text-white bg-purple-500 sm:w-9 sm:h-9 sm:text-base">
                  ☮️
                </div>
                <span className="text-xs text-gray-600">Peace</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl text-white bg-indigo-500 sm:w-9 sm:h-9 sm:text-base">
                  🔍
                </div>
                <span className="text-xs text-gray-600">Focus</span>
              </div>
            </div>

            <button className="bg-transparent border-2 border-gray-500 text-black px-6 py-2 cursor-pointer text-sm transition-all duration-300 hover:bg-indigo-500 hover:text-white hover:-translate-y-1 hover:shadow-lg">
              Shop by Intention
            </button>
          </div>

          {/* Shop by Zodiac Card */}
          <div
            className="bg-yellow-50 p-8  xs:w-[45%] text-center rounded-[0.5rem] transition-all duration-300 cursor-pointer border-2 border-transparent hover:shadow-lg md:p-5"
            onClick={() => handleCardClick("zodiac")}
          >
            <h3 className="text-xl text-green-700 mb-5 font-medium">
              Shop by Zodiac
            </h3>

            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { sign: "Aries", stone: "Carnelian" },
                { sign: "Taurus", stone: "Emerald" },
                { sign: "Gemini", stone: "Citrine" },
                { sign: "Cancer", stone: "Moonstone" },
                { sign: "Leo", stone: "Tiger's Eye" },
                { sign: "Virgo", stone: "Amazonite" },
                { sign: "Libra", stone: "Lapis Lazuli" },
                { sign: "Scorpio", stone: "Obsidian" },
                { sign: "Sagittarius", stone: "Sodalite" },
                { sign: "Capricorn", stone: "Garnet" },
                { sign: "Aquarius", stone: "Amethyst" },
                { sign: "Pisces", stone: "Aquamarine" },
              ].map(({ sign, stone }) => (
                <div
                  key={sign}
                  className="flex flex-col items-center gap-1 p-2 rounded-lg transition-colors hover:bg-gray-50"
                >
                  <span className="text-xs text-green-700 text-center leading-tight">
                    {sign}
                    <br />
                    {stone}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Chakra Cleanse Kits Card */}
          <div
            className="bg-yellow-50 p-8  text-center rounded-[0.5rem] transition-all duration-300 cursor-pointer border border-transparent hover:shadow-lg md:p-5"
            onClick={() => handleCardClick("chakra")}
          >
            <h3 className="text-xl text-green-700 mb-5 font-medium">
              Chakra Cleanse Kits
            </h3>

            <div className="flex justify-center gap-2 mb-4">
              <div
                className="w-6 h-6 rounded-full border-2 border-white shadow-md bg-red-500 transition-transform hover:scale-110"
                title="Root Chakra"
              ></div>
              <div
                className="w-6 h-6 rounded-full border-2 border-white shadow-md bg-orange-500 transition-transform hover:scale-110"
                title="Sacral Chakra"
              ></div>
              <div
                className="w-6 h-6 rounded-full border-2 border-white shadow-md bg-yellow-400 transition-transform hover:scale-110"
                title="Solar Plexus Chakra"
              ></div>
              <div
                className="w-6 h-6 rounded-full border-2 border-white shadow-md bg-green-500 transition-transform hover:scale-110"
                title="Heart Chakra"
              ></div>
              <div
                className="w-6 h-6 rounded-full border-2 border-white shadow-md bg-blue-600 transition-transform hover:scale-110"
                title="Throat Chakra"
              ></div>
              <div
                className="w-6 h-6 rounded-full border-2 border-white shadow-md bg-indigo-700 transition-transform hover:scale-110"
                title="Third Eye Chakra"
              ></div>
              <div
                className="w-6 h-6 rounded-full border-2 border-white shadow-md bg-purple-600 transition-transform hover:scale-110"
                title="Crown Chakra"
              ></div>
            </div>

            <button className="bg-transparent border-2 border-gray-500 text-black px-6 py-2 cursor-pointer text-sm transition-all duration-300 hover:bg-indigo-500 hover:text-white hover:-translate-y-1 hover:shadow-lg">
              Chakra Cleanse Kits
            </button>
          </div>

          {/* Shop by Crystal Card */}
          <div
            className="bg-yellow-50 text-center transition-all rounded-[0.5rem] duration-300 cursor-pointer object-cover"
            onClick={() => handleCardClick("crystal")}
          >
            <img
              src="/bg-cart4.png"
              alt="Crystal Collection"
              className="w-full h-full rounded-[0.5rem]"
            />
          </div>

          

         
        </div>
        
      </div>
    </div>
  );
};

export default Home;