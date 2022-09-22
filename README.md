# React Native Silver

![npm](https://img.shields.io/npm/v/react-native-silver?color=CC3534&style=flat-square)
![npm](https://img.shields.io/npm/dw/react-native-silver?style=flat-square)
![GitHub Repo stars](https://img.shields.io/github/stars/ehsanbigzad/react-native-silver?style=flat-square)
![CircleCI](https://img.shields.io/circleci/build/github/ehsanbigzad/react-native-silver?style=flat-square&token=305ece18a287e361001a422265f8755c74c8ab13)
![Discord](https://img.shields.io/discord/1022436158438912102?color=%237289da&style=flat-square)
![GitHub](https://img.shields.io/github/license/ehsanbigzad/react-native-silver?style=flat-square)

Reactive styling for React Native applications

> Under development, use on your own risk.

## Installation

```sh
npm install react-native-silver
```

## Usage

```ts
import React from 'react';
import { View, Text } from 'react-native';
import createStyle from 'react-native-silver';

export default function App() {
  const { styles } = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Reactive style</Text>
    </View>
  );
}

const useStyles = createStyle(({ isDark }) => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isDark ? '#000000' : '#ffffff',
  },
  text: {
    color: isDark ? '#ffffff' : '#000000',
  },
}));
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
