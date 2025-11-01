import type { FC } from "react";
import { exerciseData } from "@/components/configs/record";

export const MyExercise: FC = () => (
  <div className="bg-dark-500 p-6 w-full max-w-6xl mx-auto mt-16"
  >
    <div className="flex items-center gap-6 mb-4">
      <span className="text-white text-[15px] font-inter font-light">MY <br /> EXERCISE</span>
      <span className="text-white text-[22px] font-light tracking-wide">2021.05.21</span>
    </div>
    <style>{`
        .my-exercise-scrollbar::-webkit-scrollbar {
          width: 12px;
        }
        .my-exercise-scrollbar::-webkit-scrollbar-thumb {
          background: #FFCC21;
          border-radius: 6px;
        }
        .my-exercise-scrollbar::-webkit-scrollbar-track {
          background: #777777;
        }
        .my-exercise-scrollbar::-webkit-scrollbar-button {
          display: none !important;
          height: 0;
        }
      `}</style>
    <div
      className="overflow-y-auto max-h-72 pr-2 my-exercise-scrollbar"
      style={{
        scrollbarColor: "#FFCC21 #777777",
        scrollbarWidth: "thin",
      }}
    >

      <div className=" grid grid-cols-2 gap-x-8">
        {exerciseData.map((item, idx) => (
          <div key={idx} className="flex flex-col border-b border-gray-400 py-2 px-2">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <span className="text-white text-[15px] font-light font-japanese block">
                  • <span className="ml-2">
                    {item.name}
                  </span>
                </span>
                <span className="text-yellow-400 text-[15px] block leading-tight ml-4">
                  {item.kcal}kcal
                </span>
              </div>
              <span className="text-yellow-400 text-lg whitespace-nowrap">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
