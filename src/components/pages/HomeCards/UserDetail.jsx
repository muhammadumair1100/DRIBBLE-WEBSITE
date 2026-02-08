import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Heart,
  Bookmark,
  Mail,
  Download,
  MessageCircle,
  CircleAlert,
} from "lucide-react";
import Filter from "./Filter";

function UserDetail() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollContainerRef = useRef(null);
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const container = scrollContainerRef.current;

    const handleScroll = () => {
      if (container) {
        setIsScrolled(scrollContainerRef.current.scrollTop > 122);
      }
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [isScrolled]);

  useEffect(() => {
    async function fetchData() {
      try {
        const promise = await fetch("/homedata.json");
        const apiData = await promise.json();

        const match = apiData.find(
          (m) => m.heading.replace(/\s+/g, "-") === id,
        );

        setData(match);

        console.log(match);
      } catch (err) {
        console.log("Data was not received...", err);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <div
        ref={scrollContainerRef}
        className={`relative flex flex-col gap-8 overflow-y-auto min-[930px]:px-25 xl:px-40`}
      >
        <h1 className="px-4 text-xl font-semibold tracking-tight min-[500px]:text-2xl lg:mt-20">
          {data?.heading}
        </h1>
        <div
          className={`${isScrolled && "sticky inset-x-0 top-0 py-2 "}bg-white z-50 flex justify-between px-4`}
        >
          <div className="flex items-center gap-3">
            <div className="size-8 min-[500px]:size-12">
              <img
                src={data?.userImage}
                alt=""
                className="size-full rounded-full"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xs font-semibold min-[500px]:text-sm">
                {data?.title}
              </p>
              <p className="truncate text-[10px] text-green-600 min-[500px]:text-xs">
                Available for work
              </p>
              <p className="hidden text-neutral-600">Follow</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-full border border-neutral-200 p-2 lg:p-3">
              <Heart size={15} />
            </div>
            <div className="rounded-full border border-neutral-200 p-2 lg:p-3">
              <Bookmark size={15} />
            </div>
            <button className="rounded-full bg-black p-2 font-semibold tracking-tight text-white min-[500px]:px-3 lg:px-5 lg:py-3">
              <span className="hidden text-xs min-[500px]:block lg:text-sm">
                Get in touch
              </span>
              <Mail size={15} className="min-[500px]:hidden" />
            </button>
          </div>
        </div>

        <div
          className={`relative flex flex-col items-center justify-center gap-7 pb-25 md:px-4`}
        >
          <div className="h-full w-full">
            <img
              src={data?.image}
              alt={data?.heading}
              className="size-full rounded-md object-center"
            />
          </div>
          <div className="flex flex-col gap-7 px-6 md:px-0 lg:px-25 xl:px-40">
            <p className="text-md leading-7 font-normal min-[500px]:font-medium md:text-lg md:font-normal xl:text-xl">
              Rollforward is a SaaS platform that automates the financial
              rollforward process for institutional investors.
            </p>
            <p className="text-md leading-7 font-normal min-[500px]:font-medium md:text-lg md:font-normal xl:text-xl">
              The logo is built from a simple lowercase “r”, the initial of the
              brand. This base form is multiplied and rotated, creating a visual
              sense of rolling motion, continuity, and forward momentum.
            </p>
            <p className="text-md leading-7 font-normal min-[500px]:font-medium md:text-lg md:font-normal xl:text-xl">
              As the elements rotate, the mark begins to read as arrows moving
              in a circular system, a direct reference to the rollforward
              concept: connecting reporting periods, carrying key metrics
              forward, and showing how a business evolves over time.
            </p>
            <p className="text-md leading-7 font-normal min-[500px]:font-medium md:text-lg md:font-normal xl:text-xl">
              The identity is designed to communicate: • Clarity and trust •
              Precision and intelligence • Velocity without chaos. A minimal
              core shape expanded into a scalable, system-driven mark that works
              across product UI, decks, and digital touchpoints.
            </p>
          </div>

          <div className="absolute right-1/2 bottom-5 flex translate-x-1/2 gap-2 lg:top-20 lg:-right-18 lg:flex-col lg:gap-4 xl:-right-32">
            <div className="rounded-full border border-neutral-300/80 p-2.5 lg:hidden">
              <Heart size={15} />
            </div>
            <div className="rounded-full border border-neutral-300/80 p-2.5 lg:hidden">
              <Bookmark size={15} />
            </div>
            <div className="rounded-full border border-neutral-300/80 p-2.5 lg:order-2">
              <Download size={15} />
            </div>
            <div className="relative w-fit rounded-full border border-neutral-300/80 p-2.5 lg:order-1">
              <MessageCircle size={15} />
              <span className="absolute -top-2 -right-2 flex h-2 w-2 items-center justify-center rounded-full border border-neutral-300 bg-white p-2.5 text-[10px] font-semibold">
                2
              </span>
            </div>
            <div className="rounded-full border border-neutral-300/80 p-2.5 lg:order-3">
              <CircleAlert size={15} />
            </div>
          </div>
        </div>
        <Filter
          image={data?.userImage}
          title={data?.title}
          heading={data?.heading}
        />
      </div>
    </>
  );
}

export default UserDetail;
