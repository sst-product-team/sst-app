import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import codePush from 'react-native-code-push';
export default function Dashboard() {
  const [status, setStatus] = useState('init');

  const updateApp = () => {
    codePush
      .checkForUpdate()
      .then(remotePackage => {
        if (remotePackage === null) {
          setStatus('No update available');
          throw Error([{message: 'No update available'}]);
        } else {
          setStatus('Downloading');
          return remotePackage.download();
        }
      })
      .then(localPackage => {
        setStatus('Installing');
        return localPackage.install(codePush.InstallMode.ON_NEXT_RESTART);
      })
      .then(response => {
        // setUpdate({
        //   show: false,
        //   update: null,
        // }),
        codePush.notifyAppReady();
        codePush.restartApp();
      })
      .catch(err => {
        setStatus(err[0].message);
        console.error(err);
      });
  };
  useEffect(() => {
    // updateApp();
  }, []);

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">DashBoard</Text>
      <Text>{status}</Text>
      <Button onPress={updateApp} title="Update" />
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
