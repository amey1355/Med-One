// import React from 'react';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Animated,
  Platform,
  Alert
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import bedscolor from '../consts/bedscolor';
import bedsmanual from '../consts/bedsmanual';
const { width } = Dimensions.get('screen');
const cardWidth = width / 1.8;

const BedsAvailability = ({ navigation }) => {
  // // Beds Data from Database Starting
  const dispatch = useDispatch()
  const { data, loading } = useSelector((state) => {
    return state
  })

  console.log(data, loading)

  const fetchBedsData = () => {
    //For Android
    fetch("http://10.0.2.2:3000/get-beds-data")
      // .then(res => res.json())
      .then(results => {

        // setData(results)
        // setLoading(false)
        dispatch({ type: "ADD_DATA", payload: results })
        dispatch({ type: "SET_LOADING", payload: false })

      }).catch(err => {
        Alert.alert("someting went wrong")
        console.log(err);
      })
    //For Web
    // fetch("http://localhost:3000/get-beds-data")
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
  }

  useEffect(() => {
    fetchBedsData()
  }, [])
  // Beds Data from Database End 

  const categories = ['All', 'Popular', 'Top Rated', 'Featured', 'Luxury'];
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const [activeCardIndex, setActiveCardIndex] = React.useState(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const CategoryList = ({ navigation }) => {
    return (
      <View style={style.categoryListContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View>
              <Text
                style={{
                  ...style.categoryListText,
                  color:
                    selectedCategoryIndex == index
                      ? bedscolor.primary
                      : bedscolor.grey,
                }}>
                {item}
              </Text>
              {selectedCategoryIndex == index && (
                <View
                  style={{
                    height: 3,
                    width: 30,
                    backgroundColor: bedscolor.primary,
                    marginTop: 2,
                  }}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const Card = ({ hotel, index }, beditem) => {
    // const {item} = props;
    const inputRange = [
      (index - 1) * cardWidth,
      index * cardWidth,
      (index + 1) * cardWidth,
    ];
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.7, 0, 0.7],
    });
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8],
    });

    // const renderBedsList = ((item) =>{

    return (
      <TouchableOpacity
        disabled={activeCardIndex != index}
        activeOpacity={1}
        onPress={() => navigation.navigate('BedsAvailabilityDetails', hotel)}>
        <Animated.View style={{ ...style.card, transform: [{ scale }] }}>
          <Animated.View style={{ ...style.cardOverLay, opacity }} />
          <View style={style.priceTag}>
            <Text
              style={{ color: bedscolor.white, fontSize: 20, fontWeight: 'bold' }}>
              ${hotel.price}
            </Text>
          </View>
          <Image source={hotel.image} style={style.cardImage} />
          <View style={style.cardDetails}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View>
                <Text style={{ fontWeight: 'bold', fontSize: 17 }}>
                  {hotel.name}
                </Text>
                <Text style={{ color: bedscolor.grey, fontSize: 12 }}>
                  {hotel.location}
                </Text>
              </View>
              <Icon name="bookmark-border" size={26} color={bedscolor.primary} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View style={{ flexDirection: 'row' }}>
                <Icon name="star" size={15} color={bedscolor.orange} />
                <Icon name="star" size={15} color={bedscolor.orange} />
                <Icon name="star" size={15} color={bedscolor.orange} />
                <Icon name="star" size={15} color={bedscolor.orange} />
                <Icon name="star" size={15} color={bedscolor.grey} />
              </View>
              {/* <Text style={{fontSize: 10, color: bedscolor.grey}}>365reviews</Text> */}
              <Text style={{ fontSize: 10, color: bedscolor.grey }}>Available Beds: {hotel.available}</Text>
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>

    );
  };

  const TopHotelCard = ({ hotel }) => {
    return (
      <View style={style.topHotelCard}>
        <View
          style={{
            position: 'absolute',
            top: 5,
            right: 5,
            zIndex: 1,
            flexDirection: 'row',
          }}>
          <Icon name="star" size={15} color={bedscolor.orange} />
          <Text style={{ color: bedscolor.white, fontWeight: 'bold', fontSize: 15 }}>
            5.0
          </Text>
        </View>
        <Image style={style.topHotelCardImage} source={hotel.image} />
        <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{hotel.name}</Text>
          <Text style={{ fontSize: 7, fontWeight: 'bold', color: bedscolor.grey }}>
            {hotel.location}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: bedscolor.white }}>
      <View style={style.header}>
        <View style={{ paddingBottom: 15 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
            Find your Bed
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>in </Text>
            <Text
              style={{ fontSize: 30, fontWeight: 'bold', color: bedscolor.primary }}>
              Mumbai
            </Text>
          </View>
        </View>
        {/* <Icon name="person-outline" size={38} color={bedscolor.grey} /> */}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.searchInputContainer}>
          <Icon name="search" size={30} style={{ marginLeft: 20 }} />
          <TextInput
            placeholder="Search"
            style={{ fontSize: 20, paddingLeft: 10 }}
          />
        </View>
        <CategoryList />
        <View style={{ display: Platform.OS === 'web' ? 'none' : 'flex' }}>
          <Animated.FlatList
            onMomentumScrollEnd={(e) => {
              setActiveCardIndex(
                Math.round(e.nativeEvent.contentOffset.x / cardWidth),
              );
            }}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true },
            )}
            horizontal
            data={bedsmanual}
            contentContainerStyle={{
              paddingVertical: 30,
              paddingLeft: 20,
              paddingRight: cardWidth / 2 - 40,
              //   marginLeft: Platform.OS === 'web' ? "20%" : 0,
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => <Card hotel={item} index={index} />}
            snapToInterval={cardWidth}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <Text style={{ fontWeight: 'bold', color: bedscolor.grey }}>
            Top Beds
          </Text>
          <Text style={{ color: bedscolor.grey }}>Show all</Text>
        </View>
        <FlatList
          data={bedsmanual}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            marginTop: 20,
            paddingBottom: 30,
          }}
          renderItem={({ item }) => <TopHotelCard hotel={item} />}
        />


          </ScrollView>
        {/* Beds Data from db displaying  */}
        <View>
          <FlatList
            data={data}
            renderItem={({ beditem }) => {
              return Card(beditem)
            }}
            keyExtractor={beditem => beditem.name}
            onRefresh={() => fetchBedsData()}
            refreshing={loading}
          />
        </View>
        {/* Beds Data from db displaying  */}

    </SafeAreaView>

  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: bedscolor.light,
    marginTop: 15,
    marginLeft: 20,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30,
  },
  categoryListText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  card: {
    height: 280,
    width: cardWidth,
    elevation: 15,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: bedscolor.white,
  },
  cardImage: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  priceTag: {
    height: 60,
    width: 80,
    backgroundColor: bedscolor.primary,
    position: 'absolute',
    zIndex: 1,
    right: 0,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardDetails: {
    height: 100,
    borderRadius: 15,
    backgroundColor: bedscolor.white,
    position: 'absolute',
    bottom: 0,
    padding: 20,
    width: '100%',
  },
  cardOverLay: {
    height: 280,
    backgroundColor: bedscolor.white,
    position: 'absolute',
    zIndex: 100,
    width: cardWidth,
    borderRadius: 15,
  },
  topHotelCard: {
    height: 120,
    width: 120,
    backgroundColor: bedscolor.white,
    elevation: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  topHotelCardImage: {
    height: 80,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});

export default BedsAvailability;