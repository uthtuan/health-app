import { useState, type FC } from "react";
import ChartContainer from "@/components/ui/chart-container";
import { bodyRecordChartData, bodyRecordChartTypes } from "@/components/configs/record";
import { Button } from "@/components/ui/button";

export const BodyRecordChart: FC = () => {
  const [type, setType] = useState("year");
  const chartData = bodyRecordChartData[type] || [];
  return (
    <div className="bg-[#2E2E2E] w-full p-6 mt-16" id="body-record">
      <div className="flex items-center mb-2">
        <span className="text-white text-lg mr-4">BODY <br /> RECORD</span>
        <span className="text-white text-2xl">2021.05.21</span>
      </div>
      <ChartContainer data={chartData} chartHeight={260} />
      <div className="flex gap-4">
        {bodyRecordChartTypes.map((t) => (
          <Button
            key={t.value}
            variant={type === t.value ? "yellow" : "outline"}
            className={`w-16 h-7 rounded-[16px] border-none font-japanese font-light text-[15px] ${type === t.value ? "text-white" : "text-yellow-400 border-yellow-400"}`}
            onClick={() => setType(t.value)}
          >
            {t.label}
          </Button>
        ))}
      </div>
    </div>
  );
};
