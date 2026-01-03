import React from "react";
import { animate, motion } from "framer-motion";
import { SquareKanban, UsersRound, Tag } from "lucide-react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { IoBookOutline } from "react-icons/io5";

const BadgeTwo = ({ itemData, line1, line2, line3 }) => {
  const hireTalent = [
    {
      icone: <SquareKanban className="size-5" />,
      title: "Start Project Brief",
      line: "Get recommendations and proposals",
    },
    {
      icone: <UsersRound className="size-5" />,
      title: "Browse Profiles",
      line: "Find and message talent directly",
    },
    {
      icone: <Tag className="size-5" />,
      title: "Explore Services",
      line: "Hire quickly with pre-packaged services",
    },
  ];
  return (
    <div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden bg-white min-[1200px]:rounded-lg min-[1200px]:px-7 min-[1200px]:pb-5 min-[1200px]:shadow-2xl"
      >
        <div className="mt-7 flex flex-col gap-8">
          {(itemData || hireTalent).map((talent, index) => (
            <div key={index} className="group flex gap-2 hover:cursor-pointer">
              <div className="pt-0.5 group-hover:text-neutral-500">
                {talent.icone}
              </div>
              <div className="">
                <h1 className="text-sm font-semibold">{talent.title}</h1>
                <p className="mt-1 text-[13px] font-normal text-neutral-800">
                  {talent.line}
                </p>
              </div>
            </div>
          ))}
          <div className="mt-2 flex flex-col gap-7">
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-1 hover:cursor-pointer hover:text-neutral-600">
                <span className="text-sm font-semibold">
                  {line1 || "Post a Full-Time Job"}
                </span>
                <HiArrowNarrowRight className="size-3" />
              </p>

              {line2 && (
                <p className="flex items-center gap-1 hover:cursor-pointer hover:text-neutral-600">
                  <span className="text-sm font-semibold">{line2}</span>
                  <HiArrowNarrowRight className="size-3" />
                </p>
              )}
            </div>
            <div className="h-[0.5px] w-[30%] bg-neutral-300 min-[1200px]:w-full"></div>
            <div className="flex items-center gap-1">
              <IoBookOutline className="size-3.5" />
              <span className="text-xs text-neutral-700 hover:cursor-pointer hover:text-neutral-600 min-[1200px]:text-neutral-500">
                {line3 || "Learn more about how hiring works on Dribbble"}
              </span>
              <HiArrowNarrowRight className="size-3 text-neutral-500" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BadgeTwo;
