import React from 'react'
// import Setup from './src/screens/Setup/Setup'
import { theme, ThemeProvider } from './src/theming';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Store from './src/config/Store';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/authStack/AuthStack';
import Navigation from './src/navigation/Navigation';
import {LogBox} from "react-native";

LogBox.ignoreLogs([
"ViewPropTypes will be removed",
"ColorPropType will be removed",
])

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={Store}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <Navigation />
            {/* <Setup /> */}
            {/* <LogIn /> */}
            {/* <Signup /> */}
            {/* <UserDetail /> */}
          </NavigationContainer>
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  )
}

export default App