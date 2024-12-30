import { useEffect, useState } from "react";

export default function useBreakPoint(breakOn: number = 880) {
  const [isSmallBrakePoint, setIsBrakePoint] = useState(
    window.innerWidth < breakOn
  );

  useEffect(() => {
    // Function to handle window resize event
    const handleResize = () => {
      // Set window width/height to state
      setIsBrakePoint(window.innerWidth < breakOn);
    };

    // Add the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakOn]);
  return isSmallBrakePoint;
}
