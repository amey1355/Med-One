import React from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList, Platform, TouchableOpacity } from "react-native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../components/";
import { BuyRectButton } from "../components/BuyButton";

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%", 
      maxWidth: Platform.OS === 'web' ? "50vh" : 250,
            maxHeight: Platform.OS === 'web' ? "50vh" : 250, 
      display: "flex", justifyContent: "center", alignSelf: "center" }}
    />

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />

    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

const Details = ({ route, navigation }) => {
  
  const { data } = route.params;
//     const sendMedsData = () => {
    
//     // const name = data.name
//     // const price = data.price
//     // const category = data.category
//     // fetch("http://10.0.2.2:3000/update-meds",{
//     //     method:"post",
//     //     headers:{
//     //       'Content-Type': 'application/json'
//     //     },
//     //     body:JSON.stringify({
//     //         id:route.params._id,
//     //         purchasedmeds,
//     //     })
//     // })
//     fetch("http://localhost:3000/update-meds", {
//         method: "post",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             id: route.params._id,
//             purchasedmeds: data,
//           //   purchasedmeds : [{
//           //     "name": {
//           //       name
//           //   },
//           //     "price": {
//           //       price
//           //   },
//           //   "category": {
//           //     category
//           //   }
          
//           // }],
//             // name,
//             // price,
//             // category,
//         })
//     })
//         .then(res => res.json())
//         .then(data => {
//             // Alert.alert(`${data.name} is updated successfuly`)
//             // navigation.navigate("Home")
//             console.log("Updated Meds")
//         })
//         .catch(err => {
//             Alert.alert("someting went wrong while updating meds")
//         })
// }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <TouchableOpacity>

        <BuyRectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} 
        // onPress={alert("Bought")}
        />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />

              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    // fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Buyers
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
