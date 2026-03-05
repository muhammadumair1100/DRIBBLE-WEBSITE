import React from "react";

export default function VideoText({
  videoSrc,
  title,
  para1,
  para2,
  btn,
  reverse = false,
}) {
  return (
    <div
      className={`flex flex-col gap-10 ${reverse ? "lg:flex-row-reverse " : "lg:flex-row"} mt-5 px-5 pt-25 lg:items-center lg:gap-15 lg:px-10 xl:px-30`}
    >
      <div className="min-[800px]:order-1">
        <div
          className={`rounded-2xl ${reverse ? "bg-linear-to-r from-[#def5ff] to-[#f0d9ff]" : "bg-linear-to-r from-[#feeec2] to-[#f6d4ff]"} p-4 min-[800px]:w-[640px] min-[800px]:p-7 lg:w-[540px] xl:w-[650px] xl:p-8`}
        >
          <video
            className="rounded-xl"
            autoPlay
            playsInline
            loop
            preload="auto"
            muted
            src={videoSrc}
          ></video>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-semibold text-neutral-600 lg:text-[1.7rem]">
          {title}
        </h1>
        <p className="font-medium lg:text-lg">{para1}</p>
        <p className="font-medium lg:text-lg lg:leading-9">{para2}</p>
        <button className="rounded-full border py-3.5 font-semibold min-[800px]:w-50">
          {btn}
        </button>
      </div>
    </div>
  );
}
