import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
// import { fetchAllClasses } from "../../backend/fetchAllClasses";

function formatDateObject(start, end, join) {
  start = new Date(start);
  end = new Date(end);
  let startString = start.toLocaleDateString();
  let startTimeString = start.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  let endString = end.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  return `${startTimeString} ${join} ${endString}`;
}

const AllClassView = () => {
  // console.log(did);
  const [classesView, setClassesView] = useState(
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.shimmer}>
        <Text style={{fontSize: 16, color: 'white'}}>Fetching classes. .</Text>
      </View>
    </ScrollView>,
  );

  return (
    <View style={styles.container}>
      {/* <View style={styles.classContainer}>
                <Text style={{fontSize: 17, color:'#cacaca'}}>DSA 101: Linked Lists IV</Text>
                <Text style={{fontSize: 14, color:'#b0b0b0', paddingTop: 5}}>09:00 AM - 12:00 AM</Text>
            </View> */}
      {classesView}
    </View>
  );
};

const styles = StyleSheet.create({
  shimmer: {
    // backgroundColor: 'rgba(255, 251, 251, 0.05)',
    width: '70%',
    height: '85%',
    borderRadius: 20,
    color: '#FFFFFF',
    marginHorizontal: 20,
    padding: 20,
  },
  scrollView: {},
  classContainer: {
    backgroundColor: 'rgba(255, 251, 251, 0.11)',
    width: 300,
    height: '85%',
    borderRadius: 20,
    color: '#FFFFFF',
    marginHorizontal: 20,
    padding: 20,
  },
  container: {
    width: '100%',
    height: '20%',
    color: '#FFFFFF',
    marginVertical: '2%',
  },
});

export default AllClassView;
