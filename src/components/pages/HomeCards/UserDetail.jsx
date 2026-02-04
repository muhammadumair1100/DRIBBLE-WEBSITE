import React, { useEffect, useRef, useState } from "react";
import { Heart, Bookmark, Mail } from "lucide-react";

function UserDetail() {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;

    const handleScroll = () => {
      if (container) {
        setIsScrolled(scrollContainerRef.current.scrollTop > 122);
      }
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [isScrolled]);

  return (
    <div
      ref={scrollContainerRef}
      className={`relative flex flex-col gap-8 overflow-y-auto`}
    >
      <h1 className="px-4 text-xl font-semibold tracking-tight">
        Rollforward Visual Identity
      </h1>
      <div
        className={`${isScrolled && "sticky inset-x-0 top-0 py-2 "}bg-white flex justify-between px-4 min-[930px]:px-30`}
      >
        <div className="flex items-center gap-3">
          <div className="size-8">
            <img
              src="https://cdn.dribbble.com/users/2710439/avatars/normal/6fdff994c0eb1767b813d66f4fb1f5e5.jpg?1702128074"
              alt=""
              className="size-full rounded-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xs font-semibold">Wegrow</p>
            <p className="truncate text-[10px] text-green-600">
              Available for work
            </p>
            <p className="hidden text-neutral-600">Follow</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-full border border-neutral-200 p-2">
            <Heart size={15} />
          </div>
          <div className="rounded-full border border-neutral-200 p-2">
            <Bookmark size={15} />
          </div>
          <button className="rounded-full bg-black p-2 font-semibold tracking-tight text-white min-[500px]:px-3">
            <span className="hidden text-xs min-[500px]:block">
              Get in touch
            </span>
            <Mail size={15} className="min-[500px]:hidden" />
          </button>
        </div>
      </div>

      <div
        className={`flex flex-col items-center justify-center gap-7 min-[930px]:px-30 md:px-4`}
      >
        <div>
          <img
            src="https://cdn.dribbble.com/userupload/46613578/file/e5c8bb60496c70494c6d0efcf23f919a.jpg?resize=1504x1128&vertical=center"
            alt=""
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col gap-7 px-6 min-[910px]:px-20 lg:px-40">
          <p className="text-md leading-7 font-normal min-[500px]:font-medium">
            Rollforward is a SaaS platform that automates the financial
            rollforward process for institutional investors.
          </p>
          <p className="text-md leading-7 font-normal min-[500px]:font-medium">
            The logo is built from a simple lowercase “r”, the initial of the
            brand. This base form is multiplied and rotated, creating a visual
            sense of rolling motion, continuity, and forward momentum.
          </p>
          <p className="text-md leading-7 font-normal min-[500px]:font-medium">
            As the elements rotate, the mark begins to read as arrows moving in
            a circular system, a direct reference to the rollforward concept:
            connecting reporting periods, carrying key metrics forward, and
            showing how a business evolves over time.
          </p>
          <p className="text-md leading-7 font-normal min-[500px]:font-medium">
            The identity is designed to communicate: • Clarity and trust •
            Precision and intelligence • Velocity without chaos. A minimal core
            shape expanded into a scalable, system-driven mark that works across
            product UI, decks, and digital touchpoints.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
