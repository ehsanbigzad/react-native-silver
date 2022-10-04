import type { BaseTheme } from './types';

export default function createTheme<T extends BaseTheme>(themeObject: T): T {
  return themeObject;
}
