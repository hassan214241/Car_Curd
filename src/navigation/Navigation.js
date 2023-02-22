import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import AuthStack from './authStack/AuthStack';
import StackContainer from './stack/Stack';
import { doGetLoggedInUser } from '../redux/actions/AuthActions';
import { useState } from 'react';
import Loader from '../screens/loader/Loader';
const AppStackNavigator = createNativeStackNavigator();


export default function Navigation() {
    const dispatch = useDispatch()
    const isUserLoggedIn = useSelector(state => state.AuthReducer.isUserLoggedIn)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        dispatch(doGetLoggedInUser(setLoading))
    }, [])
    const options = {
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerShown: false,
    };

    return (
        <AppStackNavigator.Navigator screenOptions={{ headerShown: false }}>
            {
                loading ?
                    <AppStackNavigator.Screen
                        name="Loader"
                        component={Loader}
                        options={options}
                    />
                    :
                    isUserLoggedIn ? (
                        <AppStackNavigator.Screen
                            name="StackContainer"
                            component={StackContainer}
                            options={options}
                        />
                    ) : (
                        <AppStackNavigator.Screen
                            name="AuthStack"
                            component={AuthStack}
                            options={options}
                        />

                    )
            }

        </AppStackNavigator.Navigator>
    )
}