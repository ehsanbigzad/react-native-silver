import { useMemo } from 'react';
import { StyleSheet, useColorScheme, useWindowDimensions } from 'react-native';
import type { UseStyle, StyleObject } from './types/createStyle';

export default function createStyle<
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>
>(style: StyleObject<T>): () => UseStyle<T> {
  const getStyle = typeof style === 'function' ? style : () => style;

  function useStyles(): UseStyle<T> {
    const scheme = useColorScheme();
    const dimensions = useWindowDimensions();

    // Prepare style props
    const styleProps = useMemo(() => {
      return {
        ...dimensions,
        isDark: scheme === 'dark',
      };
    }, [scheme, dimensions]);

    // Create memoized style
    const memoizedStyle = useMemo(() => {
      return {
        styles: StyleSheet.create(getStyle(styleProps)),
      };
    }, [styleProps]);

    return memoizedStyle;
  }

  return useStyles;
}
