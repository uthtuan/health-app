import React from "react";

interface FilterBtnProps {
  icon: React.ReactNode;
  label: string;
  className?: string;
  onClick?: () => void;
}
const FilterBtn: React.FC<FilterBtnProps> = ({ icon, label, className = "", onClick }) => (
  <button
    className={`w-[160px] h-[184px] flex flex-col items-center justify-center bg-gradient-to-tr from-yellow-400 to-orange-400 text-white shadow focus:outline-none transition-all duration-150 hexagon-shape ${className}`}
    onClick={onClick}
    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
  >
    <div className="mb-3 w-12 h-12 flex items-center justify-center">{icon}</div>
    <span className="text-xl font-normal mt-1">{label}</span>
  </button>
);


export default FilterBtn;

