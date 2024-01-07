import {View, Text, StyleSheet} from 'react-native';

function NamePlate() {
  return (
    <View style={styles.nameplatecnt}>
      <View style={styles.nameplate}>
        <Text
          style={{
            color: '#fff',
            fontSize: 24,
            fontFamily: 'monospace',
            marginTop: '5%',
          }}></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nameplatecnt: {
    width: '100%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameplate: {
    width: '90%',
    height: '100%',
    backgroundColor: '#1a1a1a',
    borderRadius: 26,
  },
});

export default NamePlate;
