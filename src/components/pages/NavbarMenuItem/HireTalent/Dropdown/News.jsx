import { X, ChevronRight } from "lucide-react";

const News = ({ isOpen }) => {
  const images = [
    "https://static.intercomassets.com/avatars/8286604/square_128/IMG_0191-1745238757.png",
    "https://static.intercomassets.com/avatars/9654895/square_128/image-1767820472.png",
    "https://static.intercomassets.com/avatars/8226547/square_128/ChatGPT_Image_Apr_11_2025_02_29_58_PM-1744396246.png",
  ];

  const cardData = [
    {
      image:
        "https://downloads.intercomcdn.com/i/o/ikho1pf5/1892911866/17cfaf8a9fd1f8a9807187345f60/Screenshot+2025-12-18+at+2_13_55%E2%80%AFPM.png",
      feature: "Feature update",
      title:
        "Designers can now generate more leads than ever with Dribbble Pro.",
      heading:
        "Designers now have multiple Pro plans to choose from, depending on the level of control they want over their earnings on Dribbble.",
    },
    {
      image:
        "https://downloads.intercomcdn.com/i/o/ikho1pf5/1863609920/35577e477b82d92974ff45678a1f/Screenshot+2025-12-03+at+12_28_17%E2%80%AFPM.png",
      feature: "Feature update",
      title:
        "Designers can now browse Project Briefs from clients seeking proposals.",
      heading:
        "Now, designers can view and respond to Project Briefs published on Dribbble.",
    },
    {
      image:
        "https://downloads.intercomcdn.com/i/o/ikho1pf5/1863161625/77ee01a9aab138fa73968cdeba27/Screenshot+2025-12-03+at+9_46_58%E2%80%AFAM.png",
      feature: "Feature update",
      title:
        "Clients can now publish their Project Briefs and receive more proposals.",
      heading:
        "Increase your reach by publishing briefs directly to the Dribbble community.",
    },
    {
      image:
        "https://downloads.intercomcdn.com/i/o/ikho1pf5/1805453766/8d9053ccae3e5d899e36229b2c99/Screenshot+2025-10-30+at+3_19_22%E2%80%AFPM.png",
      feature: "Promotional",
      title:
        "New clients can now save $100 on their first payment to a designer.",
      heading:
        "Dribbble is offering $100 off a client's first payment of $1,000 or more.",
    },
  ];

  return (
    /* Main Wrapper: Fixed position taake poora card screen par sahi jagah rahe */
    <div className="fixed top-0 right-0 z-50 flex h-[87vh] w-full flex-col overflow-hidden border border-neutral-300 bg-white shadow-2xl min-[450px]:top-5 min-[450px]:right-7 min-[450px]:h-[81vh] min-[450px]:w-96 min-[450px]:rounded-3xl">
      {/* 1. Header: Non-scrollable part */}
      <div className="relative flex w-full shrink-0 items-center justify-center border-b border-neutral-200 bg-white py-4">
        <h1 className="text-sm font-bold text-neutral-800">News</h1>
        <button
          onClick={() => isOpen(false)}
          className="absolute right-4 rounded-lg p-1.5 text-neutral-500 transition-colors hover:bg-neutral-100"
        >
          <X size={18} />
        </button>
      </div>

      {/* 2. Scrollable Content Area: Custom scrollbar yahan apply hogi */}
      <div className="custom-scrollbar h-full w-full overflow-y-auto bg-neutral-50 px-5 pb-5">
        {/* Latest Header Section */}
        <div className="flex items-center justify-between py-4">
          <div>
            <h2 className="text-sm font-bold text-neutral-800">Latest</h2>
            <p className="text-[11px] text-neutral-500">From Team Dribbble</p>
          </div>
          <div className="relative flex h-10 w-24 items-center">
            {images.map((image, index) => (
              <img
                key={index}
                className="absolute size-9 rounded-full border-2 border-white object-cover shadow-sm"
                src={image}
                style={{
                  right: `${index * 22}px`,
                  zIndex: 10 - index,
                }}
                alt="Avatar"
              />
            ))}
          </div>
        </div>

        {/* News Cards Mapping */}
        <div className="flex flex-col gap-5 pb-10">
          {cardData.map((data, index) => (
            <div
              key={index}
              className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white pb-4 shadow-sm transition-all hover:border-neutral-300 hover:shadow-md active:scale-[0.99]"
            >
              {/* Card Image */}
              <div className="h-44 w-full overflow-hidden bg-neutral-200">
                <img
                  className="h-full w-full object-center transition-transform duration-500"
                  src={data.image}
                  alt="News"
                />
              </div>

              {/* Card Content */}
              <div className="mt-4 px-4">
                <span className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-[10px] font-bold text-neutral-600">
                  {data.feature}
                </span>

                <div className="mt-3 flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="text-[13px] leading-tight font-bold text-neutral-800">
                      {data.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-[11px] leading-relaxed text-neutral-500">
                      {data.heading}
                    </p>
                  </div>
                  <ChevronRight
                    size={18}
                    className="mt-1 shrink-0 text-neutral-400 group-hover:text-neutral-600"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
