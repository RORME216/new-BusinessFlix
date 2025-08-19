// External library
import { useEffect, useState } from "react";

// Constants
const MOBILE_WIDTH_SIZE = 768;
const initialValue = window.innerWidth < MOBILE_WIDTH_SIZE;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(initialValue);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_WIDTH_SIZE);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};
