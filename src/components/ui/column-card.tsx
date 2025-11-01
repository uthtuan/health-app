import React from "react";

interface ColumnCardProps {
  image: string;
  date: string;
  time: string;
  title: string;
  tags: string[];
}

const ColumnCard: React.FC<ColumnCardProps> = ({ image, date, time, title, tags }) => (
  <div className="w-[234px] bg-white overflow-hidden flex flex-col">
    <div className="relative w-full h-[144px]">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute left-0 bottom-0 bg-yellow-400 text-white text-[15px] px-2 py-0.5 flex gap-2 font-normal">
        <span>{date}</span>
        <span>{time}</span>
      </div>
    </div>
    <div className="p-2 flex-1 flex flex-col">
      <div className="text-gray-800 text-[15px] font-japanese mb-2 line-clamp-2">
        {title}
      </div>
      <div className="mt-auto">
        {tags.map((tag) => (
          <span key={tag} className="text-yellow-400 text-xs mr-2">#{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

export default ColumnCard;
