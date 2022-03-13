import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from './HomePage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import RegForm from './RegForm';

const MedOne = () => {
    const Drawer = createDrawerNavigator();
  return (
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomePage} />
          <Drawer.Screen name="SignIn" component={SignIn} />
          <Drawer.Screen name="SignUp" component={SignUp} />
          <Drawer.Screen name="RegForm" component={RegForm} />
        </Drawer.Navigator>
  )
}

export default MedOne

const styles = StyleSheet.create({})