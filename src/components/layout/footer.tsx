import React from "react";
import { Button } from "@/components/ui/button";

const footerLinks = [
  { label: "会員登録" },
  { label: "運営会社" },
  { label: "利用規約" },
  { label: "個人情報の取扱について" },
  { label: "特定商取引法に基づく表記" },
  { label: "お問い合わせ" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-dark-500 h-[128px] flex items-center">
      <div className="max-w-[960px] mx-auto w-full">
        <div className="flex flex-wrap justify-left gap-x-6 w-full ">
          {footerLinks.map((item) => (
            <Button
              key={item.label}
              variant="text"
              className="text-white text-[11px] font-japanese px-2"
              onClick={() => { }}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
};
