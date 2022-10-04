import type { ScaledSize, StyleSheet } from 'react-native';

export type DefaultStyleProps = {
  isDark: boolean;
} & ScaledSize;

export interface StyleProps extends DefaultStyleProps {}

export type UseStyle<T> = { styles: T } & StyleProps;

export type StyleObject<T> =
  | T
  | StyleSheet.NamedStyles<T>
  | ((props: StyleProps) => T | StyleSheet.NamedStyles<T>);

export type BaseTheme = {
  [key: string]: any;
};

export type SilverContextType = {
  theme: BaseTheme | undefined;
};

export type SilverProviderProps = {
  children: React.ReactNode;
  theme?: BaseTheme;
};
