import type { FC } from "react";
import { useScrollToTop } from "@/hooks/use-scroll";
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton: FC = () => {
  const { scrollToTop, isScrolledDown } = useScrollToTop();
  if (!isScrolledDown) return null;
  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-white rounded-full shadow-lg w-12 h-12 flex items-center justify-center transition-all border border-gray-500"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6 text-gray-500" />
    </button>
  );
};

export default ScrollToTopButton;
