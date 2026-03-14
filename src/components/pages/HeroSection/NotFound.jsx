import React from "react";
import Navbar from "../../Home/Navbar";
import Marque from "../../Home/Marque";
import Footer from "../../Home/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="flex h-full w-full flex-col items-center justify-center gap-5 pt-20 text-center md:pt-30">
        <div className="h-80 w-80">
          <img
            className="h-full w-full object-cover"
            src="https://cdn.dribbble.com/assets/art-banners/record-7d4c55f21e5436b281a397a17863b6dc6147c9a99d3cbfbdc053ad1b1445b8db.png"
            alt=""
          />
        </div>
        <h1 className="text-[1.3rem] font-bold tracking-tight">
          No results found
        </h1>
        <p className="px-10 font-medium text-neutral-500">
          It seems we can’t find any results based on your search.
        </p>
      </div>
      <Marque />
      <Footer />
    </>
  );
}
