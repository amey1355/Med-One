import { StyleSheet, Text, View, Image, Button, TextInput, Alert, FlatList, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import COLORS from '../consts/color';
import { useSelector, useDispatch } from 'react-redux';


const MyProfile = ({ navigation, route, props }) => {
  // const {_id,name,picture,phone,salary,email} = props.route.params.item

  const dispatch = useDispatch()
  const { data, loading } = useSelector((state) => {
    return state
  })

  console.log(data, loading)

  const fetchData = () => {
    //For Android
    // fetch("http://10.0.2.2:3000/")
    //   .then(res => res.json())
    //   .then(results => {

    //     // setData(results)
    //     // setLoading(false)
    //     dispatch({ type: "ADD_DATA", payload: results })
    //     dispatch({ type: "SET_LOADING", payload: false })

    //   }).catch(err => {
    //     Alert.alert("someting went wrong")
    //     console.log(err);
    //   })
    //For Web
    fetch("http://localhost:3000/get-data")
      .then(res => res.json())
      .then(results => {

        // setData(results)
        // setLoading(false)
        dispatch({ type: "ADD_DATA", payload: results })
        dispatch({ type: "SET_LOADING", payload: false })

      }).catch(err => {
        Alert.alert("someting went wrong")
        console.log(err);
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const renderList = ((item) => {
    return (
      <View style={{ backgroundColor: "white", }}>
        <LinearGradient
          colors={["#0033ff", "#6bc1ff"]}
          style={{ height: "40%" }}
        />
        <View style={styles.secrootStyle}>
          <Image
            // source={require('../assets/user-profile.jpg')}
            source={item.picture}
            style={{
              height: 100, width: 100,
              borderRadius: 10,
              marginBottom: 10,
              display: "flex",
              alignSelf: "center",
              marginTop: -50,
              // alignSelf: "center" 
            }}
          />

          <Text style={styles.textStyle}
            // placeholder="Enter your fname"
            label='fname'
            value={item.name}
            onChangeText={(name) => { setName(name) }}
            underlineColorAndroid={'transparent'}
          >
            {/* <AntDesign style={{marginLeft: 50,}} name="user" size={22} /> */}
            {item.name}

          </Text>
          <Text style={styles.lnametextStyle}
            // placeholder="Enter your lname"
            label='lname'
            value={item.name}
            onChangeText={(name) => { setName(name) }}
            underlineColorAndroid={'transparent'}
          >
            {/* <AntDesign style={{marginLeft: 50,}} name="user" size={22} /> */}
            {item.name}
          </Text>
          <Text style={styles.emailtextStyle}
            // placeholder="Enter your email"
            label='email'
            value={item.email}
            onChangeText={(name) => { setName(name) }}
            underlineColorAndroid={'transparent'}
          >
            {/* <AntDesign style={{marginLeft: 50,}} name="user" size={22} /> */}
            {item.email}
          </Text>
          <Text style={styles.emailtextStyle}
            placeholder="Enter your phone"
            label='phone'
            value={item.phone}
            onChangeText={(name) => { setName(name) }}
            underlineColorAndroid={'transparent'}
          >
            {/* <AntDesign style={{marginLeft: 50,}} name="user" size={22} /> */}
            {item.phone}

          </Text>
          <Text style={styles.emailtextStyle}
            // placeholder="Enter your address"
            label='address'
            value={item.address}
            onChangeText={(name) => { setName(name) }}
            underlineColorAndroid={'transparent'}
          >
            {/* <AntDesign style={{marginLeft: 50,}} name="user" size={22} /> */}
            {item.address}
            {/* Remove for dynamic data */}
            Mumbai, India 
            {/* Remove for dynamic data */}
          </Text>
          <Text style={{ marginLeft: 16, fontSize: 15, marginTop: 10, }}>Gender</Text>
          <Text style={[styles.emailtextStyle, styles.mgtextStyle]}
            // placeholder="Enter your address"
            label='address'
            value={item.address}
            onChangeText={(name) => { setName(name) }}
            underlineColorAndroid={'transparent'}
          >
            {/* <AntDesign style={{marginLeft: 50,}} name="user" size={22} /> */}
            Male
          </Text>
          <Text style={[styles.emailtextStyle, styles.fgtextStyle]}
            // placeholder="Enter your gender"
            label='male'
            // value={female}
            onChangeText={(name) => { setName(name) }}
            underlineColorAndroid={'transparent'}
          >
            {/* <AntDesign style={{marginLeft: 50,}} name="user" size={22} /> */}
            Female
          </Text>

        </View>
      </View>
    )
  })
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return renderList(item)
        }}
        keyExtractor={item => item._id}
        onRefresh={() => fetchData()}
        refreshing={loading}
      />
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
  // AntDesign: {
  //   color: "red",
  //   marginRight: 30,
  // },
  secrootStyle: {
    backgroundColor: "white",
    borderRadius: 40,
    // marginTop: -200,
    marginTop: Platform.OS === 'web' ? -100 : -200,
    // height: "100%",
    height: Platform.OS === 'web' ? "100vh" : "100%",
  },
  textStyle: {
    backgroundColor: "#e6e6e6",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-evenly",
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 90,
    paddingBottom: 20,
    marginRight: 50,
    marginLeft: -150,
    marginTop: 10,
  },
  lnametextStyle: {
    backgroundColor: "#e6e6e6",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    // alignSelf: "center",
    alignSelf: "center",
    justifyContent: "space-evenly",
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 90,
    paddingBottom: 20,
    marginRight: 0,
    marginLeft: 200,
    marginTop: -64,
  },
  emailtextStyle: {
    backgroundColor: "#e6e6e6",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignSelf: "stretch",
    // justifyContent: "space-evenly",
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 90,
    paddingBottom: 20,
    marginRight: 17,
    marginLeft: 15,
    marginTop: 10,
  },
  mgtextStyle: {
    backgroundColor: "#e6e6e6",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-evenly",
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 90,
    paddingBottom: 20,
    marginRight: 50,
    marginLeft: -150,
    marginTop: 10,
  },
  fgtextStyle: {
    backgroundColor: "#e6e6e6",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-evenly",
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 90,
    paddingBottom: 20,
    marginRight: 0,
    marginLeft: 200,
    marginTop: -64,
  },
})