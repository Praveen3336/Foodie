import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Initial from './components/Initial';
import Login from './components/Login';
import Otp from './components/Otp';
import Home from './components/Home';
import Locating from './components/Locating';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName='initial' screenOptions={{headerShown:false}}>
     <Stack.Screen name='initial' component={Initial}/>
     <Stack.Screen name='login' component={Login}/>
     <Stack.Screen name='otp' component={Otp}/>
     <Stack.Screen name='home' component={Home}/>
     <Stack.Screen name='locating' component={Locating}/>
     </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
