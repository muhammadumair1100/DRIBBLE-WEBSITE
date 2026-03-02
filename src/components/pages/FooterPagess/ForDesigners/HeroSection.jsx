import React from "react";

const HeroSection = () => {
  return (
    <div className="mt-10 flex w-full flex-col gap-15 px-5 pt-35 pb-20 min-[800px]:flex-row min-[800px]:items-center min-[800px]:justify-center min-[800px]:gap-15 min-[800px]:px-10 min-[1200px]:px-25 lg:gap-25 xl:gap-40 xl:px-35">
      <div className="flex flex-col gap-3 min-[800px]:w-1/2 min-[800px]:gap-6">
        <p className="text-md font-semibold text-pink-600">FOR DESIGNERS</p>
        <h1 className="w-full text-3xl leading-10 font-semibold min-[800px]:text-[2.5rem] min-[800px]:leading-12 min-[1100px]:text-5xl lg:leading-18 xl:text-6xl">
          Join the world’s best creative community
        </h1>
        <p className="text-base font-medium text-neutral-700">
          Build your brand, grow your skills, and land your dream projects all
          on Dribbble.
        </p>
        <div className="mt-7 flex flex-col items-center gap-3 min-[800px]:flex-row min-[800px]:gap-7">
          <button className="w-full rounded-full bg-black px-12 py-4 text-sm font-bold text-white min-[800px]:px-4">
            Create your profile
          </button>
          <p className="font-medium whitespace-nowrap underline">
            Hiring designers?
          </p>
        </div>
      </div>

      <div className="h-60 w-full min-[800px]:h-80 min-[800px]:w-1/2 lg:h-120">
        <img
          className="h-full w-full object-cover"
          src="https://framerusercontent.com/images/oHWBQ3m2oZWMapz6XUB87ec4bnQ.jpeg?scale-down-to=1024&width=1844&height=1229"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
