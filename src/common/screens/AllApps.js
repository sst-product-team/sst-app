import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

export default function AllApps() {
  const navigation = useNavigation();

  const apps = [
    {name: 'Attendance', color: '#3498db', nav: 'AttendanceScreen'},
    {name: 'Bus', color: '#2ecc71', comingSoon: true},
    {name: 'Library', color: '#e74c3c', comingSoon: true},
    {name: 'Food', color: '#f39c12', comingSoon: true},
  ];

  const navigateToApp = screenName => {
    // Navigate to the specified screen, only if not "Coming Soon"
    if (!apps.find(app => app.nav === screenName)?.comingSoon) {
      navigation.navigate(screenName);
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Select App!</Text>
      <View style={styles.appsContainer}>
        {apps.map((app, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.appSquare, {backgroundColor: app.color}]}
            onPress={() => navigateToApp(app.nav)}>
            <Text style={styles.appText}>{app.name}</Text>
            {app.comingSoon && (
              <Text style={styles.comingSoonText}>Coming Soon</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow items to wrap onto multiple lines
    justifyContent: 'space-around', // Adjust as needed
  },
  appSquare: {
    width: screenWidth * 0.4, // Adjust the width as needed
    aspectRatio: 1, // Square aspect ratio
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  appText: {
    color: 'white',
    fontSize: 16,
  },
  comingSoonText: {
    color: 'white',
    fontSize: 12,
    marginTop: 8,
  },
});
