import React from "react";
import { Play } from "lucide-react";

export default function PabloStory() {
  return (
    <div className="flex flex-col gap-8 px-5 py-15 lg:flex-row lg:gap-15 lg:px-10 xl:pl-30">
      <div className="h-110 min-[500px]:w-120">
        <img
          className="h-full w-full rounded-xl object-cover"
          src="https://framerusercontent.com/images/9JL1Ku5eleoWhfQQ0K9S7pjvQ.png?scale-down-to=1024&width=1280&height=720"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-5 px-3 lg:w-1/2 lg:gap-7">
        <h1 className="text-[1.4rem] leading-8 font-bold tracking-tight lg:text-3xl lg:leading-12 xl:text-[1.8rem] xl:leading-13">
          "With just an internet connection and some design skills, creators can
          make a living from anywhere in the world no matter their race gender,
          or background."
        </h1>
        <div className="items-center gap-3 min-[400px]:flex">
          <p className="text-[1.1rem] font-medium lg:text-[1.2rem]">
            Pablo Staney -
          </p>
          <p className="mt-1 text-[1.1rem] font-medium text-neutral-500 lg:text-[1.2rem]">
            Cofounder @ Bueno
          </p>
        </div>
        <div className="flex w-65 items-center justify-center gap-3 rounded-full border py-3">
          <Play size={14} fill="black" />
          <button className="text-sm font-bold lg:text-[0.9rem]">
            Watch Pablo's story
          </button>
        </div>
      </div>
    </div>
  );
}
