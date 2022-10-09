import { createTheme } from 'react-native-silver';

const theme = createTheme({
  color: {
    primary: '#69758a',
    black: '#000000',
    white: '#ffffff',
  },
  size: {
    s: 7,
    m: 12,
    l: 18,
    xl: 26,
    xxl: 32,
  },
});

export default theme;
export type Theme = typeof theme;
