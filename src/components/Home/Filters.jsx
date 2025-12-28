import React from "react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const Filters = () => {
  const [activeItem, setActiveItem] = useState(false);
  const [selected, setSelected] = useState("Popular");
  const [seletedSlider, setSelectedSlider] = useState("Discover");
  const [filter, setFilter] = useState(false);
  const [timeFrame, setTimeFrame] = useState("Now");
  const [timeFrameAnimate, setTimeFrameAnimate] = useState(true);

  const handleSelect = (item) => {
    setSelected(item);
    setActiveItem(false);
  };

  const cardSlider = [
    "Discover",
    "Animation",
    "Branding",
    "Illustration",
    "Mobile",
    "Print",
    "Product Design",
    "Typography",
    "Web Design",
  ];

  const timeFrameSlide = [
    "Now",
    "This Past Week",
    "This Past Month",
    "This Past Year",
    "All Time",
  ];

  return (
    <div>
      <div className="relative z-50">
        <div className="mt-7 flex items-center justify-between px-6 py-2 min-[1200px]:px-18 lg:gap-10">
          {/* Dropdown Button aur Container */}
          <div
            // ActiveItem ko toggle sirf button par click karne par hona chahiye
            onClick={() => setActiveItem(!activeItem)}
            className="relative flex cursor-pointer items-center justify-center gap-3 rounded-md border border-gray-200 px-3 py-2 shadow-sm"
          >
            <h1 className="text-sm font-medium">{selected}</h1>

            {/* Arrow Icon Animation */}
            <motion.span
              animate={{ rotate: activeItem ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <IoIosArrowDown className="h-3 w-3" />
            </motion.span>

            {/* Dropdown Menu - top-full aur mt-2 theek kiya gaya! */}
            <div
              className={`absolute flex flex-col gap-1 ${activeItem ? "block" : "hidden"} top-full left-0 z-10 mt-2 w-48 rounded-md border border-gray-200 bg-white px-3 py-2`}
            >
              {/* Popular Item */}
              <div
                onClick={() => handleSelect("Popular")}
                className={`flex items-center justify-between rounded-md ${selected === "Popular" && "bg-gray-200/50"} cursor-pointer px-2 py-3`}
              >
                <span className="text-xs font-medium">Popular</span>
                {selected === "Popular" ? <FaCheck className="h-3 w-3" /> : ""}
              </div>

              {/* New & Noteworthy Item */}
              <div
                className={`flex items-center justify-between rounded-md ${selected === "New & Noteworthy" && "bg-gray-200/50"} cursor-pointer px-2 py-3`}
                onClick={() => handleSelect("New & Noteworthy")}
              >
                <span className="text-[12px] font-medium">
                  New & Noteworthy
                </span>
                {selected === "New & Noteworthy" ? (
                  <FaCheck className="h-3 w-3" />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <div className="scrollbar-hide hidden overflow-x-scroll px-2 lg:block">
            <div className="flex items-center gap-2">
              {cardSlider.map((slide, idx) => (
                <span
                  key={idx}
                  onClick={() => setSelectedSlider(slide)}
                  className={`rounded-full px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-all duration-200 hover:cursor-pointer hover:text-gray-600 xl:text-[12px] ${seletedSlider === slide && "bg-gray-100"}`}
                >
                  {slide}
                </span>
              ))}
            </div>
          </div>
          {/* Filters Button */}
          <div
            onClick={() => {
              setFilter(!filter);
              timeFrameAnimate ? setTimeFrameAnimate(!timeFrameAnimate) : "";
            }}
            className="flex cursor-pointer items-center justify-center gap-2 rounded-full border border-gray-200 px-4 py-2"
          >
            <IoFilter />
            <h1 className="text-sm">Filters</h1>
          </div>
        </div>
        <hr className="mt-2 mb-4 h-1 text-gray-200 lg:hidden" />

        <div className="scrollbar-hide overflow-x-scroll px-4 lg:hidden">
          <div className="flex items-center gap-2">
            {cardSlider.map((slide, idx) => (
              <span
                key={idx}
                onClick={() => setSelectedSlider(slide)}
                className={` ${seletedSlider === slide && "bg-gray-100"} rounded-full px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-all duration-200 hover:cursor-pointer hover:text-gray-600`}
              >
                {slide}
              </span>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {filter && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="relative z-0 mt-7 flex flex-col gap-5 px-5 min-[1200px]:px-18 lg:flex-row lg:justify-between"
            >
              <div className="flex-1">
                <h1 className="text-sm font-semibold tracking-tighter">Tags</h1>
                <div className="mt-2 flex items-center justify-between gap-2 rounded-lg border border-gray-300/60 px-3 py-3.5 focus-within:border-pink-300">
                  <FaSearch className="h-4 w-4 text-gray-400" />
                  <input type="text" className="flex-1 outline-none" />
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-sm font-semibold tracking-tighter">
                  Color
                </h1>
                <div className="mt-2 flex items-center justify-between gap-2 rounded-lg border border-gray-300/60 px-3 py-3.5 focus-within:border-pink-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    role="img"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <mask
                      id="mask0"
                      masktype="alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="20"
                      height="21"
                    >
                      <circle cx="10" cy="10.5" r="10" fill="#C4C4C4"></circle>
                    </mask>
                    <g mask="url(#mask0)">
                      <rect
                        x="10"
                        y="0.5"
                        width="10"
                        height="20"
                        fill="#3A8BBB"
                      ></rect>
                      <path
                        d="M20 4.5L10 -2.5V10.5L20 4.5Z"
                        fill="#00B6E3"
                      ></path>
                      <path
                        d="M20 16.5L10 24.5V10.5L20 16.5Z"
                        fill="#C142A0"
                      ></path>
                      <path
                        d="M0 0.5H10V10.5L0 16.5V0.5Z"
                        fill="#FCC870"
                      ></path>
                      <path d="M-7 0.5H10V10.5L-7 0.5Z" fill="#EF875B"></path>
                      <path
                        d="M0 16.5L10 24.5V10.5L0 16.5Z"
                        fill="#FF5555"
                      ></path>
                    </g>
                    <circle cx="10" cy="10.5" r="3" fill="#F5F6F7"></circle>
                  </svg>

                  <input
                    type="text"
                    placeholder="Enter hex or select"
                    className="flex-1 outline-none placeholder:tracking-tight"
                  />
                </div>
              </div>

              <div className="relative z-10 flex-1">
                <h1 className="text-sm font-semibold tracking-tighter">
                  Timeframe
                </h1>
                <div
                  onClick={() => setTimeFrameAnimate(!timeFrameAnimate)}
                  className="mt-2 flex items-center justify-between gap-2 rounded-lg border border-gray-300/60 px-3 py-3.5"
                >
                  <h1 className="text-sm font-medium">{timeFrame}</h1>
                  <motion.span
                    animate={{ rotate: timeFrameAnimate ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IoIosArrowDown />
                  </motion.span>

                  {timeFrameAnimate && (
                    <div className="absolute top-24 left-0 z-50 flex w-full flex-col rounded-lg border border-gray-200 bg-white p-3 shadow-md">
                      {timeFrameSlide.map((slide, idx) => (
                        <div
                          onClick={() => setTimeFrame(slide)}
                          key={idx}
                          className={`flex items-center justify-between rounded-md ${timeFrame === slide && "bg-gray-100"} p-3 pr-4`}
                        >
                          <span className="text-xs font-medium">{slide}</span>
                          {timeFrame === slide ? (
                            <FaCheck className="h-3 w-3" />
                          ) : (
                            ""
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Filters;
