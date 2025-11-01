import { useState, type FC } from "react";
import ChartContainer from "@/components/ui/chart-container";
import { bodyRecordChartData, bodyRecordChartTypes } from "@/lib/mockdata";
import { Button } from "@/components/ui/button";

export const BodyRecordChart: FC = () => {
  const [type, setType] = useState("year");
  const chartData = bodyRecordChartData[type] || [];
  return (
    <div className="bg-[#2E2E2E] w-full p-6 mt-16">
      <div className="flex items-center mb-2">
        <span className="text-white text-lg mr-4">BODY <br /> RECORD</span>
        <span className="text-white text-2xl">2021.05.21</span>
      </div>
      <ChartContainer data={chartData} chartHeight={260} />
      <div className="flex gap-4">
        {bodyRecordChartTypes.map((t) => (
          <Button
            key={t.value}
            variant={type === t.value ? "gradient" : "outline"}
            className={`w-16 h-7 rounded-full border-none font-japanese text-base ${type === t.value ? "text-white" : "text-yellow-400 border-yellow-400"}`}
            onClick={() => setType(t.value)}
          >
            {t.label}
          </Button>
        ))}
      </div>
    </div>
  );
};
