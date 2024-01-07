import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import NamePlate from '../components/NamePlate';

const HomeScreen = () => (
  <View style={styles.container}>
    <View style={styles.navhead}>
      <Text style={styles.header}>Micro Campus</Text>
    </View>

    <ScrollView style={{width: '100%'}}>
      <NamePlate />
    </ScrollView>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  header: {
    color: '#000',
    fontSize: 18,
    marginVertical: '5%',
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  navhead: {
    width: '100%',
    alignItems: 'center',
  },
});

export default HomeScreen;
