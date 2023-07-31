import { useState, useEffect } from "react";

const useIsMobile = (maxWidth = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      // Check for common mobile device user agents
      const mobileUserAgents = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i,
      ];

      const isMobileDevice = mobileUserAgents.some((userAgent) =>
        userAgent.test(navigator.userAgent)
      );

      // Check if the window width is below the maxWidth threshold
      const isWindowMobile = window.innerWidth <= maxWidth;

      setIsMobile(isMobileDevice || isWindowMobile);
    };

    // Call the function on initial render
    checkIsMobile();

    // Add a listener to check on window resize (in case the user changes device orientation)
    window.addEventListener("resize", checkIsMobile);

    // Clean up the listener on unmount
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, [maxWidth]);

  return isMobile;
};

export default useIsMobile;
