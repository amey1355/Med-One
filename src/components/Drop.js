import {React, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import ModalPicker from './ModalPicker';

const Drop = () => {
    const [chooseData, setChooseData] = useState("Select User type");
    const [isModalVisible, setIsModalVisible] = useState(false);

    const changeModalVisibility = (bool) => {
        setIsModalVisible(bool)
    }

    const setData = (option) => {
        setChooseData(option)
    }
  return (
    <View style={styles.container}>
        <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => changeModalVisibility(true)}
        >
            <Text style={styles.text}>{chooseData}</Text>
        </TouchableOpacity>
        <Modal
            transparent={true}
            animationType="fade"
            visible={isModalVisible}
            nRequestClose={() => changeModalVisibility(false)}
        >
            <ModalPicker 
            changeModalVisibility={changeModalVisibility}
            setData={setData}
            />
        </Modal>
    </View>
  )
}

export default Drop;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        marginVertical: 20,
        fontSize: 22,
    },
    touchableOpacity: {
        backgroundColor: "white",
        // alignSelf: "stretch",
        paddingHorizontal: 20,
        marginHorizontal: 20,
    },
})