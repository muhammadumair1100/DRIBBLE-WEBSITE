import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cards } from "./Homecard";
import { GoHeartFill } from "react-icons/go";
import { TbEyeFilled } from "react-icons/tb";
import { LuHeart } from "react-icons/lu";
import { LuMessagesSquare } from "react-icons/lu";

const HomeCards = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [columns, setColumns] = useState(0);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num;
  };

  window.addEventListener("click", () => {
    const height = window.innerHeight;
    console.log(height);
  });

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        setColumns(4);
      } else if (width >= 950) {
        setColumns(3);
      } else if (width >= 600) {
        setColumns(2);
      } else {
        setColumns(1);
      }
    };

    updateColumns();

    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const isLastInRow = (index) => {
    return (index + 1) % columns === 0;
  };

  return (
    <div className="relative z-0">
      <div className="mt-5 grid gap-8 px-6 min-[600px]:grid-cols-2 min-[950px]:grid-cols-3 min-[1200px]:px-18 xl:grid-cols-4 xl:px-18">
        {cards.map((card, index) => (
          <div
            key={index}
            onMouseLeave={() => setActiveCard(null)}
            className="flex flex-col gap-2"
          >
            <div className="group relative aspect-video w-full hover:cursor-pointer">
              <img
                src={card.image}
                alt=""
                className="h-full w-full rounded-md object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="absolute bottom-4 left-0 flex w-full items-center justify-between gap-2 px-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="overflow-hidden">
                  <h1 className="truncate text-sm font-semibold text-white">
                    {card.heading}
                  </h1>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-white p-3 hover:cursor-pointer hover:text-gray-600">
                    <LuMessagesSquare />
                  </span>
                  <span className="rounded-full bg-white p-3 hover:cursor-pointer hover:text-gray-600">
                    <LuHeart />
                  </span>
                </div>
              </div>
            </div>
            <div className="relative flex justify-between gap-2">
              <div className="flex items-center gap-1 hover:cursor-pointer">
                <div
                  onMouseEnter={() => setActiveCard(index)}
                  className="flex items-center gap-1"
                >
                  <img
                    src={card.userImage}
                    alt=""
                    className="h-6.5 w-6.5 rounded-full"
                  />
                  <h1 className="flex-1 truncate text-sm font-medium">
                    {card.title}
                  </h1>
                </div>

                <span className="rounded bg-gray-300 px-1 text-[9px] font-bold text-white uppercase hover:cursor-pointer hover:bg-black">
                  {card.premuim}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <span>
                    <GoHeartFill className="size-3.5 text-gray-400 hover:cursor-pointer hover:text-pink-300" />
                  </span>
                  <span className="text-[10.5px] font-medium">
                    {formatNumber(card.liked)}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span>
                    <TbEyeFilled className="size-3.5 text-gray-400" />
                  </span>
                  <span className="text-[10.5px] font-medium">
                    {formatNumber(card.viewed)}
                  </span>
                </div>
              </div>

              {/* hover on cards name to active new cards  */}
              <AnimatePresence>
                {activeCard === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`absolute bottom-9 ${isLastInRow(index) ? "-right-2" : "-left-2"} z-50 flex w-[500px] flex-col gap-5 rounded-lg bg-white p-6 text-black shadow-[2px_2px_20px_rgba(0,0,0,0.5)]`}
                  >
                    <div className="flex w-full items-center justify-between">
                      <div className="flex max-w-[200px] items-center gap-3">
                        <div className="relative hover:cursor-pointer">
                          <div className="h-13 w-14 rounded-full">
                            <img
                              src={card.image}
                              alt=""
                              className="h-full w-full rounded-full object-center"
                            />
                          </div>
                          <span
                            className={`absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-md px-1 text-center text-[9px] font-bold text-white uppercase ${card.premuim === "Pro" ? "bg-black" : "bg-neutral-300 hover:bg-black"}`}
                          >
                            {card.premuim}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-bold hover:cursor-pointer">
                            {card.title}
                          </p>
                          <p className="text-xs font-medium">{card.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button className="rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-black hover:cursor-pointer">
                          Follow
                        </button>
                        <button className="px- rounded-full border border-neutral-300 bg-black px-4 py-2.5 text-sm font-medium text-white hover:cursor-pointer hover:bg-black/70">
                          Get in touch
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-4 hover:cursor-pointer">
                      <div className="h-22 w-38 rounded-md">
                        <img
                          className="h-full w-full rounded-md object-center"
                          src={card.image}
                          alt=""
                        />
                      </div>
                      <div className="h-22 w-38 rounded-md">
                        <img
                          className="h-full w-full rounded-md object-center"
                          src={card.imageTwo}
                          alt=""
                        />
                      </div>
                      <div className="h-22 w-38 rounded-md">
                        <img
                          className="h-full w-full rounded-md object-center"
                          src={card.imageThree}
                          alt=""
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCards;
