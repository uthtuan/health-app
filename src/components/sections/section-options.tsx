
import { ImgBtn } from "@/components/ui/img-btn";
import { useScrollToSection } from "@/hooks/use-scroll";
import { imgBtnData } from "@/components/configs/record";
import type { FC } from "react";


const SectionsOptions: FC = () => {
  const handleClick = (id: string) => {
    useScrollToSection(id);
  };

  return (
    <div className="flex flex-wrap justify-center gap-12">
      {imgBtnData.map((item) => (
        <ImgBtn
          key={item.title}
          image={item.image}
          title={item.title}
          buttonText={item.buttonText}
          onClick={() => {
            handleClick(item.id);
          }}
        />
      ))}
    </div>
  )
}

export default SectionsOptions;