import { React, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Platform } from 'react-native';
import COLORS from '../consts/color';
import STYLES from '../styles/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Drop from './Drop';
// import { Dropdown } from 'react-native-material-dropdown';
const RegForm = ({ navigation, route }) => {
    const getDetails = (type) => {
        if (route.params) {
            switch (type) {
                case "name":
                    return route.params.name
                case "phone":
                    return route.params.phone
                case "email":
                    return route.params.email
                case "password":
                    return route.params.password
            }
        }
        return ""
    }

    const [name, setName] = useState(getDetails("name"))
    const [email, setEmail] = useState(getDetails("email"))
    const [phone, setPhone] = useState(getDetails("phone"))
    const [password, setPassword] = useState(getDetails("password"))

    const submitData = () => {
        //For Phone
        fetch("(http://10.0.2.2:3000/send-data", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, email, phone, password,
            })
        })

            // //For Web
            // fetch("http://localhost:3000/send-data", {
            //     method: "post",
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         name, email, phone, password,
            //     })
            // })
            .then(res => res.json())
            .then(data => {
                // Alert.alert(`${data.name} is saved successfuly`)
                Alert.alert(JSON.stringify(`${data.name} is saved successfully`));
                navigation.navigate("MedOne")
            })
            .catch(err => {
                //   Alert.alert("someting went wrong", err)
                Alert.alert(JSON.stringify("Something went wrong", err));
                console.log(err);
            })
    }


    return (
        <View style={styles.regForm}>
            {/* <Text style={styles.header}>Registration Form</Text> */}
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: COLORS.dark }}>
                    Med
                </Text>
                <Text
                    style={{ fontWeight: 'bold', fontSize: 22, color: COLORS.secondary }}>
                    One
                </Text>
            </View>

            <View style={styles.anotherOne}>
                    <Icon
                    name="drive-file-rename-outline"
                    color={COLORS.light}
                    size={20}
                    // style={STYLES.inputIcon}
                    style={styles.inputIcon}
                    />
                <TextInput style={styles.textInput}
                placeholder="Enter your name"
                label='name'
                // value={name}
                onChangeText={(name) => { setName(name) }}
                underlineColorAndroid={'transparent'}
                />
                <Icon
                name="mail-outline"
                color={COLORS.light}
                size={20}
                // style={STYLES.inputIcon}
                style={styles.inputIconemail}
                />
                <TextInput style={styles.textInput}
                placeholder="Enter your email"
                label='email'
                // value={email}
                onChangeText={(email) => { setEmail(email) }}
                underlineColorAndroid={'transparent'}
                />
                {/* Added after starting to make db */}
                <Icon
                name="phone"
                color={COLORS.light}
                size={20}
                // style={STYLES.inputIcon}
                style={styles.inputIconphone}
                />
                <TextInput style={styles.textInput}
                placeholder="Enter your phone"
                label='phone'
                // value={phone}
                onChangeText={(phone) => { setPhone(phone) }}
                underlineColorAndroid={'transparent'}
                />
                {/* Added after starting to make db */}
                <Icon
                name="lock-outline"
                color={COLORS.light}
                size={20}
                // style={STYLES.inputIcon}
                style={styles.inputIconpassword}
                />
                <TextInput style={styles.textInput}
                placeholder="Enter password"
                label='password'
                // value={password}
                secureTextEntry={true}
                onChangeText={(password) => { setPassword(password) }}
                underlineColorAndroid={'transparent'}
                />
            </View>

            {/* <Drop/> */}

            <TouchableOpacity style={styles.btnStyling}>
                <View style={STYLES.btnPrimary}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}
                        onPress={() => submitData()}
                    >Register</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default RegForm

const styles = StyleSheet.create({
    regForm: {
        alignSelf: "stretch",
    },
    header: {
        color: "#000",
        fontSize: 24,
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: "#199187",
        borderBottomWidth: 1,
    },
    textInput: {
        alignSelf: "stretch",
        height: 40,
        marginBottom: 30,
        color: "#000",
        borderBottomColor: "#f8f8f8",
        borderBottomWidth: 1,
        marginLeft: 30,
        fontSize: 18,
    },
    button: {
        alignSelf: "stretch",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#59cbbd",
        marginTop: 30,
    },
    btnText: {
        color: "#fff",
        fontWeight: "bold"
    },
    inputIcon: {
        // marginTop: Platform.OS === 'android' ? 200 : -240,
        marginTop: -240,
        position: 'absolute'
    },
    inputIconemail: {
        marginTop: -98,
        position: 'absolute'
    },
    inputIconphone: {
        marginTop: 41,
        position: 'absolute'
    },
    inputIconpassword: {
        marginTop: 180,
        position: 'absolute'
    },
    btnStyling: {
        display: "flex",
        justifyContent: "center",
    },
    anotherOne: {
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "white",
        width: 300,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: "lightgray",
        borderRadius: 5,
        // height: 300,
        // width: Platform.OS === 'android' ? 300 : 400
    }
})