import React from "react";
import BadgeTwo from "./BadgeTwo";
import { BookText, BookPlus, Handbag } from "lucide-react";

const BadgeThree = () => {
  const getHired = [
    {
      icone: <BookText className="size-5" />,
      title: "Browse Project Brief",
      line: "Send properties to clients",
    },
    {
      icone: <BookPlus className="size-5" />,
      title: "Add a Servie",
      line: "Let clients  purchase your servies",
    },
    {
      icone: <Handbag className="size-5" />,
      title: "Apply to Full-Time Jobs",
      line: "View open design roles",
    },
  ];
  return (
    <div>
      <BadgeTwo
        itemData={getHired}
        line1={"Upgrade to Pro"}
        line2={"Advertise with Us"}
        line3={"Lean more about getting hired on Dribbble"}
      />
    </div>
  );
};

export default BadgeThree;
