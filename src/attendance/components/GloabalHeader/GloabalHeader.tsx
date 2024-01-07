import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {showMessage, hideMessage} from 'react-native-flash-message';

function FlashMessage(message: string, description: string, type: any) {
  showMessage({
    message: message,
    description: description,
    type: type,
  });
}

function GloabalHeader() {
  const showPercentage = (percenatge: any) => {
    var mtype = 'success';
    if (percenatge < 85) {
      mtype = 'danger';
    }

    showMessage({
      message: 'Attendance Percentage',
      description: `Your attendance percentage is 88%`,
      type: mtype,
    });
  };

  const showPSP = (psp: any) => {
    var mtype = 'success';
    if (psp < 80) {
      mtype = 'danger';
    }

    showMessage({
      message: 'Problem Solving Percentage',
      description: `Your problem solving percentage is ${psp}%`,
      type: mtype,
    });
  };

  return (
    <View style={styles.allcnt}>
      <Pressable
        onPress={() => {
          showPSP(68);
        }}
        style={styles.attpc}>
        <View
          style={{
            alignItems: 'center',
            height: '40%',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 18, fontFamily: 'monospace'}}>PSP</Text>
        </View>
        <View style={{alignItems: 'center', height: '50%'}}>
          <Text style={{fontSize: 40, fontFamily: 'monospace'}}>98%</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={() => {
          showPercentage(88);
        }}
        style={styles.attpc}>
        <View
          style={{
            alignItems: 'center',
            height: '40%',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 18, fontFamily: 'monospace'}}>
            Attendance
          </Text>
        </View>
        <View style={{alignItems: 'center', height: '50%'}}>
          <Text style={{fontSize: 40, fontFamily: 'monospace'}}>88%</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  allcnt: {
    flexDirection: 'row',
    height: 150,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  attpc: {
    backgroundColor: '#333333',
    height: '80%',
    width: '42%',
    borderRadius: 20,
  },
});

export default GloabalHeader;
