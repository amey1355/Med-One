import 'react-native-gesture-handler';
import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import COLORS from './src/consts/color';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {reducer} from './reducers/reducer'

const store  = createStore(reducer)

import SignUp from './src/components/SignUp';
import SignIn from './src/components/SignIn';
import HomePage from './src/components/HomePage';
import RegForm from './src/components/RegForm';
// MedOne is Drawer 
import MedOne from './src/components/MedOne';

// Drawer
const Drawer = createDrawerNavigator();
// Drawer

// Mix
// function MedOne() {
//   return (<Drawer.Navigator initialRouteName="Home">
//     <Drawer.Screen name="Home" component={HomePage} />
//     <Drawer.Screen name="SignIn" component={SignIn} />
//     <Drawer.Screen name="SignUp" component={SignUp} />
//     <Drawer.Screen name="RegForm" component={RegForm} />
//   </Drawer.Navigator>)
// }
// Mix

// Medicines Page Import Start
import { useFonts } from "expo-font";

import Home from "./src/screens/Home";
import Details from "./src/screens/Details";
import MyProfile from './src/components/MyProfile';
// Medicines Page Import End
// Medicines Page theme Start
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

// Medicines Page theme End

function App() {
  // To not display warning messages on android application
  // LogBox.ignoreAllLogs(value)
  console.disableYellowBox = true;
  // To not display warning messages on android application

  const Stack = createNativeStackNavigator();
  return (

    // Navigation
    // <NavigationContainer>
      <Stack.Navigator initialRouteName="MedOne" theme={theme}>

        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="RegForm" component={RegForm} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="MyProfile" component={MyProfile} />
        {/* Meds Page */}
        <Stack.Screen name="MedsHome" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        {/* Meds Page */}

        {/* <Stack.Screen name="Side" component={Side} /> */}
        {/* <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomePage} />
          <Drawer.Screen name="SignIn" component={SignIn}/>
        </Drawer.Navigator> */}
        <Stack.Screen options={{
          headerStyle: {
            backgroundColor: COLORS.secondary,
          }, headerTintColor: "white"
        }} name="MedOne" component={MedOne} />
      </Stack.Navigator>
    // </NavigationContainer>
    // Navigation

  );
}
export default ()=>{
  return (
    <Provider store={store}>
    <NavigationContainer>
      <App />
    </NavigationContainer>
    </Provider>
  )
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sidebarappContainer: {
    flex: 1,
    backgroundColor: '#5359D1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
