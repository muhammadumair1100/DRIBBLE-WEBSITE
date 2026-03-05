import React from "react";

export default function StartExploring() {
  const cards = [
    {
      title: "free desing resources",
      p1: "Desing Fundamentals",
      p2: "Freelance Desing",
    },
    {
      title: "explore the community",
      p1: "Trending Designs: Explore popular desings to inspire you",
      p2: "Playoffs: Work designers are riffing on",
      p3: "Community Blog: Interviews, desgn, stories, and more",
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-10 px-5 py-30 lg:px-15">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-neutral-700 lg:text-3xl">
            Start exploring
          </h1>
          <p className="mt-5 font-medium text-neutral-600 lg:text-lg">
            Whether you're a new or seasoned designer, explore resources to grow
            your career.
          </p>
        </div>
        <div className="flex flex-col gap-8 md:flex-row lg:justify-center lg:gap-12">
          {cards.map((data, index) => (
            <div
              key={index}
              className={`w-full rounded-xl lg:w-120 lg:pb-25 ${index === 0 ? "bg-[#ecf4fb]" : "bg-[#e8fdf0]"} p-8`}
            >
              <h3 className="mb-6 text-xs font-semibold uppercase md:text-sm">
                {data.title}
              </h3>
              <p className="mb-2 leading-7">{data.p1}</p>
              <p className="mb-3">{data.p2}</p>
              <p className="mb-3">{data.p3}</p>
            </div>
          ))}
        </div>
      </div>
      <BuildBrand />
    </div>
  );
}

function BuildBrand() {
  return (
    <div className="flex flex-col items-center gap-9 bg-linear-to-tr from-[#f7d9f9] to-[#ffddd2] px-5 py-20 text-center sm:py-25 md:py-45">
      <h1 className="text-4xl font-medium md:text-[2.5rem] lg:px-20 lg:text-[3.2rem] xl:px-30 xl:leading-16">
        Build your brand & unlock new opportunities with Dribbble Pro{" "}
      </h1>
      <button className="w-60 rounded-full bg-black py-4 font-bold text-white">
        Get started
      </button>
      <p className="mt-5 px-12 text-xl leading-9 font-medium lg:w-[960px]">
        “If I’ve made one investment that’s truly paid off, it would be paying
        for Dribbble Pro. Love the projects that I get from there.”
        <span className="mt-2 block">— Kassie Scribner</span>
      </p>
    </div>
  );
}
