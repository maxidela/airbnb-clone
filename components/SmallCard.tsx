import React from "react";
import Image from "next/image";
import { ExploreLocation } from "../pages";

type SmallCardProps = {
  location: ExploreLocation;
};

const SmallCard: React.FC<SmallCardProps> = ({
  location: { img, location, distance },
}) => {
  return (
    <div className="flex items-center space-x-4 m-2 mt-5 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image src={img} alt={location} fill={true} className="rounded-lg" />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
