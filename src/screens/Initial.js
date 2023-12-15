import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigation from '../common/components/TabNavigation';
import Dashboard from '../common/screens/Dashboard';
import AllApps from '../common/screens/AllApps';
import AttendanceHome from '../attendance/screens/Home';

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
              },
              {
                name: 'AllApps',
                component: AllApps,
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
