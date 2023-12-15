import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigation from '../common/components/TabNavigation';
import Dashboard from '../common/screens/Dashboard';

const AllApps = React.lazy(() => import('../common/screens/AllApps'));
const AttendanceHome = React.lazy(() => import('../attendance/screens/Home'));

const Stack = createNativeStackNavigator();
const Initial = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabNavigation">
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{
            headerShown: false,
          }}
          initialParams={{
            tabs: [
              {
                name: 'Dashboard',
                component: Dashboard,
                iconName: 'home',
              },
              {
                name: 'Apps',
                component: AllApps,
                iconName: 'apps',
              },
            ],
          }}
        />
        <Stack.Screen
          name="AttendanceScreen"
          component={AttendanceHome}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Initial;
