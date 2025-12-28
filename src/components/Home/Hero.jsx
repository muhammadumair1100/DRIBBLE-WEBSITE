import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";

import "./Hero.css";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { CgBrowse } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { BsStars } from "react-icons/bs";
import { IoIosPause, IoIosPlay } from "react-icons/io";

const Hero = () => {
  const videoRef = useRef(null);

  const [activeItem, setActiveItem] = useState("Shots");
  const searchItems = ["Shots", "Designers", "Services"];
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showPlayPause, setShowPlayPause] = useState(false);

  const trendingItem = {
    Shots: ["dashboard", "landing page", "e-commerce", "logo", "card", "icons"],

    Designers: [
      "app design",
      "landing page",
      "web design",
      "dashboard",
      "logo design",
      "animation",
    ],

    Services: [
      "branding",
      "logo design",
      "mobile app",
      "illustration",
      "animation",
    ],
  };

  function handleVideoEnd() {
    setCurrentVideoIdx((currIdx) => (currIdx + 1) % videoLinks.length);
  }

  function handlePausePlay() {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  }

  const videoLinks = [
    {
      videoImg:
        "https://cdn.dribbble.com/users/1175956/avatars/normal/f8e8cca08706bfee3cda291733726ee8.jpg?1592208547",
      videoTitle: "Benjamin Zehidftr",
      videoLink:
        "https://cdn.dribbble.com/uploads/65454/original/3d47c346ad505c96ef0d2987ea972e76.mp4?1757355803",
    },
    {
      videoImg:
        "https://cdn.dribbble.com/users/10811931/avatars/normal/3b2f6bddc05011b9b001f54b36e71511.jpg?1685102759",
      videoTitle: "Angelika Ceborska",
      videoLink:
        " https://cdn.dribbble.com/uploads/65455/original/ac62a2fc19e57a12b57074daf22257ab.mp4?1757355858 ",
    },
    {
      videoImg:
        "https://cdn.dribbble.com/users/221329/avatars/normal/b26562c96a34358cb6042572b81d7a94.jpg?1588290013",
      videoTitle: "Rhox",
      videoLink:
        "https://cdn.dribbble.com/uploads/65456/original/ef8d2f9e371433f1fc9620fb33e6cd12.mp4?1757355882",
    },
    {
      videoImg:
        "https://cdn.dribbble.com/users/3562886/avatars/normal/fa16bfe21929cad65d6f96bcc20b7b61.jpeg?1756129633",
      videoTitle: "Xin Yan",
      videoLink:
        "https://cdn.dribbble.com/uploads/67248/original/8fb5011595aaf9b136acac0058bf587a.mp4?1765340200",
    },
    {
      videoImg:
        "https://cdn.dribbble.com/users/16100846/avatars/normal/4f9478f9f99048a2f9ac3e9f61a90775.png?1683374189",
      videoTitle: "Dmazing",
      videoLink:
        "https://cdn.dribbble.com/uploads/67237/original/d4432dc2031a2679a6ab6258be815c15.mp4?1765339787",
    },
    {
      videoImg:
        "https://cdn.dribbble.com/users/5049071/avatars/normal/58237f63651e4bccd84f2036d95e0c3e.png?1759932211",
      videoTitle: "Leandro Sosa",
      videoLink:
        "https://cdn.dribbble.com/uploads/67243/original/070de7ebbc5b2d3ac9fbdecadcfa2b42.mp4?1765339892",
    },
    {
      videoImg:
        "https://cdn.dribbble.com/users/4053754/avatars/normal/55dd34a2285fa77014068c00427eee21.png?1729855991",
      videoTitle: "Phenomenon Studio",
      videoLink:
        "https://cdn.dribbble.com/uploads/67238/original/82228fe85ee27b02514d94f31a7361e6.mp4?1765339805",
    },
    {
      videoImg:
        "https://cdn.dribbble.com/users/7142728/avatars/normal/1947d79d3d7042e06db9ca3cd55d93cb.png?1615062154",
      videoTitle: "QClay",
      videoLink:
        "https://cdn.dribbble.com/uploads/67240/original/bf59b044b5cc033aa485f901803f5a9d.mp4?1765339838",
    },
  ];

  return (
    <div>
      <div className="mt-5 flex items-center gap-28 px-3 min-[1200px]:px-12">
        <div className="flex w-full flex-col px-4 xl:w-2/4">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-center text-4xl leading-9 font-semibold tracking-tight md:text-start md:text-5xl md:leading-13">
              Discover the <br /> World's Top <br className="hidden" />{" "}
              Designers
            </h1>
            <p className="text-md mt-5 text-center leading-5 font-[450] text-gray-700 min-[530px]:w-[500px] md:text-start">
              Explore work from the most talented and accomplished designers
              ready to take on your next project.
            </p>
          </div>
          <div className="mt-10 flex flex-col items-center gap-3 md:items-start">
            <div className="gap-3f flex lg:gap-5">
              {searchItems.map((Item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveItem(Item)}
                  className={`flex ${activeItem === Item ? "bg-black/75 " : "hover:bg-gray-100"} cursor-pointer items-center gap-1.5 rounded-full px-4 py-2.5`}
                >
                  <span>
                    {Item === "Shots" ? (
                      <MdOutlineInsertPhoto
                        className={`h-5 w-5 ${activeItem === Item ? "text-white" : "text-black"}`}
                      />
                    ) : Item === "Designers" ? (
                      <GoPeople
                        className={`h-5 w-5 ${activeItem === Item ? "text-white" : "text-black"}`}
                      />
                    ) : Item === "Services" ? (
                      <CgBrowse
                        className={`h-5 w-5 ${activeItem === Item ? "text-white" : "text-black"}`}
                      />
                    ) : (
                      ""
                    )}
                  </span>
                  <span
                    className={` ${activeItem === Item ? "text-white" : "text-black"} text-sm font-medium font-semibold xl:text-xs`}
                  >
                    {Item}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex w-full items-center justify-between rounded-full bg-gray-100 px-2 py-2">
              <input
                type="text"
                placeholder={
                  activeItem === "Shots"
                    ? "What type of design are you interested in?"
                    : activeItem === "Designers"
                      ? "What type of designer do you need?"
                      : activeItem === "Services"
                        ? "What do you need designed?"
                        : "Search..."
                }
                className="w-full pl-2 text-xs font-medium text-black placeholder:text-black focus:outline-none"
              />
              <span className="rounded-full bg-pink-500/80 p-2.5 hover:cursor-pointer hover:bg-pink-400">
                <CiSearch className="h-5 w-5 text-white" />
              </span>
            </div>
            <div className="scrollbar-hide mt-2 flex w-full items-center gap-2 overflow-x-scroll overflow-y-hidden px-2">
              <span className="text-xs font-bold">Popular:</span>
              <div className="w-ful flex items-center gap-2 rounded">
                {trendingItem[activeItem].map((Item, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-gray-200 px-4 py-1.5 text-xs font-medium whitespace-nowrap text-black/80 hover:cursor-pointer hover:bg-gray-100 xl:px-2 xl:text-[11px]"
                  >
                    {Item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden xl:block">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentVideoIdx}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="inset-0 h-[400px] w-full"
            >
              <video
                onMouseEnter={() => setShowPlayPause(true)}
                onMouseLeave={() => setShowPlayPause(false)}
                ref={videoRef}
                autoPlay
                muted
                onEnded={handleVideoEnd}
                src={videoLinks[currentVideoIdx].videoLink}
                className="h-full w-full rounded-3xl"
              ></video>

              <div className="absolute right-3 bottom-3 flex items-center gap-2 rounded-full bg-white py-1 pr-5 pl-2 hover:cursor-pointer">
                <img
                  src={videoLinks[currentVideoIdx].videoImg}
                  alt=""
                  className="h-8 w-8 rounded-full"
                />
                <h1 className="text-xs font-medium">
                  {videoLinks[currentVideoIdx].videoTitle}
                </h1>
              </div>
            </motion.div>
          </AnimatePresence>
          <div
            onClick={handlePausePlay}
            onMouseEnter={() => setShowPlayPause(true)}
            onMouseLeave={() => setShowPlayPause(false)}
            className={`group absolute bottom-3 left-3 rounded-full bg-white p-3 hover:cursor-pointer ${showPlayPause ? "block" : "hidden"}`}
          >
            {isPlaying ? (
              // Agar video chal rahi hai, toh user ko rokne (PAUSE) ka option do
              <IoIosPause className="h-4 w-4 group-hover:text-pink-500" />
            ) : (
              // Agar video ruki hui hai, toh user ko chalaane (PLAY) ka option do
              <IoIosPlay className="h-4 w-4 group-hover:text-pink-500" />
            )}
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
};

export default Hero;

const Banner = () => {
  return (
    <div className="px-5 hover:cursor-pointer min-[1200px]:px-18">
      <div className="mt-10 gap-10 rounded-xl bg-gray-100/70 px-7 py-5 md:flex xl:py-4">
        <motion.div
          animate={{
            borderColor: ["#ef4444", "#3b82f6", "#10b981", "#ef4444"],
          }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="relative flex w-44 items-center justify-center gap-1 rounded-full border-2 bg-white py-3"
        >
          <span>
            <BsStars className="text-lg text-purple-500" />
          </span>
          <span className="text-sm font-semibold tracking-tighter md:text-xs">
            Get Matched Now
          </span>
          <span className="absolute -top-2 -right-3 rounded-full bg-pink-500 px-1.5 py-0.5 text-xs font-bold text-white">
            New
          </span>
        </motion.div>
        <p className="mt-3 text-sm font-medium xl:font-normal">
          Tell us what you need and instantly get matched with world-class
          talent ready to work on your project.
        </p>
      </div>
    </div>
  );
};
