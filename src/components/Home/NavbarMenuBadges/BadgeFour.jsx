import React from "react";
import { Form, Trophy, Instagram, InstagramIcon } from "lucide-react";
import { TbHelpHexagon } from "react-icons/tb";
import BadgeTwo from "./BadgeTwo";
const BadgeFour = () => {
  const getHired = [
    {
      icone: <Form className="size-5" />,
      title: "Blog",
      line: "Design inspiration, stories, and tips",
    },
    {
      icone: <Trophy className="size-5" />,
      title: "Playoffs",
      line: "Join creative challenges and show your skills",
    },
    {
      icone: <TbHelpHexagon className="size-5" />,
      title: "Help Center",
      line: "Get quick answers and learn to use Dribbble",
    },
  ];

  return (
    <div>
      <BadgeTwo itemData={getHired} />
    </div>
  );
};

export default BadgeFour;
