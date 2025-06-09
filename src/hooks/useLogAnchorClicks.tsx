import { useEffect } from "react";

/**
 * Custom React hook that logs all anchor (<a>) clicks to the console for analytics/debugging purposes.
 */
const useLogAnchorClicks = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor) {
        console.log("Anchor clicked:", anchor);
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);
};

export default useLogAnchorClicks;
