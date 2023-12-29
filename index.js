/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import App from './src/App';
import {name as appName} from './app.json';
import codePush from 'react-native-code-push';
let codePushOptions = {checkFrequency: codePush.CheckFrequency.MANUAL};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

// AppRegistry.registerComponent(appName, () => codePush(Main)); // for auto update at startup
AppRegistry.registerComponent(appName, () => codePush(codePushOptions)(Main));
