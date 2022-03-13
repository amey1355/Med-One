import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from './HomePage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import RegForm from './RegForm';
import COLORS from '../consts/color';
import CustomDrawer from './CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const MedOne = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} initialRouteName="Home" screenOptions={{
      // headerShown: false,
      drawerActiveBackgroundColor: COLORS.secondary,
      drawerActiveTintColor: '#fff',
      drawerInactiveTintColor: '#333',
      drawerLabelStyle: {
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
      },
    }}>
      
        <Drawer.Screen name="Home" component={HomePage} 
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
        />
        <Drawer.Screen name="SignIn" component={SignIn} 
        options={{
          drawerIcon: ({color}) => (
            <AntDesign name="login" size={22} color={color} />
          ),
        }}/>
        <Drawer.Screen name="SignUp" component={SignUp} 
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="create-outline" size={22} color={color} />
          ),
        }}
        />
        <Drawer.Screen name="RegForm" component={RegForm} 
        options={{
          drawerIcon: ({color}) => (
            <AntDesign name="form" size={22} color={color} />
          ),
        }}
        />
    </Drawer.Navigator>

  )
}

export default MedOne

const styles = StyleSheet.create({})