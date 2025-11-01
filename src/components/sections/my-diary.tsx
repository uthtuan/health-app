
import { useState, type FC } from "react";
import { Button } from "@/components/ui/button";
import { diaryData } from "@/components/configs/record";

export const MyDiary: FC = () => {
  const [showCount, setShowCount] = useState(8);
  return (
    <div className="w-full mt-16">
      <h2 className="text-[22px] font-inter mb-4 text-dark-500">MY DIARY</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {diaryData.slice(0, showCount).map((item, idx) => (
          <div
            key={idx}
            className="border border-gray-400 bg-white text-dark-500 p-4 w-[231px] h-[231px] flex flex-col"
          >
            <div className="text-gray-700 text-lg mb-1 text-dark-500">
              {item.date} <br /> {item.time}
            </div>
            <div className="text-gray-600 text-sm whitespace-pre-line flex-1 overflow-hidden truncate text-dark-500">
              {item.text}
            </div>
          </div>
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
};
