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
    <footer className="w-full bg-gray-700 py-12 flex justify-center">
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 w-full max-w-5xl">
        {footerLinks.map((item) => (
          <Button
            key={item.label}
            variant="text"
            className="text-white text-base font-japanese px-2"
            onClick={() => { }}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </footer>
  );
};
