import React from 'react';
import { View, Text } from 'react-native';
import createStyle from 'react-native-silver';

export default function Home() {
  const { styles } = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Reactive style</Text>
    </View>
  );
}

const useStyles = createStyle(({ isDark, color, size }) => ({
  container: {
    flex: 1,
    padding: size.xl,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isDark ? color.black : color.white,
  },
  text: {
    color: isDark ? color.white : color.black,
  },
}));
