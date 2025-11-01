
import { ImgBtn } from "@/components/ui/img-btn";

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

const SectionsOptions = () => {
  return <div className="flex flex-wrap justify-center gap-12 pt-[100px]">
    {imgBtnData.map((item) => (
      <ImgBtn
        key={item.title}
        image={item.image}
        title={item.title}
        buttonText={item.buttonText}
        onClick={() => { /* handle click */ }}
      />
    ))}
  </div>
}

export default SectionsOptions;