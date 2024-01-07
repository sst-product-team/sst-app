import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import TabNavigation from '../common/components/TabNavigation';
import Dashboard from '../common/screens/Dashboard';

const AllApps = React.lazy(() => import('../common/screens/AllApps'));
const AttendanceHome = React.lazy(() => import('../attendance/screens/Home'));
const HostelHome = React.lazy(() => import('../hostel/screens/Hostel'));

const Stack = createNativeStackNavigator();
const Initial = () => {
  const colorA = '#fafafa';
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colorA} barStyle="dark-content" />
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
                iconName: 'chart-areaspline',
              },
              {
                name: 'Classes',
                component: AttendanceHome,
                iconName: 'school',
              },
              {
                name: 'Hostel',
                component: HostelHome,
                iconName: 'home-variant',
              },

              {
                name: 'Profile',
                component: AllApps,
                iconName: 'account-circle',
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
