import { Zap } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function CardSection() {
  const [cardData, setCardData] = useState([]);

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

  return (
    <div className="grid gap-5 px-5 pt-10 md:grid-cols-2 md:gap-y-10 md:px-10 lg:grid-cols-3">
      {cardData.map((data, idx) => (
        <div
          key={idx}
          className="group flex flex-col gap-2 hover:cursor-pointer"
        >
          <div>
            <img
              className="h-full w-full rounded-lg"
              src={data.images[1]}
              alt={data.title}
            />
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
