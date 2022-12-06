import React from "react";
import { Card } from "../pages";
import Image from "next/image";

type MediumCardProps = {
  card: Card;
};

const MediumCard: React.FC<MediumCardProps> = ({ card: { img, title } }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative w-80 h-80">
        <Image src={img} alt={title} fill={true} className="rounded-xl" />
      </div>
      <h3 className="text-xl mt-3">{title}</h3>
    </div>
  );
};

export default MediumCard;
