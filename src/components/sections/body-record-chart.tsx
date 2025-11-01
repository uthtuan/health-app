import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { bodyRecordChartData, bodyRecordChartTypes } from "@/lib/mockdata";
import { Button } from "@/components/ui/button";

export const BodyRecordChart: React.FC = () => {
  const [type, setType] = useState("year");

  const chartData = bodyRecordChartData[type] || [];
  return (
    <div className="bg-[#2E2E2E] w-full p-6 mt-16">
      <div className="flex items-center mb-2">
        <span className="text-white text-lg mr-4">BODY <br/> RECORD</span>
        <span className="text-white text-2xl">2021.05.21</span>
      </div>
      <div className="w-full h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 20, right: 20, left: 20, bottom: 0 }}>
            <CartesianGrid stroke="#555" vertical={true} horizontal={false} />
            <XAxis dataKey="name" stroke="#fff" tick={{ fontSize: 14 }} interval={0} axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip contentStyle={{ background: '#444', border: 'none', color: '#fff' }} />
            <Line type="monotone" dataKey="actual" stroke="#FFD600" strokeWidth={3} dot={{ r: 4, fill: '#FFD600' }} activeDot={{ r: 6 }} />
            <Line type="monotone" dataKey="ideal" stroke="#8FE9D0" strokeWidth={3} dot={{ r: 4, fill: '#8FE9D0' }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
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
