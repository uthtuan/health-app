import type { FC } from "react";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import RecommendFilterBtn from "@/components/ui/recommend-filter-btn";
import ColumnCard from "@/components/ui/column-card";
import { filterItems, columnCardData } from "@/components/configs/discover";
import ScrollToTopButton from "@/components/ui/scroll-to-top-btn";

const DiscoveryPage: FC = () => {
  const [showCount, setShowCount] = useState(8);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filterItemsWithKey = [
    { key: "all", ...filterItems[0] },
    { key: "diet", ...filterItems[1] },
    { key: "beauty", ...filterItems[2] },
    { key: "health", ...filterItems[3] },
  ];

  const filteredCards = useMemo(() => {
    if (selectedFilter === "all") return columnCardData;
    return columnCardData.filter(card => card.key === selectedFilter);
  }, [selectedFilter]);

  const visibleCards = filteredCards.slice(0, showCount);

  return (
    <div className="w-full max-w-[960px] mx-auto pt-[70px]">
      <div className="flex flex-wrap gap-8 justify-center mt-8 mb-10">
        {filterItemsWithKey.map((item) => (
          <RecommendFilterBtn
            key={item.key}
            title={item.title}
            subtitle={item.subtitle}
            onClick={() => {
              setSelectedFilter(item.key);
              setShowCount(8);
            }}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {visibleCards.map((item, idx) => {
          const { key, ...rest } = item;
          return <ColumnCard key={item.key + '-' + idx} {...rest} />;
        })}
      </div>
      {filteredCards.length > 8 && (
        <div className="flex justify-center my-8">
          <Button
            variant="gradient"
            size="gradient"
            onClick={() => setShowCount(showCount === 8 ? filteredCards.length : 8)}
          >
            {showCount === 8 ? 'コラムをもっと見る' : 'コラムを閉じる'}
          </Button>
        </div>
      )}
      <ScrollToTopButton />
    </div>
  );
}

export default DiscoveryPage;