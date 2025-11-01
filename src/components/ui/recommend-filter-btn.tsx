import React from "react";

interface RecommendFilterBtnProps {
  title: string;
  subtitle: string;
  onClick?: () => void;
  className?: string;
}

const RecommendFilterBtn: React.FC<RecommendFilterBtnProps> = ({ title, subtitle, onClick, className = "" }) => (
  <button
    className={`bg-dark-600 px-2 py-4 flex flex-col items-center justify-center min-w-[200px] rounded-none shadow transition-all duration-150 ${className}`}
    onClick={onClick}
  >
    <span className="text-yellow-400 text-[22px] leading-tight text-center max-w-[200px]">{title}</span>
    <span className="block w-10 h-[2px] bg-gray-400 my-2" />
    <span className="text-white text-lg font-japanese font-light">{subtitle}</span>
  </button>
);

export default RecommendFilterBtn;
