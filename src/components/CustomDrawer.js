import { React, useState } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    Button,
    Alert
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';

import COLORS from '../consts/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic
} from '@expo-google-fonts/poppins'

import { useFonts } from '@expo-google-fonts/poppins';
// import { Item } from 'react-native-paper/lib/typescript/components/List/List';



const CustomDrawer = (props, item) => {
const {navigation} = props
    const [isLoaded, setIsLoaded] = useState(true);
    let [fontsLoad, error] = useFonts({
        Poppins_100Thin,
        Poppins_100Thin_Italic,
        Poppins_200ExtraLight,
        Poppins_200ExtraLight_Italic,
        Poppins_300Light,
        Poppins_300Light_Italic,
        Poppins_400Regular,
        Poppins_400Regular_Italic,
        Poppins_500Medium,
        Poppins_500Medium_Italic,
        Poppins_600SemiBold,
        Poppins_600SemiBold_Italic,
        Poppins_700Bold,
        Poppins_700Bold_Italic,
        Poppins_800ExtraBold,
        Poppins_800ExtraBold_Italic,
        Poppins_900Black,
        Poppins_900Black_Italic
    });

    const handleLogout = (email, password) => {
        //For Android
        // fetch("http://10.0.2.2:3000/logout", {
        //     method: "post",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         email,
        //         password,

        //     })
        // })
        //For Windows
        fetch("http://localhost:3000/logout", {
            method: "get",
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify({
            //     email,
            //     password,
            // })
        })
            .then(() => {
                // Alert.alert(`${data.name} is saved successfuly`)
                // Alert.alert(JSON.stringify(`${data.name} is saved successfully`));
                // Alert.alert(JSON.stringify(`saved successfully`));
                // Alert.alert("Logout Successfull")
                navigation.navigate('Home');
                Alert.alert("Done signout")
                console.log("Successfully Done sign out");
            })
            .catch(err => {
                Alert.alert("someting went wrong")
                // Alert.alert(JSON.stringify(`Something went wrong while SIGNING IN`, err));
                console.log(err);
            })
    }
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: COLORS.secondary, marginTop: -10, }}>
                <ImageBackground
                    source={require('../assets/menu-bg.png')}
                    style={{ padding: 20 }}>
                    <Image
                        source={require('../assets/user-profile.jpg')}
                        // source={item.picture}
                        style={{
                            height: 80, width: 80, borderRadius: 40, marginBottom: 10,
                            // alignSelf: "center" 
                        }}
                    />

                    <TouchableOpacity onPress={() => navigation.navigate("MyProfile")}>

                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 22,
                                // fontFamily: 'Roboto-Regular',
                                // fontFamily: "Poppins_600SemiBold",
                                marginBottom: -10,
                                // alignSelf: "center"
                                fontWeight: "bold",
                            }}
                        >
                            {/* Mark Zukya */}
                            User
                        </Text>
                        <Entypo style={{ marginLeft: 200, marginTop: -15, display: "flex", alignSelf: "flex-end" }} name="pencil" size={22} color="white" />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        {/* <Text
                            style={{
                                color: '#fff',
                                fontFamily: 'Roboto-Regular',
                                marginRight: 5,
                            }}>
                            280 Coins
                        </Text> */}
                        {/* <FontAwesome5 name="coins" size={14} color="#fff" /> */}
                    </View>
                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                {/* <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <Ionicons name="share-social-outline" size={22} />
                        <Text
                            style={{
                                fontSize: 15,
                                // fontFamily: 'Roboto-Medium',
                                marginLeft: 5,
                            }}>
                            Tell a Friend
                        </Text>
                    </View>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => { handleLogout() }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="exit-outline" size={22} />
                        <Text
                            style={{
                                fontSize: 15,
                                // fontFamily: 'Roboto-Medium',
                                marginLeft: 30,
                            }}>
                            Sign Out
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawer;