import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import GloabalHeader from '../components/GloabalHeader';

const HomeScreen = () => (
  <View style={styles.container}>
    <View style={styles.navhead}>
      <Text style={styles.header}>Classes and Attendance</Text>
    </View>

    <ScrollView style={{width: '100%'}}>
      <GloabalHeader />

      <View style={styles.coursecnt}>
        <View style={styles.course}>
          <View style={{width: '80%'}}>
            <Text style={styles.courseTitle}>Data Structures and Algorithms</Text>
            <Text style={styles.courseAtt}>by Kshitij Mishra</Text>
          </View>
        </View>
        <View style={{height: '100%', width: '20%', alignItems: 'center'}}>
            <Text style={{fontSize: 38}}>→</Text>
        </View>

        <View style={styles.course}>
          <View style={{width: '80%'}}>
            <Text style={styles.courseTitle}>Data Structures and Algorithms</Text>
            <Text style={styles.courseAtt}>by Kshitij Mishra</Text>
          </View>
        </View>
        <View style={{height: '100%', width: '20%', alignItems: 'center'}}>
            <Text style={{fontSize: 38}}>→</Text>
        </View>

        
      </View>



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
  coursecnt: {
    width: '100%',
    alignItems: 'center',
  },
  course: {
    backgroundColor: '#333333',
    width: '90%',
    marginVertical: '3%',
    borderRadius: 20,
    flexDirection: 'row',
  },
  courseTitle: {
    color: '#fff',
    marginTop: '5%',
    marginHorizontal: '5%',
    fontFamily: 'monospace',
  },
  courseAtt: {
    marginTop: '2%',
    fontSize: 12,
    marginHorizontal: '5%',
    fontFamily: 'monospace',
    marginBottom: '5%',
  },
});

export default HomeScreen;
