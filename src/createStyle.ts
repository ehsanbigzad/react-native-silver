import { useMemo } from 'react';
import { StyleSheet, useColorScheme, useWindowDimensions } from 'react-native';

import type { UseStyle, StyleObject } from './types';

import { useSilverContext } from './provider';

export default function createStyle<
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>
>(style: StyleObject<T>): () => UseStyle<T> {
  const getStyle = typeof style === 'function' ? style : () => style;

  function useStyles(): UseStyle<T> {
    const scheme = useColorScheme();
    const dimensions = useWindowDimensions();
    const { theme } = useSilverContext();

    // Prepare style props
    const styleProps = useMemo(() => {
      return {
        ...theme,
        ...dimensions,
        isDark: scheme === 'dark',
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scheme, dimensions]);

    // Create memoized style
    const memoizedStyle = useMemo(() => {
      return {
        ...styleProps,
        styles: StyleSheet.create(getStyle(styleProps)),
      };
    }, [styleProps]);

    return memoizedStyle;
  }

  return useStyles;
}
