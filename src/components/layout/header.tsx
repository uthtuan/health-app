
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HeaderMenu } from "./header-menu";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    icon: "/src/assets/icons/record.svg",
    label: "自分の記録",
    path: "/record",
  },
  {
    icon: "/src/assets/icons/challenge.svg",
    label: "チャレンジ",
    path: "/challenge",
  },
  {
    icon: "/src/assets/icons/notification.svg",
    label: "お知らせ",
    notification: 1,
    path: "/notification",
  },
];

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    const isLoggedIn = Boolean(localStorage.getItem("token"));
    navigate(isLoggedIn ? "/" : "/discovery");
  }

  return (
    <header className="w-full bg-dark-500 fixed top-0 z-[9999] h-[56px]">
      <div className="max-w-[960px] py-2 flex items-center justify-between relative mx-auto">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Healthy Logo"
            className="h-8 mr-2 cursor-pointer"
            onClick={handleNavigateHome}
          />
        </div>
        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Button
                key={item.label}
                variant="text"
                onClick={() => navigate(item.path)}
                type="button"
                className={`flex items-center gap-1 relative ${isActive ? 'text-orange-400 font-bold border-b-2 border-orange-400' : 'text-white'}`}
              >
                <div className="relative">
                  <img src={item.icon} alt="icon" className="w-6 h-6" />
                  {item.notification && (
                    <span className="absolute top-0 -right-2 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                      {item.notification}
                    </span>
                  )}
                </div>
                <span className="text-base font-japanese">{item.label}</span>
              </Button>
            );
          })}
          <div className="relative">
            <Button
              className="ml-1 px-0"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              variant="text"
            >
              {menuOpen ? (
                <img src={"/src/assets/icons/close.svg"} alt="close" className="w-7 h-7 text-orange-400" />
              ) : (
                <img src={"/src/assets/icons/menu.svg"} alt="menu" className="w-7 h-7 text-orange-400" />
              )}
            </Button>
            <HeaderMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
          </div>
        </nav>
      </div>
    </header>
  );
};
