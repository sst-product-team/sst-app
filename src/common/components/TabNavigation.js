import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

const renderIcon = ({route, focused, color, descriptors}) => {
  const {options} = descriptors[route.key];
  if (options.tabBarIcon) {
    return options.tabBarIcon({focused, color, size: 24});
  }

  return null;
};

const getLabelText = ({route, descriptors}) => {
  const {options} = descriptors[route.key];
  const label =
    options.tabBarLabel !== undefined
      ? options.tabBarLabel
      : options.title !== undefined
        ? options.title
        : route.title;

  return label;
};

const TabNavigator = ({navigation, state, descriptors, insets}) => (
  <BottomNavigation.Bar
    style={{
      backgroundColor: '#FAFAFA',
      borderTopWidth: 0.5,
      borderTopColor: '#E5E5E5',
      elevation: 4,
    }}
    navigationState={state}
    safeAreaInsets={insets}
    onTabPress={({route, preventDefault}) => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (event.defaultPrevented) {
        preventDefault();
      } else {
        navigation.dispatch({
          ...navigation.navigate(route.name, route.params),
          target: state.key,
        });
      }
    }}
    renderIcon={props => renderIcon({...props, descriptors})}
    getLabelText={props => getLabelText({...props, descriptors})}
  />
);

export default function Root({route}) {
  const {tabs} = route.params;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={TabNavigator}>
      {tabs.map(t => (
        <Tab.Screen
          key={t.name}
          name={t.name}
          component={t.component}
          options={{
            tabBarLabel: t.name,
            tabBarIcon: props => <Icon {...props} name={t.iconName} />, // eslint-disable-line react/no-unstable-nested-components
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
