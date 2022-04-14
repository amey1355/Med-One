import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import BedCarousel from './BedCarousel';
import { dummyData } from '../data/Data';

const Availability = () => {
  return (
    <ScrollView>
      {/* <Text>Beds Availability</Text> */}
      <BedCarousel data = {dummyData}/>
      <BedCarousel data = {dummyData}/>
      <BedCarousel data = {dummyData}/>
    </ScrollView>
  )
}

export default Availability

const styles = StyleSheet.create({})