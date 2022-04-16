import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import COLORS from '../consts/color';
import CustomDrawer from './CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';

import MyProfile from './MyProfile';
import Availability from './Availability';
import HomePage from './HomePage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import RegForm from './RegForm';
import Booking from './Booking';
// import Medicines from './Medicines';
import MedsHome from'../screens/Home';
import Camps from './Camps';
import Wallet from './Wallet';
import { Provider } from 'react-redux';
import BedsAvailability from './BedsAvailability';

const MedOne = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} initialRouteName="Home" screenOptions={{
      // headerShown: false,
      // drawerActiveBackgroundColor: COLORS.secondary,
      // drawerActiveTintColor: '#fff',
      drawerInactiveTintColor: '#333',
      drawerLabelStyle: {
        // fontFamily: 'Roboto-Medium',
        fontSize: 15,
      }
    }}>

      <Drawer.Screen name="Home" component={HomePage} 
      options={{
        drawerIcon: ({color}) => (
          <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
        />


        <Drawer.Screen name="New Beds" component={BedsAvailability} 
        options={{
          drawerIcon: ({color}) => (
            <Fontisto name="bed-patient" size={22} color={color} />
          ),
        }}
        />


        <Drawer.Screen name="Sign In" component={SignIn} 
        options={{
          drawerIcon: ({color}) => (
            <AntDesign name="user" size={22} color={color} />
          ),
        }}
        />
        {/* <Drawer.Screen name="Profile Page" component={MyProfile} 
        options={{
          drawerIcon: ({color}) => (
            <AntDesign name="profile" size={22} color={color} />
          ),
        }}
        /> */}
        <Drawer.Screen name="My Profile" component={RegForm} 
        options={{
          drawerIcon: ({color}) => (
            <AntDesign name="profile" size={22} color={color} />
          ),
        }}
        />
        
        <Drawer.Screen name="Availability" component={Availability} 
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="event-available" size={22} color={color} />
          ),
        }}
        />
        <Drawer.Screen name="Booking" component={Booking} 
        options={{
          drawerIcon: ({color}) => (
            <Fontisto name="bed-patient" size={22} color={color} />
          ),
        }}
        />
        <Drawer.Screen name="Medicines" component={MedsHome}
        options={{
          drawerIcon: ({color}) => (
            <AntDesign name="medicinebox" size={22} color={color} />
          ),
        }}
        />
        <Drawer.Screen name="Camps" component={Camps} 
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome5 name="clinic-medical" size={22} color={color} />
          ),
        }}
        />
        <Drawer.Screen name="Wallet" component={Wallet} 
        options={{
          drawerIcon: ({color}) => (
            // <Ionicons name="wallet-outline" size={22} color={color} />
            <AntDesign name="wallet" size={22} color={color} />
          ),
        }}
        />
        {/* <Drawer.Screen name="SignIn" component={SignIn} 
        options={{
          drawerIcon: ({color}) => (
            <AntDesign name="login" size={22} color={color} />
          ),
        }}/> */}
        {/* <Drawer.Screen name="SignUp" component={SignUp} 
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="create-outline" size={22} color={color} />
          ),
        }}
        /> */}
        {/* <Drawer.Screen name="RegForm" component={RegForm} 
        options={{
          drawerIcon: ({color}) => (
            <AntDesign name="form" size={22} color={color} />
          ),
        }}
        /> */}
    </Drawer.Navigator>

  )
}

export default MedOne

const styles = StyleSheet.create({})