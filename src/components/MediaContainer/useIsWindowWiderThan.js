import { useState, useEffect } from 'react';

function getWindowWidth() {
  return window.innerWidth;
}

export default function useIsWindowWiderThan(width) {
  const [isWider, setIsWider] = useState(getWindowWidth() > width);

  useEffect(() => {
    function handleResize() {
      setIsWider(getWindowWidth() > width);
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  return isWider;
}
