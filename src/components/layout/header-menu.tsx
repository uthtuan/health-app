import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { menuItems } from "@/components/configs/general";


interface HeaderMenuProps {
  open: boolean;
  onClose?: () => void;
}

export const HeaderMenu: FC<HeaderMenuProps> = ({ open, onClose }) => {
  const navigate = useNavigate();
  if (!open) return null;
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  const handleMenuClick = (item: typeof menuItems[number]) => {
    if (item.auth && !isLoggedIn) {
      navigate("/discovery");
    } else {
      navigate(item.path);
    }
    if (onClose) onClose();
  };

  const handleAuthClick = () => {
    if (isLoggedIn) {
      localStorage.removeItem("token");
      navigate("/discovery");
    } else {
      navigate("/login");
    }
    if (onClose) onClose();
  };

  return (
    <div className="absolute top-10 right-0 z-50 w-72 bg-gray-500 text-white shadow-lg">
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.label}
            className="border-b bg-gray-500 px-6 py-4 text-lg hover:bg-dark-500 cursor-pointer"
            onClick={() => handleMenuClick(item)}
          >
            {item.label}
          </li>
        ))}
        <li
          className="border-b bg-gray-500 px-6 py-4 text-lg hover:bg-dark-500 cursor-pointer"
          onClick={handleAuthClick}
        >
          {isLoggedIn ? "ログアウト" : "サインイン"}
        </li>
      </ul>
    </div>
  );
};
