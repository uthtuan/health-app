import type { FC } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import RecommendFilterBtn from "@/components/ui/recommend-filter-btn";
import ColumnCard from "@/components/ui/column-card";
import { filterItems, columnCardData } from "@/components/configs/discover";

const DiscoveryPage: FC = () => {
  const [showCount, setShowCount] = useState(8);
  const visibleCards = columnCardData.slice(0, showCount);
  return (
    <div className="w-full max-w-[960px] mx-auto px-4 pt-[70px]">
      <div className="flex flex-wrap gap-4 justify-center my-8">
        {filterItems.map((item) => (
          <RecommendFilterBtn key={item.title} title={item.title} subtitle={item.subtitle} />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {visibleCards.map((item, idx) => (
          <ColumnCard key={idx} {...item} />
        ))}
      </div>
      {columnCardData.length > 8 && (
        <div className="flex justify-center my-8">
          <Button
            variant="gradient"
            size="gradient"
            onClick={() => setShowCount(showCount === 8 ? columnCardData.length : 8)}
          >
            {showCount === 8 ? 'コラムをもっと見る' : 'コラムを閉じる'}
          </Button>
        </div>
      )}
    </div>
  );
}

export default DiscoveryPage;