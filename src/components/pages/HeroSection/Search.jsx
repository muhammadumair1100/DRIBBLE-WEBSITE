import React, { useContext } from "react";
import { Outlet, useParams } from "react-router-dom";
import Shots from "../../Home/Shots";
import { SearchContext } from "../../../context/SearchProvider";
import NotFound from "./NotFound";

export default function Search() {
  const { allItems } = useContext(SearchContext);
  const { id } = useParams();

  const idName = allItems.find(
    (data) => data.name.toLowerCase().replace(/\s+/g, "-") === id,
  );

  return (
    <>
      {idName ? (
        <div className="mt-20 px-4 md:mt-20 lg:mt-30">
          <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-4 rounded-xl p-6 md:gap-6">
            <h1 className="text-center text-xl font-bold md:text-2xl xl:text-3xl">
              {idName?.name}
            </h1>

            <p className="text-center text-[0.9rem] leading-relaxed font-medium text-neutral-500 md:text-base">
              {idName?.description}
            </p>
            {idName?.related.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="text-xs font-semibold text-neutral-400">
                  Related:
                </span>
                <div className="flex flex-wrap justify-center gap-2">
                  {idName?.related.map((relat, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600 hover:cursor-pointer hover:bg-neutral-50"
                    >
                      {relat}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Shots />
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}
