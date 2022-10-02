# React Native Silver

![npm](https://img.shields.io/npm/v/react-native-silver?color=CC3534&style=flat-square)
![npm](https://img.shields.io/npm/dw/react-native-silver?style=flat-square)
![GitHub Repo stars](https://img.shields.io/github/stars/ehsanbigzad/react-native-silver?style=flat-square)
![CircleCI](https://img.shields.io/circleci/build/github/ehsanbigzad/react-native-silver?style=flat-square&token=305ece18a287e361001a422265f8755c74c8ab13)
![Discord](https://img.shields.io/discord/1022436158438912102?color=%237289da&style=flat-square)
![GitHub](https://img.shields.io/github/license/ehsanbigzad/react-native-silver?style=flat-square)

Reactive styling for React Native applications

> Under development

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

Properties also available inside component while calling the styles hook

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

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
