import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import InfoSlider from './InfoSlider';
import COLORS from '../consts/color';
import STYLES from '../styles';

const HomePage = ({ route, navigation }) => {
    // const { myName } = route.params;

    return (
        <View style={[styles.mainContainer]}>
            {/* <Text style={[styles.mainHeader]}> Welcome To 
            {myName.replace(/@[^@]+$/, '')} 
            </Text> */}
            <View style={{ flexDirection: 'row', marginTop: 20, display: "flex", alignSelf: "center", justifyContent: "center" }}>
                <Text style={[styles.mainHeader, { fontWeight: 'bold'}]}>Welcome To </Text>
                <Text style={[{ fontWeight: 'bold', fontSize: 34, color: COLORS.dark }, { display: "flex",alignSelf: "center", justifyContent: "center" }]}>
                    Med
                </Text>
                <Text
                    style={[{ fontWeight: 'bold', fontSize: 34, color: COLORS.secondary }, { display: "flex", alignSelf: "center", justifyContent: "center" }]}>
                    One
                </Text>

            </View>
            {/* <InfoSlider/> */}
            <View style={[styles.mainContent__container]}>

                <Text style={[styles.mainContent, { marginLeft: 50, marginRight: 50, }]}>Our project is mainly based on helping people to find beds according to their needs and hospital’s beds availability, which will ultimately help people time and effort. An app which will be middleware like Uber Eats, Amazon, Uber, etc. but the use of this app will be in the medical field.
                </Text>
                <Text style={[styles.mainContent, { marginLeft: 50, marginRight: 50, marginTop: 20, }]}>
                    This app will show each and every needed information of hospitals to the patients, like how many beds are available at the hospital, what type of specialties they do have like Bypass Surgery Specialist, Cancer Specialist, etc. and patients can book appointments or beds with the help of this app.
                    Even if patients or customers need medicines, they can get their medicines delivered to their address from their chosen local medical stores.
                </Text>
                <Text style={[styles.mainContent, { marginLeft: 50, marginRight: 50, marginTop: 20, }]}>
                    It's just like how we order food from our favourite hotel or from the hotel where the particular item is available. Patients/Users will get notifications of events such as free health check-up, blood donation, etc. They will be rewarded after attending those events.
                </Text>

                {/* <Button title="Go Back" 
            onPress={() => navigation.goBack()}
        /> */}
            </View>
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
    },
    mainHeader: {
        fontSize: 35,
        color: "#4c5dab",
        marginTop: 0,
        // textTransform: "capitalize",
        display: "flex",
        alignSelf: "center",
        justifyContent: "center"
    },
    mainContent__container: {
        display: "flex",
        alignSelf: "center",
        justifyContent: "center",
        maxWidth: "70"
    },
    mainContent: {
        fontSize: 18,
        display: "flex",
        alignSelf: "center",
        justifyContent: "center"
    },

})