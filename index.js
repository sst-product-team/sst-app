/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import App from './src/App';
import {name as appName} from './app.json';
import FlashMessage from 'react-native-flash-message';

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
      <FlashMessage position="bottom" floating />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
