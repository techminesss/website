import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // We wrap the scroll in a tiny 50ms timeout.
    // This gives React and Framer Motion time to actually render the page height!
    const timeoutId = setTimeout(() => {
      
      // 1. If we are returning from a modal with a saved scroll position
      if (location.state && location.state.restoreScroll !== undefined) {
        window.scrollTo({
          top: location.state.restoreScroll,
          left: 0,
          behavior: "instant"
        });
        
        // Clean up the history state so it doesn't get stuck if they refresh
        window.history.replaceState({}, document.title);
      } 
      // 2. Otherwise, standard navigation -> go to the very top.
      else {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant"
        });
      }
      
    }, 0); // 100 milliseconds is the magic number

    // Cleanup the timeout if the user clicks really fast
    return () => clearTimeout(timeoutId);

  }, [location.pathname, location.state]); 

  return null;
};

export default ScrollToTop;