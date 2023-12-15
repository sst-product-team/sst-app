import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">DashBoard!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
