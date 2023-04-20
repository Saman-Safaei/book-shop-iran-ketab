import { useCallback, useEffect, useState } from "react";

export default function useQuery(size: "sm" | "md" | "lg" | "xl" | "2xl") {
  const [isBigger, setIsBigger] = useState(true);

  const resizeHandler = useCallback(() => {
    const sizeInPixels =
      size === "sm"
        ? 680
        : size === "md"
        ? 768
        : size === "lg"
        ? 1024
        : size === "xl"
        ? 1280
        : size === "2xl"
        ? 1536
        : 0;
    
    if (window.innerWidth >= sizeInPixels) {
      setIsBigger(true);
    } else {
      setIsBigger(false);
    }
  }, [size]);

  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [resizeHandler]);

  return { isSmaller: !isBigger, isBigger: isBigger };
}
