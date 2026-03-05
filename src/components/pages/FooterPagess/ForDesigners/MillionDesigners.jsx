import { motion } from "framer-motion";

const MillionDesigners = () => {
  return (
    <div>
      <div className="flex w-full flex-col gap-5 px-5 min-[800px]:mt-10 min-[800px]:px-10 min-[1100px]:w-2/3 min-[1200px]:px-25 xl:mt-15 xl:px-35">
        <h1 className="text-[1.3rem] leading-8 font-bold text-neutral-700 min-[800px]:text-2xl">
          Where millions of designers learn, share, and get hired
        </h1>
        <p className="font-medium min-[800px]:leading-7">
          Since 2009, Dribbble has been the go-to destination for millions of
          designers worldwide to find {""}
          <a href="" className="underline">
            inspiration
          </a>{" "}
          , grow their portfolios, connect with{" "}
          <a href="" className="underline">
            top talent
          </a>{" "}
          and find {""}
          <a href="" className="underline">
            new opportunities
          </a>{" "}
          . Whether you're a new designer or a seasoned pro, join the millions
          of designers who started and grew a successful design career on
          Dribbble.
        </p>
      </div>
      <Marques />
    </div>
  );
};

const Marques = () => {
  const leftMarque = [
    "https://framerusercontent.com/images/xkZ7dVj1qLNLuAraCMPkIr7zMw.png?scale-down-to=512&width=2048&height=1463",
    "https://framerusercontent.com/images/5HIDKQW1h1ayPJADT6QYSAZc5Y.png?scale-down-to=512&width=573&height=381",
    "https://framerusercontent.com/images/Ylyfz349UjCCKopaMoLgXZ5A.png?scale-down-to=512&width=1394&height=932",
    "https://framerusercontent.com/images/eSknAtYZCX32BngG6dhtE7VrXn0.png?scale-down-to=512&width=2048&height=1536",
    "https://framerusercontent.com/images/SPQ1Q8u4RnMXYyXwMIlpXdDOuzw.png?scale-down-to=512&width=1504&height=1128",
    "https://framerusercontent.com/images/eSknAtYZCX32BngG6dhtE7VrXn0.png?scale-down-to=512&width=2048&height=1536",
    "https://framerusercontent.com/images/nWevRbWaC9HGngvl6bIAX5EWm4M.png?scale-down-to=512&width=1600&height=1200  ",
    "https://framerusercontent.com/images/xkZ7dVj1qLNLuAraCMPkIr7zMw.png?scale-down-to=512&width=2048&height=1463",
    "https://framerusercontent.com/images/eSknAtYZCX32BngG6dhtE7VrXn0.png?scale-down-to=512&width=2048&height=1536",
  ];
  const rightMarque = [
    "https://framerusercontent.com/images/xkZ7dVj1qLNLuAraCMPkIr7zMw.png?scale-down-to=512&width=2048&height=1463",
    "https://framerusercontent.com/images/5HIDKQW1h1ayPJADT6QYSAZc5Y.png?scale-down-to=512&width=573&height=381",
    "https://framerusercontent.com/images/Ylyfz349UjCCKopaMoLgXZ5A.png?scale-down-to=512&width=1394&height=932",
    "https://framerusercontent.com/images/eSknAtYZCX32BngG6dhtE7VrXn0.png?scale-down-to=512&width=2048&height=1536",
    "https://framerusercontent.com/images/SPQ1Q8u4RnMXYyXwMIlpXdDOuzw.png?scale-down-to=512&width=1504&height=1128",
    "https://framerusercontent.com/images/eSknAtYZCX32BngG6dhtE7VrXn0.png?scale-down-to=512&width=2048&height=1536",
    "https://framerusercontent.com/images/nWevRbWaC9HGngvl6bIAX5EWm4M.png?scale-down-to=512&width=1600&height=1200  ",
    "https://framerusercontent.com/images/xkZ7dVj1qLNLuAraCMPkIr7zMw.png?scale-down-to=512&width=2048&height=1463",
    "https://framerusercontent.com/images/eSknAtYZCX32BngG6dhtE7VrXn0.png?scale-down-to=512&width=2048&height=1536",
  ];
  return (
    <div className="space-y-10 overflow-hidden py-20">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max gap-8"
      >
        {[...leftMarque, ...leftMarque].map((image, index) => (
          <div key={index} className="flex h-65 w-95 shrink-0">
            <img src={image} className="h-full w-full object-cover" />
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ x: "-50%" }}
        animate={{ x: 0 }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max gap-8"
      >
        {[...rightMarque, ...rightMarque].map((image, index) => (
          <div key={index} className="flex h-65 w-95 shrink-0">
            <img src={image} className="h-full w-full object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MillionDesigners;
