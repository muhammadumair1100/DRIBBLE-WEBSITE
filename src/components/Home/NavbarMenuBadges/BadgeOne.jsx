import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { TrendingUp, Sparkles } from "lucide-react";

const BadgeOne = () => {
  return (
    <>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden bg-white min-[1200px]:rounded-lg min-[1200px]:px-7 min-[1200px]:pb-5 min-[1200px]:shadow-xl"
      >
        <div className="relative">
          <div className="flex flex-col gap-8 py-6">
            <Link
              to="/popular"
              className="flex items-center gap-2 hover:cursor-pointer hover:text-neutral-500"
            >
              <TrendingUp strokeWidth={1.5} className="size-5" />
              <span className="font-semibold tracking-tight">Popular</span>
            </Link>
            <Link
              to="/noteworthy"
              className="flex items-center gap-2 hover:cursor-pointer hover:text-neutral-500"
            >
              <Sparkles strokeWidth={1.5} color="black" className="size-5" />
              <span className="font-semibold tracking-tight">
                New and Noteworthy
              </span>
            </Link>
          </div>
          <div className="h-[0.5px] w-[30%] bg-neutral-300 min-[1200px]:w-full"></div>
        </div>
        <Products key={1} />
      </motion.div>
    </>
  );
};

export default BadgeOne;

const Products = () => {
  const products = [
    "Product Design",
    "Web Design",
    "Animation",
    "Branding",
    "Illustration",
    "Mobile",
    "Typography",
    "Print",
  ];

  return (
    <div className="mt-8 flex flex-col gap-7">
      {products.map((p, index) => (
        <Link
          to={"/" + p.toLowerCase().replace(/\s+/g, "-")}
          key={index}
          className="text-sm font-medium text-neutral-900 hover:cursor-pointer hover:text-neutral-500"
        >
          {p}
        </Link>
      ))}
    </div>
  );
};
