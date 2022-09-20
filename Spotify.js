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
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

const songlist = [
  {
    id: 1,
    song: "tere liye",
    image: require("../assets/D.png"),
    icon: "more-horizontal",
  },
  {
    id: 2,
    song: "tere liye",
    image: require("../assets/D.png"),
    icon: "more-horizontal",
  },
  {
    id: 2,
    song: "tere liye",
    image: require("../assets/D.png"),
    icon: "more-horizontal",
  },
  {
    id: 2,
    song: "tere liye",
    image: require("../assets/D.png"),
    icon: "more-horizontal",
  },
  {
    id: 2,
    song: "tere liye",
    image: require("../assets/D.png"),
    icon: "more-horizontal",
  },
  {
    id: 2,
    song: "tere liye",
    image: require("../assets/D.png"),
    icon: "more-horizontal",
  },
  {
    id: 2,
    song: "tere liye",
    image: require("../assets/D.png"),
    icon: "more-horizontal",
  },
  {
    id: 2,
    song: "tere liye",
    image: require("../assets/D.png"),
    icon: "more-horizontal",
  },
  {
    id: 2,
    song: "tere liye",
    image: require("../assets/D.png"),
    icon: "more-horizontal",
  },
  {
    id: 2,
    song: "tere liye",
    image: require("../assets/D.png"),
    icon: "more-horizontal",
  },
];

export default function Spotify({ navigation }) {
  const [music, setMusic] = useState(songlist);

  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <View style={{ backgroundColor: "#fff" }}>
        <View style={{ backgroundColor: "black", height: 300, flex: 1 }}>
          <View style={{}}>
            <Image
              source={require("../assets/Spo.png")}
              style={{ height: 300, width: 400 }}
            ></Image>
            <View style={{ marginHorizontal: 16 }}>
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: "800",
                  color: "white",
                  justifyContent: "flex-end",
                  bottom: 50,
                }}
              >
                Diljit Dosanjh
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "black",
            height: 100,
            flexDirection: "row",
          }}
        >
          <View style={{ marginHorizontal: 16, marginTop: 10 }}>
            <Text style={{ color: "white", fontSize: 12, fontWeight: "350" }}>
              6,30,000 monthly listners
            </Text>
            <View
              style={{
                height: 40,
                width: 90,
                borderWidth: 0.5,
                borderColor: "white",
                marginTop: 20,
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white" }}>Follow</Text>
            </View>
            <View
              style={{
                borderRadius: 100,
                height: 55,
                width: 55,
                borderWidth: 1,
                backgroundColor: "lime",
                left: 250,
                bottom: 45,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Entypo name="controller-play" size={40} color="white" />
            </View>
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "700",
                bottom: 25,
              }}
            >
              Popular
            </Text>

            <View>
              {music.map((item, index) => {
                return (
                  <Playlist key={index} item={item} navigation={navigation} />
                );
              })}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const Playlist = (props) => {
  return (
    <View style={{ marginTop: 25 }}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Random1");
        }}
        style={{
          backgroundColor: "black",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ width: "10%" }}>
          <Text style={{ color: "white" }}>{props.item.id}</Text>
        </View>
        <View style={{ width: 40 }}>
          <Image
            source={props.item.image}
            style={{ height: 40, width: 40, borderRadius: 5 }}
          ></Image>
        </View>
        <View style={{ width: "70%", paddingHorizontal: 20 }}>
          <Text style={{ color: "white", fontWeight: "600", fontSize: 14 }}>
            {props.item.song}
          </Text>
        </View>
        <View style={{}}>
          <Feather name={props.item.icon} size={24} color="white" />
        </View>
        {/* <View style={{height:40,width:40,backgroundColor:'white'}} ></View> */}
      </TouchableOpacity>
    </View>
  );
};
