import React from "react";
import { menuItems } from "@/components/configs/general";

interface HeaderMenuProps {
  open: boolean;
  onClose: () => void;
}

export const HeaderMenu: React.FC<HeaderMenuProps> = ({ open }) => {
  if (!open) return null;
  return (
    <div className="absolute top-10 right-0 z-50 w-72 bg-gray-500 text-white shadow-lg">
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.label}
            className="border-b bg-gray-500 px-6 py-4 text-lg hover:bg-dark-500 cursor-pointer"
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
