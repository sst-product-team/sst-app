import {Text, View, StyleSheet} from 'react-native';

const HomeScreen = () => (
  <View style={styles.container}>
    <Text variant="headlineMedium">Attendance Home!</Text>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
