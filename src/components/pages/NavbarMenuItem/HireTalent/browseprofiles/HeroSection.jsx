import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  SlidersHorizontal,
  Sparkles,
  MoveRight,
  X,
} from "lucide-react";

const HeroSection = () => {
  const [scroll, setScroll] = useState(0);
  const [filter, setFilter] = useState(true);

  if (filter) {
    document.body.style.overflow = "hidden";
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScroll(scrollY);
      console.log(scroll);
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
        className={`${scroll > 400 ? "fixed top-26 z-100 pb-3" : "relative"} w-full bg-white transition-all duration-500`}
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
      {filter && <Filter />}
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

const Filter = () => {
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
  return (
    <div className="fixed top-1/2 left-1/2 z-100 h-[95vh] w-[450px] -translate-1/2 rounded-xl bg-white shadow-[0_0_20px_rgba(0,0,0,0.5)]">
      <div
        style={{ scrollbarWidth: "none" }}
        className="flex h-full flex-col gap-5 overflow-auto"
      >
        <div className="relative rounded-t-xl border-b border-neutral-200 bg-white py-5">
          <h1 className="text-center font-semibold">Filters</h1>
          <span className="absolute top-6 right-6">
            <X size={17} />
          </span>
        </div>
        <div className="px-10">
          <h1 className="text-sm font-bold">Categories</h1>
          <ul className="mt-2 grid grid-cols-2 gap-2 text-center">
            {categories.map((category, index) => (
              <li
                key={index}
                className="rounded-full border border-neutral-200/90 py-1.5 text-xs"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="absolute bottom-0 w-full bg-gray-100 py-5 text-center">
        <button className="w-[80%] rounded-full bg-black py-3.5 text-sm font-semibold text-white hover:cursor-pointer hover:bg-black/75">
          Apply
        </button>
      </div>
    </div>
  );
};
