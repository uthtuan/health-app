import React from "react";

interface FoodPhotoCardProps {
  image: string;
  day: string;
  filter: string;
}

const FoodPhotoCard: React.FC<FoodPhotoCardProps> = ({ image, day, filter }) => (
  <div className="w-[234px] h-[234px] bg-white shadow overflow-hidden relative">
    <img src={image} alt={filter} className="w-full h-full object-cover" />
    <div className="absolute left-0 bottom-0 bg-yellow-400 text-white text-[15px] px-2 py-2 font-normal">
      {day}.{filter}
    </div>
  </div>
);

export default FoodPhotoCard;
