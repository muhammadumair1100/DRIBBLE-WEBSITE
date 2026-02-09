import React, { useEffect, useState } from "react";
import { Heart, Bookmark } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const MoreBy = ({ userObj }) => {
  const { id } = useParams();
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function getData() {
      const promise = await fetch("/homedata.json");
      const data = await promise.json();
      data.sort(() => Math.random() - 0.9);
      setApiData(data);
    }
    getData();
  }, []);
  return (
    <div className="relative flex flex-col gap-5 px-3 pb-25">
      <div className="flex items-center justify-between">
        <h1 className="text-sm font-bold md:text-base">
          More By {userObj?.title}
        </h1>
        <p className="text-sm font-medium md:text-balance">View profile</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {apiData?.slice(0, 4).map((c, index) => (
          <Link
            to={`/selectCard/${c.heading.replace(/\s+/g, "-")}`}
            key={index}
            className="group relative w-full hover:cursor-pointer"
          >
            <div className="aspect-20/15 rounded-lg">
              <img
                src={c.image}
                alt={c.name}
                className="size-full rounded-lg object-center"
              />
            </div>
            <div className="absolute bottom-5 left-0 z-50 flex w-full items-center justify-between gap-5 px-5 opacity-0 transition-all duration-200 group-hover:opacity-100">
              <div className="text-md truncate font-medium text-white">
                {c.heading}
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-white p-3">
                  <Bookmark size={16} />
                </span>
                <span className="rounded-full bg-white p-3">
                  <Heart size={16} />
                </span>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-full rounded-b-lg bg-linear-to-t from-black/50 to-transparent to-50% opacity-0 transition-all duration-200 group-hover:opacity-100"></div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-5 left-0 h-[1.5px] w-full bg-neutral-200"></div>
    </div>
  );
};

export default MoreBy;
