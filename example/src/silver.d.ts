import type { StyleProps } from 'react-native-silver';
import type { Theme } from './theme';

declare module 'react-native-silver' {
  interface StyleProps extends Theme {}
}
