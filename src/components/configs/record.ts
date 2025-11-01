export const exerciseData = Array.from({ length: 16 }).map(() => ({
  name: "家事全般（立位・軽い）",
  kcal: 26,
  time: "10 min",
}));

export const diaryData = Array.from({ length: 16 }).map(() => ({
  date: "2021.05.21",
  time: "23:25",
  text: `私の日記の記録が一部表示されます。
テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
}));

export const imgBtnData = [
  {
    image: "/photos/myRecommend-1.jpg",
    title: "BODY RECORD",
    buttonText: "自分のカラダの記録",
    id: "body-record",
  },
  {
    image: "/photos/myRecommend-2.jpg",
    title: "MY EXERCISE",
    buttonText: "自分の運動の記録",
    id: "my-exercise",
  },
  {
    image: "/photos/myRecommend-3.jpg",
    title: "MY DIARY",
    buttonText: "自分の日記",
    id: "my-diary",
  },
];

export const bodyRecordChartTypes = [
  { label: "日", value: "day" },
  { label: "週", value: "week" },
  { label: "月", value: "month" },
  { label: "年", value: "year" },
];
export const bodyRecordChartData = {
  day: [
    { name: "0時", actual: 400, ideal: 390 },
    { name: "4時", actual: 395, ideal: 390 },
    { name: "8時", actual: 390, ideal: 388 },
    { name: "12時", actual: 380, ideal: 385 },
    { name: "16時", actual: 370, ideal: 380 },
    { name: "20時", actual: 360, ideal: 375 },
    { name: "24時", actual: 355, ideal: 370 },
  ],
  week: [
    { name: "月", actual: 400, ideal: 390 },
    { name: "火", actual: 395, ideal: 390 },
    { name: "水", actual: 390, ideal: 388 },
    { name: "木", actual: 380, ideal: 385 },
    { name: "金", actual: 370, ideal: 380 },
    { name: "土", actual: 360, ideal: 375 },
    { name: "日", actual: 355, ideal: 370 },
  ],
  month: [
    { name: "1日", actual: 400, ideal: 390 },
    { name: "5日", actual: 395, ideal: 390 },
    { name: "10日", actual: 390, ideal: 388 },
    { name: "15日", actual: 380, ideal: 385 },
    { name: "20日", actual: 370, ideal: 380 },
    { name: "25日", actual: 360, ideal: 375 },
    { name: "30日", actual: 355, ideal: 370 },
  ],
  year: [
    { name: "6月", actual: 400, ideal: 380 },
    { name: "7月", actual: 390, ideal: 390 },
    { name: "8月", actual: 300, ideal: 350 },
    { name: "9月", actual: 350, ideal: 360 },
    { name: "10月", actual: 320, ideal: 340 },
    { name: "11月", actual: 310, ideal: 330 },
    { name: "12月", actual: 340, ideal: 340 },
    { name: "1月", actual: 300, ideal: 320 },
    { name: "2月", actual: 280, ideal: 310 },
    { name: "3月", actual: 260, ideal: 300 },
    { name: "4月", actual: 250, ideal: 290 },
    { name: "5月", actual: 240, ideal: 280 },
  ],
};
