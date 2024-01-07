/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import Initial from './screens/Initial';
import Login from './screens/Login';

function App() {
  var userLoggedIn = true;

  if (userLoggedIn) {
    return <Initial />;
  } else {
    return <Login />;
  }
}

export default App;
