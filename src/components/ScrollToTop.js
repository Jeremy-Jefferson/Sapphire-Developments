import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop - A component that scrolls to top on route change
 * Improves user experience by automatically scrolling to top when navigating
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
