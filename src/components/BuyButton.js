import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";

export const BuyCircleButton = ({ imgUrl, handlePress, route, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export const BuyRectButton = ({ minWidth, fontSize, handlePress, route, data, ...props }) => {
  const navigation = useNavigation();
//   const getDetails = (type) => {
//     if (route.params) {
//         switch (type) {
//             case "name":
//                 return route.params.name
//             case "phone":
//                 return route.params.phone
//             case "email":
//                 return route.params.email
//             case "password":
//                 return route.params.password
//             case "picture":
//                 return route.params.picture
//             case "address":
//                 return route.params.address
//             case "gender":
//                 return route.params.gender
//             case "id":
//               return route.params._id
//         }
//     }
//     return ""
// }

//   const sendMedsData = () => {
    
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
//             purchasedmeds : [{
//               "name": {
//                 name
//             },
//               "price": {
//                 price
//             },
//             "category": {
//               category
//             }
          
//           }],
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
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
      onPress={() => {
        alert("Purchased");
        // sendMedsData();
      }
      }
    >
      <Text
        style={{
          // fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        {/* Place a bid */}
        Buy Now
      </Text>
    </TouchableOpacity>
  );
};
