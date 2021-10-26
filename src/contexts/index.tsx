import React from 'react';

import { ThemeContextProvider } from './ThemeContext';
import { TrackingProvider } from './TrackingContext';

interface ContextProviderProps {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: ContextProviderProps): JSX.Element => (
  <ThemeContextProvider>
    <TrackingProvider>{children}</TrackingProvider>
  </ThemeContextProvider>
  );

export default ContextProvider;
