
import { MyExercise } from "@/components/sections/my-exercise";
import { MyDiary } from "@/components/sections/my-diary";
import { BodyRecordChart } from "@/components/sections/body-record-chart";
import { ChevronUp } from 'lucide-react';
import SectionsOptions from "@/components/sections/section-options";
import ScrollToTopButton from "@/components/ui/scroll-to-top-btn";
import type { FC } from "react";


const RecordPage: FC = () => {
  return (
    <div className="pt-[100px]">
      <div className="max-w-[960px] mx-auto relative">
        <SectionsOptions />
        <BodyRecordChart />
        <MyExercise />
        <MyDiary />
      </div>
      <ScrollToTopButton />
    </div>
  );
}
export default RecordPage;