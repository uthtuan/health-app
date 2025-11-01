import { useCallback, useEffect, useState } from "react";

export function useScrollToTop() {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolledDown(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return { scrollToTop, isScrolledDown };
}

export const useScrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
