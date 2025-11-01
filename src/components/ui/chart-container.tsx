import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChartContainerProps {
  data: any[];
  chartHeight?: number;
  topPosition?: number;
  rightPosition?: number;
  leftPosition?: number;
  bottomPosition?: number;
}

const ChartContainer: React.FC<ChartContainerProps> = ({ data, chartHeight = 260,
  topPosition = 20,
  rightPosition = 20,
  leftPosition = 20,
  bottomPosition = 0,
}) => (
  <div className={`w-full h-[${chartHeight}px] bg-[#2E2E2E]`}>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: topPosition, right: rightPosition, left: leftPosition, bottom: bottomPosition }}>
        <CartesianGrid stroke="#555" vertical={true} horizontal={false} />
        <XAxis dataKey="name" stroke="#fff" tick={{ fontSize: 14 }} interval={0} axisLine={false} tickLine={false} />
        <YAxis hide />
        <Tooltip contentStyle={{ background: '#444', border: 'none', color: '#fff' }} />
        <Line type="monotone" dataKey="actual" stroke="#FFD600" strokeWidth={3} dot={{ r: 4, fill: '#FFD600' }} activeDot={{ r: 6 }} />
        <Line type="monotone" dataKey="ideal" stroke="#8FE9D0" strokeWidth={3} dot={{ r: 4, fill: '#8FE9D0' }} activeDot={{ r: 6 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default ChartContainer;
