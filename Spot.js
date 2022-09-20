import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  ColorSchemeName,
  RefreshControl,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

const selectcard = [
  {
    Image: require("../assets/Spo.png"),
    Text1: "The Ranveer Show",
    Text2: "Show- Beer Biceps",
  },
];

const selectsong = [
  {
    Image: require("../assets/Spo.png"),
  },
  {
    Image: require("../assets/Spo.png"),
  },
  {
    Image: require("../assets/Spo.png"),
  },
];

export default function Spot() {
  const [song, setSong] = useState(selectsong);
  const [card1, setCard1] = useState(selectcard);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ margin: 16 }}>
        <View style={{ flexDirection: "row", marginTop: 40 }}>
          <Text style={{ fontSize: 24, fontWeight: "700" }}>Good Morning</Text>
          <View style={{ flex: 0.2 }}>
            <Feather name="bell" size={24} color="black" />
          </View>
          <View style={{ flex: 0.2 }}>
            <Entypo name="back-in-time" size={24} color="black" />
          </View>
          <View style={{ flex: 0.5 }}>
            <AntDesign name="setting" size={24} color="black" />
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "column" }}>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {song.map((item, index) => {
            return <Example key={index} item={item} />;
          })}
        </View>
      </View>

      <View style={{ margin: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "700" }}>Your shows</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ height: 180, width: 180, borderRadius: 5 }}>
            {/* <Image source={props.item.Image} style={{height:178,width:178,borderRadius:5}} >

           </Image> */}
            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                textAlign: "center",
                marginTop: 2,
              }}
            >
              {props.item.text1}
            </Text>
            <Text style={{ fontSize: 14, textAlign: "center" }}>
              {props.item.text2}
            </Text>
          </View>
        </View>
        ;
      </View>
    </View>
  );
}

//   const play(props) {
function Example(props) {
  return (
    // <View style={{ flexDirection: 'column' }}>
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <View
        style={{
          borderWidth: 1,
          borderColor: "black",
          height: 55,
          width: 170,
          margin: 5,
          borderRadius: 5,
        }}
      >
        <Image
          source={props.item.Image}
          style={{ height: 54, width: 54, borderRadius: 4 }}
        ></Image>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: "black",
          height: 55,
          width: 170,
          margin: 5,
          borderRadius: 5,
        }}
      >
        <Image
          source={props.item.Image}
          style={{ height: 54, width: 54, borderRadius: 4 }}
        ></Image>
      </View>
    </View>
    // </View>
  );
}

function Card(props) {
  <View style={{ flexDirection: "row" }}>
    <View style={{ height: 180, width: 180, borderRadius: 5 }}>
      {/* <Image source={props.item.Image} style={{height:178,width:178,borderRadius:5}} >

         </Image> */}
      <Text
        style={{
          fontSize: 18,
          fontWeight: "700",
          textAlign: "center",
          marginTop: 2,
        }}
      >
        {props.item.text1}
      </Text>
      <Text style={{ fontSize: 14, textAlign: "center" }}>
        {props.item.text2}
      </Text>
    </View>
  </View>;
}
