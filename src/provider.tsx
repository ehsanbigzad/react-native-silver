import React, { createContext, useContext } from 'react';

import type { SilverContextType, SilverProviderProps } from './types';

const SilverContext = createContext<SilverContextType>({
  theme: null,
  config: null,
});

export const useSilverContext = () => useContext(SilverContext);

export default function SilverProvider({
  theme,
  config,
  children,
}: SilverProviderProps) {
  return (
    <SilverContext.Provider
      value={{
        theme,
        config,
      }}
    >
      {children}
    </SilverContext.Provider>
  );
}
