import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const AppStack = createNativeStackNavigator();

import Dashboard from '../../screens/dashboard/Dashboard';
import AddCar from '../../screens/addCar/AddCar';

// StackContainer
function StackContainer() {
  const options = {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    headerShown: false,
  };

  return (
    <AppStack.Navigator initialRouteName={'AddCar'}>
       <AppStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={options}
      />
       <AppStack.Screen
        name="AddCar"
        component={AddCar}
        options={options}
      />
    </AppStack.Navigator>
  );
}
export default StackContainer;
