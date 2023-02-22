import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from '../../screens/login/LogIn';
import Signup from '../../screens/signup/Signup';
const AppStack = createNativeStackNavigator();

// StackContainer
function AuthStack() {
    const options = {
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerShown: false,
    };

    return (
        <AppStack.Navigator initialRouteName={'login'}>
            <AppStack.Screen
                name="login"
                component={LogIn}
                options={options}
            />
            <AppStack.Screen
                name="signup"
                component={Signup}
                options={options}
            />
        </AppStack.Navigator>
    );
}
export default AuthStack;
