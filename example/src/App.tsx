import React from 'react';
import { SilverProvider } from 'react-native-silver';

import Home from './home';
import theme from './theme';

export default function App() {
  return (
    <SilverProvider theme={theme} config={{ isDark: () => true }}>
      <Home />
    </SilverProvider>
  );
}
