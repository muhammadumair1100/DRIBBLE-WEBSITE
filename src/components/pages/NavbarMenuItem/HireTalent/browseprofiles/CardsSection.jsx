import React from "react";
import { useState } from "react";
import {
  Check,
  Star,
  CircleDollarSign,
  MapPin,
  Clock,
  SquareLibrary,
  Bookmark,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { BrowseData } from "./BrowseData";

const Cards = () => {
  const [status, setStatus] = useState(null);
  const [designer, setDesigner] = useState(null);
  const [promote, setPromote] = useState(null);

  const items = [
    "ui ux design",
    "figma",
    "logo",
    "landing page",
    "web design",
    "saas ui",
  ];
  return (
    <div className="mt-5 flex flex-col gap-12 overflow-hidden px-0 py-10 md:px-10">
      {/* card  */}
      {BrowseData.map((data, index) => (
        <div
          key={index}
          className="flex w-full flex-col gap-2 border border-neutral-200 px-5 py-7 transition-all duration-300 hover:cursor-pointer hover:shadow-[0_0_40px_rgba(0,0,0,0.1)] md:gap-5 md:rounded-lg"
        >
          {/* headings */}
          <div className="flex w-full items-center justify-between">
            <div className="flex w-full gap-2 lg:gap-5">
              <div className="relative h-15 w-17.5 rounded-full min-[500px]:h-16">
                <img
                  src="https://cdn.dribbble.com/users/2959364/avatars/normal/9afda620bf04b40ab310d16dbce65a2f.png?1696939287"
                  alt=""
                  className="h-full w-full rounded-full object-cover"
                />

                {status === index && (
                  <div
                    className={`absolute top-4 -right-17 rounded-lg bg-white p-2.5 text-sm shadow-sm`}
                  >
                    Online
                  </div>
                )}
                {data.status && (
                  <div
                    onMouseEnter={() => setStatus(index)}
                    onMouseLeave={() => setStatus(null)}
                    className="absolute right-0 bottom-1.5 size-3 rounded-full border-2 border-white bg-green-500"
                  ></div>
                )}
              </div>
              <div className="flex w-full flex-col gap-2">
                <div className="flex flex-col gap-1 min-[500px]:flex-row md:gap-3 lg:items-center">
                  <div className="flex items-center gap-2">
                    <h1 className="text-sm font-semibold tracking-tight hover:text-neutral-500 md:text-lg">
                      Musemind
                    </h1>
                    <span className="rounded-sm bg-black px-1 py-0.5 text-[9px] font-extrabold text-white uppercase">
                      pro
                    </span>
                    {data.promoted && (
                      <div>
                        <div className="relative min-[500px]:hidden">
                          {promote === index && (
                            <div
                              onMouseLeave={() => setPromote(null)}
                              className="absolute -top-15 -right-20 flex gap-1 rounded-lg bg-white p-3 text-sm font-medium whitespace-nowrap shadow transition-all duration-300"
                            >
                              <span className="underline">Learn more</span>
                              <p>about Promoting Listings.</p>
                            </div>
                          )}
                          <p
                            onMouseEnter={() => setPromote(index)}
                            className="text-[10px] font-bold text-neutral-400/80 hover:text-black"
                          >
                            Promoted
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <span>
                        <Star size={13} strokeWidth={3} fill="black" />
                      </span>
                      <span className="text-sm font-semibold">
                        {data.rating}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>
                        <Check strokeWidth={4} size={15} />
                      </span>

                      <span className="hidden text-xs font-semibold tracking-tight whitespace-nowrap min-[500px]:block lg:block lg:text-sm">
                        {data.projects} Projects-completed
                      </span>
                      <span className="text-xs font-semibold tracking-tight min-[500px]:hidden lg:text-sm">
                        {data.projects} projects
                      </span>
                    </div>

                    {data.promoted && (
                      <div className="relative hidden min-[500px]:block">
                        {promote === index && (
                          <div
                            onMouseLeave={() => setPromote(null)}
                            className="absolute -top-13 -right-10 flex gap-1 rounded-lg bg-white p-3 text-sm font-medium whitespace-nowrap shadow transition-all duration-300 md:-right-65 md:-translate-x-1/2"
                          >
                            <span className="underline">Learn more</span>
                            <p>about Promoting Listings.</p>
                          </div>
                        )}
                        <p
                          onMouseEnter={() => setPromote(index)}
                          className="text-xs font-bold text-neutral-400/80 hover:text-black"
                        >
                          Promoted
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 tracking-tight md:space-x-4 lg:items-center">
                  <div className="flex items-center gap-1 text-neutral-700">
                    <span>
                      <CircleDollarSign size={18} />
                    </span>
                    <span className="text-sm font-medium">
                      From ${data.hourlyRate}/project
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-neutral-700">
                    <span>
                      <MapPin size={18} />
                    </span>
                    <span className="text-sm font-medium">{data.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-neutral-700">
                    <span>
                      <Clock size={18} />
                    </span>
                    <span className="text-sm font-medium">
                      {data.responsedTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-neutral-700 hover:underline">
                    <span>
                      <SquareLibrary size={18} />
                    </span>
                    <span className="text-sm font-medium">
                      {data.availabServices} Services available
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden items-center gap-3 md:flex">
              <div className="relative">
                {designer === index && (
                  <div className="absolute -top-13 left-1/2 -translate-x-1/2 rounded-lg bg-white p-3 text-sm font-medium whitespace-nowrap shadow-sm transition-all duration-300">
                    Save Designer
                  </div>
                )}
                <div
                  onMouseEnter={() => setDesigner(index)}
                  onMouseLeave={() => setDesigner(null)}
                  className="rounded-full border border-neutral-300 p-3"
                >
                  <Bookmark size={15} />
                </div>
              </div>
              <button className="rounded-full bg-black px-4 py-2.5 text-sm font-medium tracking-tighter whitespace-nowrap text-white hover:cursor-pointer hover:bg-black/80">
                Get in touch
              </button>
            </div>
          </div>
          {/* images  */}

          <div
            style={{ scrollbarWidth: "none" }}
            className="relative flex w-full flex-nowrap gap-3 overflow-auto"
          >
            {data?.images?.map((img, index) => (
              <div
                key={index}
                className="h-48 w-64 shrink-0 overflow-hidden rounded-lg lg:shrink"
              >
                <img
                  className="h-full w-full rounded-lg object-center transition-all duration-500 hover:scale-105"
                  src={img}
                  alt=""
                />
              </div>
            ))}
          </div>
          {/* footer  */}
          <div className="flex flex-col flex-wrap gap-2">
            <div className="flex flex-wrap gap-2">
              {data.webflowExperts && (
                <div className="flex w-33 items-center justify-center gap-1 rounded-full bg-black/80 px-4 py-1.5 hover:bg-black/70">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="15"
                      height="15"
                      viewBox="0 0 48 48"
                    >
                      <circle cx="24" cy="24" r="20" fill="#1976d2"></circle>
                      <path
                        fill="#fff"
                        d="M30.1,21.43c0,0-1.73,5.42-1.86,5.88c-0.05-0.46-1.31-10.2-1.31-10.2c-2.95,0-4.52,2.09-5.35,4.32 c0,0-2.1,5.44-2.27,5.9c-0.01-0.43-0.32-5.84-0.32-5.84c-0.18-2.72-2.66-4.37-4.67-4.37l2.42,14.76c3.09-0.01,4.75-2.1,5.62-4.32 c0,0,1.85-4.8,1.93-5.02c0.02,0.21,1.33,9.34,1.33,9.34c3.09,0,4.76-1.96,5.66-4.1l4.32-10.67C32.54,17.11,30.93,19.2,30.1,21.43z"
                      ></path>
                    </svg>
                  </span>
                  <p className="text-[10px] font-bold whitespace-nowrap text-white">
                    Webflow Expert
                  </p>
                </div>
              )}

              <ul className="flex flex-wrap gap-2">
                {data.items.map((item, index) => (
                  <li
                    className={`rounded-full ${index < 2 ? "block" : ""} ${index >= 2 && index < 4 ? "hidden md:block" : ""} ${index >= 4 ? "hidden xl:block" : ""} bg-neutral-200/55 px-3 py-1 text-sm whitespace-nowrap hover:bg-white`}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div>
                <span className="text-sm font-medium text-neutral-400 underline">
                  +{data.skills} skills
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <div className="relative order-2">
                {designer === index && (
                  <div className="absolute -top-13 left-1/2 -translate-x-1/2 rounded-lg bg-white p-3 text-sm font-medium whitespace-nowrap shadow-sm transition-all duration-300">
                    Save Designer
                  </div>
                )}
                <div
                  onMouseEnter={() => setDesigner(index)}
                  onMouseLeave={() => setDesigner(null)}
                  className="flex size-11 items-center justify-center rounded-full border border-neutral-300 p-3"
                >
                  <Bookmark size={15} />
                </div>
              </div>
              <button className="rounded-full bg-black px-4 py-2.5 text-sm font-medium tracking-tighter text-white hover:cursor-pointer hover:bg-black/80">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
