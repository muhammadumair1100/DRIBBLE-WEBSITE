import React from "react";
import { Link, useParams } from "react-router-dom";
import { Search } from "lucide-react";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchProvider";

export default function SearchInput({ value }) {
  let { allItems, activeItem } = useContext(SearchContext);

  let toShowItem = [];

  if (activeItem === "Shots") {
    toShowItem = value
      ? allItems[activeItem].filter((item) =>
          item.name.toLowerCase().includes(value.toLowerCase()),
        )
      : allItems[activeItem];
  } else if (activeItem === "Designers") {
    toShowItem = value
      ? allItems[activeItem].filter((item) =>
          item.toLowerCase().includes(value.toLowerCase()),
        )
      : allItems[activeItem];
  }

  console.log(toShowItem);
  return (
    <>
      {toShowItem.length > 0 && (
        <div className="absolute top-15 left-0 z-100 w-full rounded-lg bg-white px-4 py-3 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.1)]">
          {activeItem === "Shots" && (
            <>
              {toShowItem.slice(0, 6).map((item, i) => (
                <Link
                  to={`/search/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                  key={i}
                  className="group flex items-center gap-3 rounded-lg px-2 py-3 hover:cursor-pointer hover:bg-neutral-100"
                >
                  <Search size={16} />
                  <h3 className="text-sm font-medium text-neutral-700 group-hover:text-neutral-600">
                    {item.name}
                  </h3>
                </Link>
              ))}
            </>
          )}

          {activeItem === "Designers" && (
            <>
              {toShowItem.slice(0, 6).map((item, i) => (
                <Link
                  to={`/designers/${item.toLowerCase()}`}
                  key={i}
                  className="group flex items-center gap-3 rounded-lg px-2 py-3 hover:cursor-pointer hover:bg-neutral-100"
                >
                  <Search size={16} />
                  <h3 className="text-sm font-medium text-neutral-700 group-hover:text-neutral-600">
                    {item}
                  </h3>
                </Link>
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
}
