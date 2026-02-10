import React from "react";
import HomeCards from "../../Home/HomeCards";

const YouMightLike = () => {
  return (
    <div className="py-10">
      <div>
        <h1 className="px-3 font-bold">You might also like</h1>
      </div>
      <HomeCards limit={6} />
    </div>
  );
};

export default YouMightLike;
