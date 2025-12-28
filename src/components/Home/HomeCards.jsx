import React from "react";
import { cards } from "./Homecard";
import { GoHeartFill } from "react-icons/go";
import { TbEyeFilled } from "react-icons/tb";
import { LuHeart } from "react-icons/lu";
import { LuMessagesSquare } from "react-icons/lu";

const HomeCards = () => {
  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num;
  };
  return (
    <div className="relative z-0">
      <div className="mt-5 grid gap-8 px-6 min-[600px]:grid-cols-2 min-[950px]:grid-cols-3 min-[1200px]:px-18 xl:grid-cols-4 xl:px-18">
        {cards.map((card, idx) => (
          <div key={idx} className="flex flex-col gap-2">
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
            <div className="flex justify-between gap-2">
              <div className="flex items-center gap-1">
                <img
                  src={card.userImage}
                  alt=""
                  className="h-6.5 w-6.5 rounded-full"
                />
                <h1 className="flex-1 truncate text-sm font-medium">
                  {card.title}
                </h1>

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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCards;
