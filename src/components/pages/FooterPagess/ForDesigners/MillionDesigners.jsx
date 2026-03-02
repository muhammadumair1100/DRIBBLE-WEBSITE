import React from "react";
import { motion } from "framer-motion";

const MillionDesigners = () => {
  return (
    <div>
      <div className="flex w-full flex-col gap-5 px-5 min-[800px]:mt-10 min-[800px]:px-10 min-[1100px]:w-2/3 min-[1200px]:px-25 xl:mt-15 xl:px-35">
        <h1 className="text-[1.3rem] leading-8 font-bold text-neutral-700 min-[800px]:text-2xl">
          Where millions of designers learn, share, and get hired
        </h1>
        <p className="font-medium min-[800px]:leading-7">
          Since 2009, Dribbble has been the go-to destination for millions of
          designers worldwide to find {""}
          <a href="" className="underline">
            inspiration
          </a>{" "}
          , grow their portfolios, connect with{" "}
          <a href="" className="underline">
            top talent
          </a>{" "}
          and find {""}
          <a href="" className="underline">
            new opportunities
          </a>{" "}
          . Whether you're a new designer or a seasoned pro, join the millions
          of designers who started and grew a successful design career on
          Dribbble.
        </p>
      </div>
      <Marques />
    </div>
  );
};

const Marques = () => {
  const left = [
    "https://framerusercontent.com/images/5HIDKQW1h1ayPJADT6QYSAZc5Y.png?scale-down-to=512&width=573&height=381",
    "https://framerusercontent.com/images/5HIDKQW1h1ayPJADT6QYSAZc5Y.png?scale-down-to=512&width=573&height=381",
    "https://framerusercontent.com/images/5HIDKQW1h1ayPJADT6QYSAZc5Y.png?scale-down-to=512&width=573&height=381",
    "https://framerusercontent.com/images/5HIDKQW1h1ayPJADT6QYSAZc5Y.png?scale-down-to=512&width=573&height=381",
    "https://framerusercontent.com/images/5HIDKQW1h1ayPJADT6QYSAZc5Y.png?scale-down-to=512&width=573&height=381",
    "https://framerusercontent.com/images/5HIDKQW1h1ayPJADT6QYSAZc5Y.png?scale-down-to=512&width=573&height=381",
    "https://framerusercontent.com/images/5HIDKQW1h1ayPJADT6QYSAZc5Y.png?scale-down-to=512&width=573&height=381",
    "https://framerusercontent.com/images/5HIDKQW1h1ayPJADT6QYSAZc5Y.png?scale-down-to=512&width=573&height=381",
    "https://framerusercontent.com/images/5HIDKQW1h1ayPJADT6QYSAZc5Y.png?scale-down-to=512&width=573&height=381",
  ];
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        animate={{
          x: ["0%", "-50%"], // 0 se shuru ho kar pure width tak left jaye
        }}
        transition={{
          x: {
            repeat: Infinity, // Kabhi khatam na ho
            repeatType: "loop", // Seamless loop
            duration: 2, // Speed control (jitna bara number, utna slow)
            ease: "linear", // Ek jaisi speed (smooth feel ke liye)
          },
        }}
        className="flex w-full gap-10 pr-10"
      >
        {[...left, ...left].map((image, index) => (
          <div className="h-60 shrink-0">
            <img
              key={index}
              src={image}
              className="h-full w-full object-center"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MillionDesigners;
