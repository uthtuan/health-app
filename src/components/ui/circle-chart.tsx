import React from "react";

interface CircleChartProps {
  date: string;
  percent: number;
  image: string;
}

const CircleChart: React.FC<CircleChartProps> = ({ date, percent, image }) => {
  const radius = 110;
  const stroke = 4;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const arcLength = circumference;
  const percentArc = arcLength * (percent / 100);
  const rotation = -90;

  return (
    <div className="relative w-full h-full flex items-center justify-center"
      style={{
        background: `url(${image}) no-repeat center/cover`,
      }}>

      <svg
        width={radius * 2}
        height={radius * 2}
        className="absolute -left-50 -top-50"
        style={{ transform: `rotate(${rotation}deg)` }}
        filter="drop-shadow(0 0 8px #fb923c)"
      >

        <circle
          stroke="#fff"
          strokeWidth={stroke}
          fill="none"
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          strokeDasharray={`${percentArc} ${circumference}`}
          strokeDashoffset={0}
          strokeLinecap="round"
          style={{ transition: 'stroke-dasharray 0.5s' }}
          filter="drop-shadow(0 0 8px #fb923c)"
        />
      </svg>

      <div className="absolute w-full h-full flex flex-col items-center justify-center text-white">
        <div className="flex flex-row items-end justify-center w-full">
          <span className="text-lg font-normal mr-2" style={{ letterSpacing: 1, textShadow: '0 0 8px #fb923c' }}>{date}</span>
          <span className="text-[25px]" style={{ textShadow: '0 0 8px #fb923c' }}>{percent}<span className="text-xl font-normal" style={{ textShadow: '0 0 8px #fb923c' }}>%</span></span>
        </div>
      </div>
    </div >
  );
};

export default CircleChart;
