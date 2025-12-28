import React, { useState } from "react";
import { motion } from "motion/react";

const Marque = () => {
  const [isPaused, setIsPaused] = useState(false);

  const marqueData = [
    {
      bgAfter: "#EDE9FE",
      bgBefore: "#D1FAE5",
      img: "https://cdn.dribbble.com/userupload/43200390/file/original-ade45dbb987e40dd76cad00f5cc7be23.png?crop=0x0-2400x1800&format=webp&resize=299x224&vertical=center",
      title: "Web Design",
    },
    {
      bgAfter: "#C5EBCD",
      bgBefore: "#C5CCEB",
      img: "https://cdn.dribbble.com/userupload/43838672/file/original-d6313eb40eac20ba2f4dd8638b3067cf.jpg?format=webp&resize=299x224&vertical=center",
      title: "Typography",
    },
    {
      bgAfter: "#ECE6F0",
      bgBefore: "#B1C4F0",
      img: "https://cdn.dribbble.com/userupload/44414028/file/390e010d2d59cba8e03a85bb5d7eb0b9.jpg?format=webp&resize=299x224&vertical=center",
      title: "Branding",
    },
    {
      bgAfter: "#EB94E7",
      bgBefore: "#9594EB",
      img: "https://cdn.dribbble.com/userupload/18410291/file/original-047ff577fbc3b854e7b36cc1ac015414.png?format=webp&resize=299x224&vertical=center",
      title: "Mobile",
    },
    {
      bgAfter: "#94EBA4",
      bgBefore: "#94E7EB",
      img: "https://cdn.dribbble.com/userupload/19949526/file/original-59a1205cd998243a556c11eb8450f4db.jpg?format=webp&resize=299x224&vertical=center",
      title: "Illustration",
    },
    {
      bgAfter: "#EBBD94",
      bgBefore: "#BB94EB",
      img: "https://cdn.dribbble.com/userupload/15833652/file/original-dedc7a68b8b2087b4a689bfdcdda5958.png?format=webp&resize=299x224&vertical=center",
      title: "Product Design",
    },
    {
      bgAfter: "#EB94D8",
      bgBefore: "#94EBE7",
      img: "https://cdn.dribbble.com/userupload/13056993/file/original-4c58dc4cf6722a29579a6aecb8a7c19e.jpg?format=webp&resize=299x224&vertical=center",
      title: "Print",
    },
    {
      bgAfter: "#9EEB94",
      bgBefore: "#EB9494",
      img: "https://cdn.dribbble.com/userupload/45061726/file/still-cfc1804383dd4aa5a4b61b5341304c30.png?format=webp&resize=299x224&vertical=center",
      title: "Animation",
    },
  ];

  return (
    <div className="w-full overflow-hidden py-5">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="mt-25 flex w-max gap-8 px-3 sm:mt-30 md:mt-40"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...marqueData, ...marqueData].map((marque, idx) => (
          <div
            key={idx}
            className="group relative shrink-0 hover:cursor-pointer"
          >
            {/* 1. After Layer (Sabse Peeche wala dabba) */}
            <div
              style={{ backgroundColor: marque.bgAfter }}
              className="absolute -z-20 h-36 w-48 translate-x-2.5 -translate-y-2.5 rounded-lg transition-all duration-300 group-hover:translate-x-3.5 group-hover:-translate-y-3.5"
            ></div>

            {/* 2. Before Layer (Darmayan wala dabba) */}
            <div
              style={{ backgroundColor: marque.bgBefore }}
              className="absolute -z-10 h-36 w-48 translate-x-1.5 -translate-y-1.5 rounded-lg border-2 border-white transition-all delay-100 duration-300 group-hover:translate-x-2.5 group-hover:-translate-y-2.5"
            ></div>

            {/* 3. Image Layer (Sabse upar) */}
            <div className="relative z-10 h-36 w-48">
              <img
                className="h-full w-full rounded-lg border-2 border-white object-cover"
                src={marque.img}
                alt={marque.title}
              />
            </div>

            {/* Title */}
            <div className="mt-3.5 text-xs font-semibold text-gray-800">
              {marque.title}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marque;
