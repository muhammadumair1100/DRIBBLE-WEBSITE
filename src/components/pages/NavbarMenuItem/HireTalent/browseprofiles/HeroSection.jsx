import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  SlidersHorizontal,
  Sparkles,
  MoveRight,
  X,
  Search,
  Star,
  CircleAlert,
} from "lucide-react";

const HeroSection = () => {
  const [scroll, setScroll] = useState(0);
  const [filter, setFilter] = useState(false);

  if (filter) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScroll(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]);

  const items = [
    "logo design",
    "landing page",
    "mobile page",
    "web design",
    "ux design",
    "branding",
    "social media",
    "illustration",
    "animation",
    "typography",
  ];
  const categories = ["Categories", "Budget", "Location", "Rating", "More"];
  return (
    <div className="mt-3 px-5 md:px-10">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-lg font-bold md:text-2xl">
            Hire Top Designers on Dribbble
          </h1>
          <p className="mt-1 text-xs font-normal text-neutral-600">
            Find creative professionals ready to work on your next project.
          </p>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-5 bg-linear-to-r from-white to-transparent lg:hidden" />
          <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-5 bg-linear-to-l from-white to-transparent lg:hidden" />

          <div
            style={{
              overflowX: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              display: "flex",
            }}
            className="flex w-full items-center gap-2 overflow-hidden"
          >
            <p className="text-xs">Popular:</p>
            <ul className="flex flex-1 gap-2">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="rounded-full border border-neutral-300 px-2 py-1.5 text-xs whitespace-nowrap hover:cursor-pointer hover:text-neutral-600"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full border border-neutral-100"></div>
      </div>
      <div
        className={`${scroll > 400 ? "fixed top-15 z-100 pb-3 lg:top-26" : "relative"} w-full bg-white transition-all duration-200`}
      >
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-5 bg-linear-to-r from-white to-transparent sm:hidden" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-5 bg-linear-to-l from-white to-transparent sm:hidden" />

        <div
          style={{
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            display: "flex",
          }}
          className="mt-4 flex items-center gap-2 overflow-x-scroll"
        >
          <div
            onClick={() => setFilter(true)}
            className="rounded-full border border-neutral-300 p-2.5 hover:cursor-pointer hover:border-neutral-400"
          >
            <SlidersHorizontal size={14} />
          </div>
          <ul className="flex gap-3">
            {categories.map((category) => (
              <li className="flex items-center gap-1 rounded-md border border-neutral-300 px-4 py-2 text-xs font-medium hover:cursor-pointer hover:border-neutral-400">
                {category}
                <span className="pt-px">
                  {<ChevronDown size={15} strokeWidth={2} />}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Banner />
      <AnimatePresence>
        {filter && <Filter filter={setFilter} />}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;

const Banner = () => {
  return (
    <div className="mt-5 flex w-full flex-col gap-3 rounded-xl bg-blue-50/80 px-4 py-9 hover:cursor-pointer md:flex-row md:gap-6">
      <motion.div
        animate={{
          borderColor: ["#0471A6", "#89AAE6", "#63A375", "#2CDA9D"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
        }}
        className="relative flex h-10 w-40 items-center justify-center gap-2 rounded-full border bg-white px-2 py-2.5"
      >
        <Sparkles size={15} color="purple" />
        <p className="text-xs font-semibold whitespace-nowrap">
          Start a project?
        </p>
        <span className="absolute -top-2 -right-2 rounded-xl bg-pink-500/90 px-1.5 py-0.5 text-[9px] font-extrabold text-white">
          NEW
        </span>
      </motion.div>
      <div className="flex flex-col gap-0.5">
        <h1 className="text-md hidden font-bold md:block">
          Hire faster with a Project Brief
        </h1>
        <div className="">
          <p className="text-sm leading-4 font-medium tracking-tighter text-gray-600">
            Generate a brief with AI, instantly connect with recommended top
            talent, and receive proposals within minutes
            <span>
              <MoveRight size={12} className="ml-1 inline text-gray-600" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

const Filter = ({ filter }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [location, setLocation] = useState("");
  const [selectedRating, setSelectedRating] = useState(null);
  const [otherFilters, setOtherFilters] = useState([
    { id: 1, title: "Available for work", switch: false },
    {
      id: 2,
      title: "Designer",
      switch: false,
      status: true,
      icone: <CircleAlert size={14} />,
    },
    {
      id: 3,
      title: "Responds Quickly",
      switch: false,
      icone: <CircleAlert size={14} />,
    },
    {
      id: 4,
      title: "Agencies",
      switch: false,
      icone: <CircleAlert size={14} />,
    },
  ]);
  const categories = [
    "Logo & Branding",
    "Web Design",
    "Illustration",
    "Product Design",
    "Mobile",
    "Animation",
    "Typography",
    "Print",
  ];

  const ratings = [4, 3, 2, 1];

  const handleOtherFilters = (id) => {
    setOtherFilters((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, switch: !item.switch } : item,
      ),
    );
  };

  return (
    <motion.div
      key={"wrapper"}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      exit={{ y: 10, opacity: 0 }}
      className="fixed top-1/2 left-1/2 z-[100] h-[95vh] w-[450px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl bg-white shadow-2xl"
    >
      {/* Header */}
      <div className="relative border-b border-neutral-200 bg-white py-5">
        <h1 className="text-center font-semibold">Filters</h1>
        <span
          onClick={() => filter(false)}
          className="absolute top-6 right-6 cursor-pointer"
        >
          <X size={17} />
        </span>
      </div>

      <div
        style={{ scrollbarWidth: "none" }}
        className="flex h-[calc(100%-140px)] flex-col gap-6 overflow-auto pb-10"
      >
        {/* Categories Section */}
        <div className="mt-5 border-b border-neutral-200 px-10 pb-6">
          <h1 className="text-sm font-bold">Categories</h1>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-center">
            {categories.map((category, index) => (
              <li
                key={index}
                className="cursor-pointer rounded-full border border-neutral-200 py-2 text-xs transition-all hover:bg-black hover:text-white"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Budget Section */}
        <div className="flex flex-col gap-5 border-b border-neutral-200 px-10 pb-6">
          <h3 className="text-sm font-bold">Budget</h3>

          <div className="relative h-2 w-full rounded-full bg-gray-200 hover:cursor-pointer">
            {/* 1. Dynamic Progress Bar (Handles ke beech ka color) */}
            <div
              className="absolute h-full rounded-full bg-indigo-100"
              style={{
                left: `${(minPrice / 10000) * 100}%`,
                right: `${100 - (maxPrice / 10000) * 100}%`,
              }}
            ></div>

            {/* 2. Min Price Input */}
            <input
              type="range"
              min="0"
              max="10000"
              value={minPrice}
              onChange={(e) =>
                setMinPrice(Math.min(Number(e.target.value), maxPrice - 500))
              }
              className="pointer-events-none absolute top-0 z-[20] h-full w-full appearance-none bg-transparent hover:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-neutral-300 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md"
            />

            {/* 3. Max Price Input */}
            <input
              type="range"
              min="0"
              max="10000"
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(Math.max(Number(e.target.value), minPrice + 500))
              }
              className="pointer-events-none absolute top-0 z-[30] h-full w-full appearance-none bg-transparent hover:cursor-pointer [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-neutral-300 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md"
            />
          </div>
          {/* Price Display Boxes */}
          <div className="mt-2 flex w-full justify-between">
            <div className="flex flex-col items-center gap-1">
              <span className="text-[11px] text-black">Minimum</span>
              <div
                className={`rounded-lg border border-neutral-200 px-6 py-3 text-xs font-medium ${minPrice > 0 ? "text-black" : "text-neutral-400"}`}
              >
                ${minPrice}
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-[11px] text-black">Maximum</span>
              <div
                className={`rounded-lg ${maxPrice < 10000 ? "text-black" : "text-neutral-400"} border border-neutral-200 px-6 py-3 text-xs font-medium`}
              >
                ${maxPrice}
              </div>
            </div>
          </div>
        </div>

        {/* location section  */}
        <div className="flex flex-col gap-3 border-b border-neutral-200 px-10 pb-6">
          <h1 className="text-sm font-bold">Location</h1>
          <div className="flex w-full items-center gap-3 rounded-lg border border-neutral-300 px-3 py-3.5 transition-all duration-200 hover:shadow-md">
            <span className="">
              <Search
                size={16}
                strokeWidth={1.5}
                className="text-neutral-500"
              />
            </span>
            <input
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              value={location}
              placeholder="Enter Location"
              className="w-full text-xs outline-none placeholder:text-xs placeholder:font-medium"
            />
            {location && (
              <span
                onClick={() => setLocation("")}
                className="rounded-full bg-black p-0.5 hover:cursor-pointer hover:bg-black/60"
              >
                <X size={12} className="text-white" />
              </span>
            )}
          </div>
        </div>

        {/* rating section   */}
        <div className="flex flex-col gap-3 border-b border-neutral-200 px-10 pb-6">
          <h1 className="text-sm font-bold">Rating</h1>
          <div className="5 flex flex-col gap-4">
            {ratings.map((rate) => (
              <label
                key={rate}
                className="group flex cursor-pointer items-center gap-3"
                onClick={() => setSelectedRating(rate)}
              >
                {/* Custom Radio Circle */}
                <div
                  className={`flex h-5 w-5 items-center justify-center rounded-full ${selectedRating === rate ? "border-6 border-pink-500/80" : "border border-gray-300 group-hover:border-gray-400"}`}
                ></div>

                {/* Stars Section */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className={` ${
                        index < rate
                          ? " fill-pink-500/80 stroke-pink-500/80"
                          : "fill-none stroke-neutral-300"
                      }`}
                    />
                  ))}
                  {rate < 5 && (
                    <span className="ml-1 text-xs text-gray-400">& Up</span>
                  )}
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 px-10">
          <h1 className="text-sm font-bold">Other Filters</h1>
          <div className="flex flex-col justify-center gap-2">
            {otherFilters.map((filter, index) => (
              <label
                onClick={() => handleOtherFilters(filter.id)}
                key={index}
                className="flex gap-5 hover:cursor-pointer"
              >
                <div
                  className={`relative h-5 w-9 rounded-xl transition-all duration-200 ${filter.switch ? "bg-pink-400" : "bg-gray-300"}`}
                >
                  <span
                    className={`absolute top-1/2 ${filter.switch ? "right-1" : "left-1"} h-4 w-4 -translate-y-1/2 rounded-full bg-white`}
                  ></span>
                </div>
                <div className="flex items-center gap-2">
                  {filter.status && (
                    <span className="rounded-sm bg-black px-1 text-[9px] font-extrabold text-white">
                      PRO
                    </span>
                  )}
                  <span className="text-xs font-normal">{filter.title}</span>
                  {filter.icone && <span>{filter.icone}</span>}
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Button */}
      <div className="absolute bottom-0 z-50 w-full border-t border-neutral-300 bg-white py-5 text-center">
        <button className="w-[80%] rounded-full bg-black py-3.5 text-sm font-semibold text-white hover:cursor-pointer hover:bg-neutral-700">
          Apply
        </button>
      </div>
    </motion.div>
  );
};
