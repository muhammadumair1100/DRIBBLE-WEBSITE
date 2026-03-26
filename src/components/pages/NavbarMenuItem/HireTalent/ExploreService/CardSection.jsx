import { ChevronLeft, ChevronRight, Zap } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function CardSection() {
  const [cardData, setCardData] = useState([]);
  const [showArrow, setShowArrow] = useState(null);
  const [currentImg, setCurrentImg] = useState({});

  useEffect(() => {
    try {
      async function fetchData() {
        const res = await fetch("/services/service.json");
        const data = await res.json();
        setCardData(data);
      }
      fetchData();
    } catch (err) {
      console.log(`Failed Fetching Data : ${err}`);
    }
  }, []);

  function leftArrow(id, len) {
    if (currentImg[id]) {
      setNextPic({ ...currentImg, [id]: currentImg[id] - 1 });
    } else {
      setNextPic({ ...currentImg, [id]: len - 1 });
    }
  }

  function rightArrow(id, len) {
    if (currentImg[id]) {
      if (currentImg[id] === len - 1)
        return setNextPic({ ...currentImg, [id]: 0 });
      setNextPic({ ...currentImg, [id]: currentImg[id] + 1 });
    } else {
      setNextPic({ ...currentImg, [id]: 1 });
    }
  }

  return (
    <div className="grid gap-5 px-5 pt-10 md:grid-cols-2 md:gap-y-10 md:px-10 lg:grid-cols-3">
      {cardData.map((data, index) => (
        <div
          key={data.id}
          className="group flex flex-col gap-2 hover:cursor-pointer"
        >
          <div
            onMouseEnter={() => setShowArrow(index)}
            onMouseLeave={() => setShowArrow(null)}
            className="relative"
          >
            <img
              className="h-full w-full rounded-lg"
              src={data.images.at(currentImg[data.id])}
              alt={data.title}
            />
            <AnimatePresence>
              {showArrow === index && (
                <motion.div
                  onClick={() => leftArrow(data.id, data.images.length)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  exit={{ duration: 0.2, opacity: 0 }}
                  className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white p-1 shadow-[0_0_15px_5px_rgba(0,0,0,0.2)] hover:text-pink-500"
                >
                  <ChevronLeft size={16} />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showArrow === index && (
                <motion.div
                  onClick={() => rightArrow(data.id, data.images.length)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  exit={{ duration: 0.2, opacity: 0 }}
                  className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white p-1 shadow-[0_0_15px_5px_rgba(0,0,0,0.2)] hover:text-pink-500"
                >
                  <ChevronRight size={16} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold group-hover:text-black/60">
              {data.title}
            </h1>
            <div className="flex items-center gap-2">
              <div className="h-5 w-5">
                <img
                  className="h-full w-full rounded-full object-cover"
                  src={data.profileImage}
                  alt=""
                />
              </div>
              <span className="text-xs font-medium text-neutral-700">
                {" "}
                {data.name}{" "}
              </span>
              <span
                className={`rounded-sm ${data.plan ? "bg-black text-white hover:bg-black/70" : "bg-neutral-200 hover:bg-neutral-300"} px-1.5 py-0.5 text-[0.5rem] font-bold uppercase`}
              >
                {data.plan ? "pro+" : "pro"}
              </span>
            </div>
            <div className="flex items-center gap-1">
              {data.quickHire && (
                <div className="text-sm font-semibold"> From </div>
              )}
              <div className="text-xs font-semibold">${data.price}</div>
              <span>
                {!data.quickHire && (
                  <Zap size={13} fill="#FFD700" stroke="#FFD700" />
                )}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
