import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BedCarousel from './BedCarousel';
import { dummyData } from '../data/Data';

const Availability = () => {
  return (
    <View>
      {/* <Text>Beds Availability</Text> */}
      <BedCarousel data = {dummyData}/>
    </View>
  )
}

export default Availability

const styles = StyleSheet.create({})