<p align="center">
  <a href="#">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://iili.io/LNR46l.md.png">
      <img src="https://iili.io/LNR46l.md.png" height="128">
    </picture>
    <h1 align="center">React Native Silver</h1>
    <h4 align="center">Reactive styling (light & dark mode) for React Native applications 🎨📱</h4>
  </a>
</p>

<br>

<div align="center">
  <a href="https://www.npmjs.com/package/react-native-silver">
    <img alt="npm" src="https://img.shields.io/npm/v/react-native-silver?color=CC3534&style=flat-square"/>
  </a>
  <a href="https://www.npmjs.com/package/react-native-silver">
    <img alt="npm downloads" src="https://img.shields.io/npm/dw/react-native-silver?style=flat-square"/>
  </a>
  <a href="https://github.com/ehsanbigzad/react-native-silver">
    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/ehsanbigzad/react-native-silver?style=flat-square"/>
  </a>
  <a href="https://app.circleci.com/pipelines/github/ehsanbigzad/react-native-silver">
    <img alt="CircleCI" src="https://img.shields.io/circleci/build/github/ehsanbigzad/react-native-silver?style=flat-square&token=305ece18a287e361001a422265f8755c74c8ab13"/>
  </a>
  <a href="https://discord.gg/GnzdDSkP">
    <img alt="Discord" src="https://img.shields.io/discord/1022436158438912102?color=%237289da&style=flat-square"/>
  </a>
  <a href="#">
    <img alt="MIT" src="https://img.shields.io/github/license/ehsanbigzad/react-native-silver?style=flat-square"/>
  </a>
</div>

<br>

## Installation

```sh
npm install react-native-silver
```

## Usage

Import `createStyle` function

```ts
import createStyle from 'react-native-silver';
```

```ts
function App() {
  const { styles } = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Reactive style</Text>
    </View>
  );
}

const useStyles = createStyle(({ isDark }) => ({
  container: {
    backgroundColor: isDark ? '#000000' : '#ffffff',
  },
  text: {
    color: isDark ? '#ffffff' : '#000000',
  },
}));
```

Also properties are available inside component while calling the styles hook

```ts
const { styles, width, ... } = useStyles();
```

### Properties

| Property    | Type    | Description                                                                                                                                                         |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isDark`    | boolean | Return the current color scheme of the application                                                                                                                  |
| `width`     | number  | Return application window's width, it's value retrieved from [useWindowDimensions](https://reactnative.dev/docs/usewindowdimensions) hook                           |
| `height`    | number  | Return application window's height, it's value retrieved from [useWindowDimensions](https://reactnative.dev/docs/usewindowdimensions) hook                          |
| `fontScale` | number  | Return the scale of the font currently used, it's value retrieved from [useWindowDimensions](https://reactnative.dev/docs/usewindowdimensions) hook                 |
| `scale`     | number  | Return the pixel ratio of the device your app is running on, it's value retrieved from [useWindowDimensions](https://reactnative.dev/docs/usewindowdimensions) hook |

## Theme
It's possible to create a theme and provide manual props to `createStyle`.
### Step 1:
Create a theme in `theme.ts` file
```ts
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
// In javascript project ignore below
export type Theme = typeof theme;
```

### Step 2:
Provide the created theme to the `SilverProvider` in `App.tsx`
```tsx
import React from 'react';
import createStyle, { SilverProvider } from 'react-native-silver';

import theme from './theme'

export default function App(){
  return (
    <SilverProvider theme={theme}>
      <Home />
    </SilverProvider>
  )
}
```

### Step 3 (typescript only):
Create type file `silver.d.ts` in your types folder and add below code
```ts
import type {StyleProps} from 'react-native-silver'

import type {Theme} from './theme'

declare module 'react-native-silver' {
  interface StyleProps extends Theme {}
}
```

### Using theme props:
```ts
const useStyles = createStyle(({color, size}) => ({
  container: {
    padding: size.xl,
    backgroundColor: color.primary
  }
}))
```

## Configs
It's possible to control `isDark` value manually.

```tsx
import React from 'react';
import createStyle, { SilverProvider } from 'react-native-silver';

export default function App(){
  return (
    <SilverProvider config={{isDark: false}}>
      <Home />
    </SilverProvider>
  )
}
```

`isDark` property also accepts a function
```ts
<SilverProvider config={{isDark: () => true}}>
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
