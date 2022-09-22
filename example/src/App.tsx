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
