import type { ScaledSize, StyleSheet } from 'react-native';

export type StyleProps = {
  isDark: boolean;
} & ScaledSize;

export type UseStyle<T> = { styles: T };

export type StyleObject<T> =
  | T
  | StyleSheet.NamedStyles<T>
  | ((props: StyleProps) => T | StyleSheet.NamedStyles<T>);
