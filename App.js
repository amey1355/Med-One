import 'react-native-gesture-handler';
import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // // SideBar imports
import profile from './assets/profile.png';
// Tab ICons...
import home from './assets/home.png';
import search from './assets/search.png';
import notifications from './assets/bell.png';
import settings from './assets/settings.png';
import logout from './assets/logout.png';
// Menu
import menu from './assets/menu.png';
import close from './assets/close.png';
// Photo
import photo from './assets/photo.jpg';
import Side from './src/components/Side';
// // // SideBar imports

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
export default function App() {
  const Stack = createNativeStackNavigator();
  return (

    // Navigation
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MedOne">
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="RegForm" component={RegForm} />
        <Stack.Screen name="Home" component={HomePage} />
        {/* <Stack.Screen name="Side" component={Side} /> */}
        {/* <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomePage} />
          <Drawer.Screen name="SignIn" component={SignIn}/>
        </Drawer.Navigator> */}
        <Stack.Screen style={styles.medOne} name="MedOne" component={MedOne} />
      </Stack.Navigator>
    </NavigationContainer>
    // Navigation

  );
}

const styles = StyleSheet.create({
  medOne: {
    
  },
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
