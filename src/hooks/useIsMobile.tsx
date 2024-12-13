import { useState, useEffect } from 'react';

export default function useIsMobile(screenWidth: number) {
  const isClient = typeof window === 'object';

  const [isMobile, setIsMobile] = useState<boolean>(
    isClient ? window.innerWidth <= screenWidth : false
  );

  function handleWindowSizeChange() {
    setIsMobile(isClient ? window.innerWidth <= screenWidth : false);
  }

  useEffect(() => {
    if (!isClient) {
      return;
    }

    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClient, screenWidth]);

  return isMobile;
}
