import React, { createContext, useContext } from 'react';

import type { SilverContextType, SilverProviderProps } from './types';

const SilverContext = createContext<SilverContextType>({
  theme: undefined,
});

export const useSilverContext = () => useContext(SilverContext);

export default function SilverProvider({
  theme,
  children,
}: SilverProviderProps) {
  return (
    <SilverContext.Provider
      value={{
        theme,
      }}
    >
      {children}
    </SilverContext.Provider>
  );
}
