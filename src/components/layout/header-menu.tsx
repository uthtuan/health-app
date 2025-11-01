import React from "react";

interface HeaderMenuProps {
  open: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: "自分の記録" },
  { label: "体重グラフ" },
  { label: "目標" },
  { label: "選択中のコース" },
  { label: "コラム一覧" },
  { label: "設定" },
];

export const HeaderMenu: React.FC<HeaderMenuProps> = ({ open }) => {
  if (!open) return null;
  return (
    <div className="absolute top-10 right-0 z-50 w-72 bg-[#777777] text-white shadow-lg">
      <ul>
        {menuItems.map((item, idx) => (
          <li
            key={item.label}
            className="border-b border-gray px-6 py-4 text-lg hover:bg-dark-500 cursor-pointer"
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
