import React from "react";

const Filter = ({ image, title, heading }) => {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-6">
        <div className="flex w-full items-center justify-center gap-6 px-4">
          <div className="h-[1.5px] w-full bg-neutral-200"></div>
          <div className="size-16 shrink-0 sm:size-18">
            <img src={image} alt="" className="size-full rounded-full" />
          </div>
          <div className="h-[1.5px] w-full bg-neutral-200"></div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-3 pb-10">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-sm font-medium">{heading}</p>
          <button className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white">
            Work with us
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
