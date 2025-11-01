
import { ImgBtn } from "@/components/ui/img-btn";
import { MyExercise } from "@/components/sections/my-exercise";
import { MyDiary } from "@/components/sections/my-diary";
import { BodyRecordChart } from "@/components/sections/body-record-chart";
import { ChevronUp } from 'lucide-react';
const imgBtnData = [
  {
    image: "/photos/myRecommend-1.jpg",
    title: "BODY RECORD",
    buttonText: "自分のカラダの記録",
  },
  {
    image: "/photos/myRecommend-2.jpg",
    title: "MY EXERCISE",
    buttonText: "自分の運動の記録",
  },
  {
    image: "/photos/myRecommend-3.jpg",
    title: "MY DIARY",
    buttonText: "自分の日記",
  },
];

const HomePage = () => {
  return (
    <div>
      <div className="max-w-[960px] mx-auto relative">
      </div>
      <button
        className="fixed right-1 bottom-8 w-12 h-12 bg-white border border-gray-300 text-gray-700 rounded-full shadow transition-colors duration-200 flex items-center justify-center hover:bg-gray-100"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronUp className="w-6 h-6 text-gray-500"  />
      </button>
    </div>
  );
}
export default HomePage;