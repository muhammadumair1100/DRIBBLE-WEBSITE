import { Search, X, ChevronRight } from "lucide-react";

const Help = ({ isOpen }) => {
  const helpItems = [
    {
      title: "Designer Account",
      heading: "Creating your profile and sharing your work on Dribbble.",
      artilce: "28 articles",
    },
    {
      title: "Account Settings",
      heading: "Creating and managing your Desinger profile.",
      artilce: "6 articles",
      icone: <ChevronRight size={15} />,
    },
    {
      title: "Sharing Shots",
      heading:
        "Best practices and detailed requirements for posting your work on Dribbble.",
      artilce: "10 articles",
      icone: <ChevronRight size={15} />,
    },
    {
      title: "Limited Accounts",
      heading: "Becoming an invited Desiger on Dribbble.",
      artilce: "3 articles",
      icone: <ChevronRight size={15} />,
    },
    {
      title: "Exposure",
      heading: "Get your work seen on Dribbble.",
      artilce: "9 articles",
      icone: <ChevronRight size={15} />,
    },
  ];
  return (
    <div className="relative">
      <div className="flex flex-col items-center gap-3 border-b border-neutral-300 px-3 pt-4 pb-2">
        <span
          onClick={() => isOpen(false)}
          className="absolute top-3 right-5 rounded-lg p-2 hover:cursor-pointer hover:bg-neutral-200"
        >
          <X className="size-4" />
        </span>
        <div>
          <h1 className="font-semibold">Help</h1>
        </div>
        <div className="flex w-full items-center justify-between rounded-xl bg-neutral-200/50 px-2">
          <input
            className="flex-1 py-2.5 outline-none placeholder:text-sm placeholder:text-black"
            type="text"
            placeholder="Search for help"
          />
          <span>
            <Search size={18} />
          </span>
        </div>
      </div>
      <div className="custom-scrollbar max-h-[440px] overflow-auto">
        <div className="mt-1">
          {helpItems.map((item, index) => (
            <div
              className={`flex flex-col gap-1 border-b border-neutral-200 bg-gray-100/30 px-5 py-4 ${index > 0 && "hover:cursor-pointer hover:bg-neutral-100"}`}
            >
              <h1 className="text-xs font-semibold">{item.title}</h1>
              <div className="flex items-center justify-between gap-2">
                <p className="text-[12px] leading-5 font-medium text-neutral-600">
                  {item.heading}
                </p>
                <span>{item.icone}</span>
              </div>
              <p className="mt-1 text-xs font-normal text-neutral-800">
                {item.artilce}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;
