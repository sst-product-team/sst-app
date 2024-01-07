import React from 'react';
import sendLoginSignal from '../common/backend/sendLoginSignal';
import {View, Text, Pressable, StyleSheet} from 'react-native';

function Login() {
  return (
    <View style={styles.LoginPage}>
      <Pressable style={styles.loginBtn} onPress={sendLoginSignal}>
        <Text style={styles.loginBtnText}>Request Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  LoginPage: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtn: {
    backgroundColor: '#1a1a1a',
    width: '40%',
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  loginBtnText: {
    color: '#cacaca',
  },
});
export default Login;
