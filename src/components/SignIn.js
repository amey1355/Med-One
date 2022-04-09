import 'react-native-gesture-handler';
import { React, useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/color';
import STYLES from '../styles';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

// API
// import axios from 'axios';

const SignIn = ({ navigation, route }) => {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const navigation = useNavigation();
    // const submit = () => {
    //     // return Alert.alert(userName, password);
    //     if (userName === "ameysawant@gmail.com" && password === "ameysawant") {
    //         alert(`Thank You ${userName}`);
    //         navigation.navigate("Home", { myName: `${userName.replace(/@[^@]+$/, '')}` })
    //     }
    //     else {
    //         alert(`Username and Password is not correct`);
    //     }
    // }

    //Login Functionality:
    const handleLogin = () => {
        // fetch("http://10.0.2.2:3000/login", {
        //     method: "post",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         email,
        //         password,

        //     })
        // })
            fetch("http://localhost:3000/login", {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                })
            })
            .then(() => {
                // Alert.alert(`${data.name} is saved successfuly`)
                // Alert.alert(JSON.stringify(`${data.name} is saved successfully`));
                // Alert.alert(JSON.stringify(`saved successfully`));
                // alert("Done With Logg")
                navigation.navigate('Home');
                // console.log("Successfully Done sign in");
            })
            .catch(err => {
                  Alert.alert("someting went wrong")
                // Alert.alert(JSON.stringify(`Something went wrong while SIGNING IN`, err));
                // console.log(err);
            })
    }
    //Login Functionality


    return (
        <SafeAreaView
            style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', marginTop: 40 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: COLORS.dark }}>
                        Med
                    </Text>
                    <Text
                        style={{ fontWeight: 'bold', fontSize: 22, color: COLORS.secondary }}>
                        One
                    </Text>
                </View>

                <View style={{ marginTop: 70 }}>
                    <Text style={{ fontSize: 27, fontWeight: 'bold', color: COLORS.dark }}>
                        Welcome Back,
                    </Text>
                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: COLORS.light }}>
                        Sign in to continue
                    </Text>
                </View>

                <View style={{ marginTop: 20 }}>
                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="mail-outline"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon}
                        />
                        <TextInput placeholder="Email" style={STYLES.input}
                            autoCapitalize='none'
                            autoCorrect={false}
                            label={email}
                            onChangeText={(actualData) => setEmail(actualData)}
                        />
                    </View>
                    <View style={STYLES.inputContainer}>
                        <Icon
                            name="lock-outline"
                            color={COLORS.light}
                            size={20}
                            style={STYLES.inputIcon}
                        />
                        <TextInput
                            placeholder="Password"
                            style={STYLES.input}
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={true}
                            label={password}
                            onChangeText={(actualData) => setPassword(actualData)}
                        />
                    </View>
                    <View style={STYLES.btnPrimary}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}
                            onPress={() => handleLogin()}
                        >
                            Sign In
                        </Text>
                    </View>
                    <View
                        style={{
                            marginVertical: 20,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <View style={STYLES.line}></View>
                        <Text style={{ marginHorizontal: 5, fontWeight: 'bold' }}>OR</Text>
                        <View style={STYLES.line}></View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <View style={STYLES.btnSecondary}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                                Sign in with
                            </Text>
                            <Image
                                style={STYLES.btnImage}
                                source={require('../assets/facebook.png')}
                            />
                        </View>
                        <View style={{ width: 10 }}></View>
                        <View style={STYLES.btnSecondary}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                                Sign in with
                            </Text>
                            <Image
                                style={STYLES.btnImage}
                                source={require('../assets/google.png')}
                            />
                        </View>
                    </View>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        marginTop: 40,
                        marginBottom: 20,
                    }}>
                    <Text style={{ color: COLORS.light, fontWeight: 'bold' }}>
                        Don`t have an account ?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{ color: COLORS.secondary, fontWeight: 'bold' }}>
                            Sign up
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;