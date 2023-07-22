import React, {useRef} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardScreen from '../../screens/DashboardScreen';
import NavigationRoutes from '../NavigationRoutes';
import navigationOptions from '../NavigationOptions';

const Stack = createStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        name={NavigationRoutes.DASHBOARD}
        component={DashboardScreen}
        options={navigationOptions}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
