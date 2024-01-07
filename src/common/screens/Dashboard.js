import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import WelcomeMessage from '../components/WelcomeMessage';
import Charts from '../components/Charts/Charts';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <WelcomeMessage />
        <Text style={styles.username}>Kushagra S</Text>
        <Charts />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingHorizontal: '8%',
  },
  username: {
    fontSize: 32,
    color: '#000',
    fontFamily: 'monospace',
    marginTop: 10,
  },
});
