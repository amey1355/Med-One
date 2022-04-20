import { React, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Platform, Modal, Button } from 'react-native';
import COLORS from '../consts/color';
import STYLES from '../styles/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialIcons, Entypo } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
// import * as Camera from 'expo-camera';
// import Drop from './Drop';
// import HomePage from './HomePage';
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
                case "picture":
                    return route.params.picture
                case "address":
                    return route.params.address
                case "gender":
                    return route.params.gender
            }
        }
        return ""
    }

    const [name, setName] = useState(getDetails("name"))
    const [lname, setLname] = useState(getDetails("lname"))
    const [email, setEmail] = useState(getDetails("email"))
    const [phone, setPhone] = useState(getDetails("phone"))
    const [password, setPassword] = useState(getDetails("password"))
    const [picture, setPicture] = useState(getDetails("picture"))
    const [address, setAddress] = useState(getDetails("address"))
    const [gender, setGender] = useState(getDetails("gender"))
    const [modal, setModal] = useState(false)

    const submitData = () => {
        fetch("http://10.0.2.2:3000/send-data", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
             name,
             email,
             phone,
             password,
             picture,
             address,
             gender,

            })
        })
        // fetch("http://localhost:3000/send-data", {
        //     method: "post",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         name,
        //         lname,
        //         email,
        //         phone,
        //         password,
        //         picture,
        //         address,
        //         gender,
        //     })
        // })
            // .then(res => res.json())
            .then(() => {
                // Alert.alert(`${data.name} is saved successfuly`)
                // Alert.alert(JSON.stringify(`${data.name} is saved successfully`));
                navigation.navigate("Home")
            })
            .catch(err => {
                //   Alert.alert("someting went wrong", err)
                Alert.alert(JSON.stringify("Something went wrong while sending data", err));
                console.log(err);
            })
    }

    //Update and pic
    const updateDetails = () => {
        // fetch("http://10.0.2.2:3000/update",{
        //     method:"post",
        //     headers:{
        //       'Content-Type': 'application/json'
        //     },
        //     body:JSON.stringify({
        //         id:route.params._id,
        //         name,
        //         email,
        //         phone,
        //         password,
        //         picture,
        //         address,
        //         gender,
        //     })
        // })
        fetch("http://localhost:3000/update", {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: route.params._id,
                name,
                lname,
                email,
                phone,
                password,
                picture,
                address,
                gender,
            })
        })
            .then(res => res.json())
            .then(data => {
                Alert.alert(`${data.name} is updated successfuly`)
                navigation.navigate("Home")
            })
            .catch(err => {
                Alert.alert("someting went wrong while updating")
            })
    }

    const pickFromGallery = async () => {
        const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
        if (granted) {
            let data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.5
            })
            if (!data.cancelled) {
                let newfile = {
                    uri: data.uri,
                    type: `test/${data.uri.split(".")[1]}`,
                    name: `test.${data.uri.split(".")[1]}`

                }
                handleUpload(newfile)
            }
        } else {
            Alert.alert("you need to give up permission to work")
        }
    }
    const pickFromCamera = async () => {
        const { granted } = await Permissions.askAsync(Permissions.CAMERA)
        if (granted) {
            let data = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 0.5
            })
            if (!data.cancelled) {
                let newfile = {
                    uri: data.uri,
                    type: `test/${data.uri.split(".")[1]}`,
                    name: `test.${data.uri.split(".")[1]}`

                }
                handleUpload(newfile)
            }
        } else {
            Alert.alert("you need to give up permission to work")
        }
    }


    const handleUpload = (image) => {
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'medone')
        data.append("cloud_name", "ameysawant2")

        fetch("https://api.cloudinary.com/v1_1/ameysawant2/image/upload", {
            method: "post",
            body: data
        }).then(res => res.json()).
            then(data => {
                setPicture(data.url)
                setModal(false)
            }).catch(err => {
                Alert.alert("error while uploading")
                console.log(err);
            })
    }
    //Update and pic
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

                <TextInput style={styles.textInput}
                    placeholder="Enter your name"
                    label='name'
                    // value={name}
                    onChangeText={(name) => { setName(name) }}
                    underlineColorAndroid={'transparent'}
                />
                <TextInput style={styles.textInput}
                    placeholder="Enter your Last name"
                    label='lname'
                    // value={lname}
                    onChangeText={(lname) => { setLname(lname) }}
                    underlineColorAndroid={'transparent'}
                />

                <TextInput style={styles.textInput}
                    placeholder="Enter your email"
                    label='email'
                    // value={email}
                    onChangeText={(email) => { setEmail(email) }}
                    underlineColorAndroid={'transparent'}
                />
                {/* Added after starting to make db */}

                <TextInput style={styles.textInput}
                    placeholder="Enter your phone"
                    label='phone'
                    // value={phone}
                    onChangeText={(phone) => { setPhone(phone) }}
                    underlineColorAndroid={'transparent'}
                />

                <TextInput style={styles.textInput}
                    placeholder="Enter your address"
                    label='address'
                    // value={address}
                    onChangeText={(address) => { setAddress(address) }}
                    underlineColorAndroid={'transparent'}
                />
                <TextInput style={styles.textInput}
                    placeholder="Enter your gender"
                    label='gender'
                    // value={gender}
                    onChangeText={(gender) => { setGender(gender) }}
                    underlineColorAndroid={'transparent'}
                />
                {/* Added after starting to make db */}

                <TextInput style={styles.textInput}
                    placeholder="Enter password"
                    label='password'
                    // value={password}
                    secureTextEntry={true}
                    onChangeText={(password) => { setPassword(password) }}
                    underlineColorAndroid={'transparent'}
                />

                {/* New photo */}
                <Button
                    // style={styles.inputStyle}
                    style={styles.saveStyle}
                    icon={picture == "" ? "upload" : "check"}
                    mode="contained"
                    theme={theme}
                    onPress={() => setModal(true)}
                    title="Upload Image"
                >
                    Upload Image
                </Button>
                {route.params ?
                    <Button
                        // style={styles.inputStyle}
                        style={styles.saveStyle}
                        icon="content-save"
                        mode="contained"
                        theme={theme}
                        title="Update Details"

                        onPress={() => updateDetails()}>Update details</Button>
                    :
                    <Button
                        // style={styles.inputStyle}
                        style={styles.saveStyle}
                        icon="content-save"
                        mode="contained"
                        theme={theme}
                        title="Save"
                        onPress={() => submitData()}>save</Button>
                }
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modal}
                    onRequestClose={() => {
                        setModal(false)
                    }}>
                    <View style={styles.modalView}>
                        <View style={styles.modalButtonView}>
                            <Button icon="camera"
                                theme={theme}
                                mode="contained"
                                title="Camera"

                                onPress={() => pickFromCamera()}>camera</Button>
                            <Button
                                icon="image-area"
                                mode="contained"
                                theme={theme}
                                title="Gallery"

                                onPress={() => pickFromGallery()}>gallery</Button>
                        </View>
                        <Button
                            theme={theme}
                            title="Cancel"
                            onPress={() => setModal(false)}>cancel</Button>
                    </View>
                </Modal>
            </View>
            {/* New photo */}
            {/* <TouchableOpacity style={styles.btnStyling}>
                <View style={STYLES.btnPrimary}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}
                        onPress={() => submitData()}
                    >Register</Text>
                </View>
            </TouchableOpacity> */}
        </View>
    )
}
const theme = {
    colors: {
        primary: "#006aff"
    }
}

export default RegForm

const styles = StyleSheet.create({

    regForm: {
        alignSelf: "stretch",
        backgroundColor: "#FFFEFA"
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
        width: Platform.OS === 'android' ? 300 : 500,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: "lightgray",
        borderRadius: 5,
        // height: 300,
        // width: Platform.OS === 'android' ? 300 : 400
    },


    root: {
        flex: 1,
        backgroundColor: "white"
    },
    inputStyle: {
        height: 100,
        margin: 5,
    },
    modalView: {
        position: "absolute",
        bottom: 2,
        width: "100%",
        backgroundColor: "white"
    },
    modalButtonView: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    saveStyle: {
        height: 50,
    },
})