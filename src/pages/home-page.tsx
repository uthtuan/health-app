

import ChartContainer from "@/components/ui/chart-container";
import CircleChart from "@/components/ui/circle-chart";
import type { FC } from "react";
import { useState } from "react";
import { bodyRecordChartData } from "@/lib/mockdata";
import FilterBtn from "@/components/ui/filter-btn";
import MorningIcon from "@assets/icons/morning.svg?react";
import LunchIcon from "@assets/icons/lunch.svg?react";
import DinnerIcon from "@assets/icons/dinner.svg?react";
import SnackIcon from "@assets/icons/snack.svg?react";
import FoodPhotoCard from "@/components/ui/food-photo-card";
import { Button } from "@/components/ui/button";
import { foodPhotos } from "@/components/configs/home";

const filterItems = [
  { icon: <MorningIcon />, label: "Morning" },
  { icon: <LunchIcon />, label: "Lunch" },
  { icon: <DinnerIcon />, label: "Dinner" },
  { icon: <SnackIcon />, label: "Snack" },
];

const HomePage: FC = () => {
  const [showCount, setShowCount] = useState(8);
  return (
    <div className="mx-auto relative pt-[56px]">
      <div className="flex flex-row w-full">
        <div className="flex-1 flex items-center justify-center">
          <CircleChart
            date="05/21"
            percent={75}
            image="/photos/d01.jpg"
          />
        </div>
        <div className="flex-[2] h-[316px] flex items-center justify-center">
          <ChartContainer data={bodyRecordChartData.year} chartHeight={316}
            topPosition={20}
            rightPosition={100}
            leftPosition={100}
            bottomPosition={0}
          />
        </div>
      </div>
      <div className="flex justify-center gap-16 mt-8 max-w-[960px] mx-auto">
        {filterItems.map((item) => (
          <FilterBtn key={item.label} icon={item.icon} label={item.label} />
        ))}

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 max-w-[960px] mx-auto mt-10">
        {foodPhotos.slice(0, showCount).map((item, idx) => (
          <FoodPhotoCard key={idx} {...item} />
        ))}
      </div>
      <div className="flex justify-center my-8">
        <Button
          variant="gradient"
          size="gradient"
          onClick={() => setShowCount(showCount === 8 ? 16 : 8)}
        >
          {showCount === 8 ? '自分の日記をもっと見る' : '自分の日記を閉じる'}
        </Button>
      </div>
    </div>
  );
}
export default HomePage;