import React from "react";
import { Button } from "@/components/ui/button";

interface ImgBtnProps {
  image: string;
  title: string;
  buttonText: string;
  onClick?: () => void;
}

export const ImgBtn: React.FC<ImgBtnProps> = ({
  image,
  title,
  buttonText,
  onClick,
}) => (
  <div className="w-[288px] h-[288px] bg-yellow-400 flex items-center justify-center">
    <div className="w-[240px] h-[240px] relative flex flex-col items-center justify-center">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover grayscale"
      />
      <div className="absolute inset-0 bg-black opacity-60" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
        <span className="text-yellow-400 text-2xl font-bold mb-2 mt-16 drop-shadow">
          {title}
        </span>
        <Button
          variant="default"
          className="bg-orange-400 text-white text-base font-japanese px-6 py-2 mt-2"
          onClick={onClick}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  </div>
);