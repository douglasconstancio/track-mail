import React, { useEffect, useState } from 'react';

import { NavigationMobile } from './mobile/Navigation.mobile';
import { NavigationWeb } from './Navigation.web';

export const Navigation = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState<boolean>(() => window.innerWidth <= 576);

  const handleResize = () => setIsMobile(window.innerWidth <= 576);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return !isMobile ? <NavigationWeb /> : <NavigationMobile />;
};
