import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      variant="hero"
      size="sm"
      className="fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 p-0 shadow-lg"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
};

export default ScrollToTop;