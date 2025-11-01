import type { FC } from "react";
import { Button } from "@/components/ui/button";
import { footerLinks } from "@/components/configs/general";

export const Footer: FC = () => {
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
