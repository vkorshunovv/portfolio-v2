import { useState, useEffect } from "react";

export function useStaggeredLoad() {
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);
  const [isSubHeaderLoaded, setIsSubHeaderLoaded] = useState(false);
  const [isCardsLoaded, setIsCardsLoaded] = useState(false);
  const [isStarsLoaded, setIsStarsLoaded] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setIsHeaderLoaded(true), 400),
      setTimeout(() => setIsSubHeaderLoaded(true), 600),
      setTimeout(() => setIsCardsLoaded(true), 700),
      setTimeout(() => setIsStarsLoaded(true), 1100),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return { isHeaderLoaded, isSubHeaderLoaded, isCardsLoaded, isStarsLoaded };
}
