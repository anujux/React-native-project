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
} from "react-native";
import { useState } from "react";

export default function Random3({ navigation }) {
  // const[card,setcard]= useState(partycard)
  return (
    <SafeAreaView>
      <View style={{ flex: 1, alignItems: "center" }}>
        <View
          style={{ height: 180, width: 320, borderWidth: 1, borderRadius: 10 }}
        >
          <View
            style={{
              height: 40,
              width: 320,
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../assets/As.png")}
              style={{
                height: 40,
                width: 318,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            ></Image>
            <View
              style={{
                borderRadius: 100,
                height: 40,
                width: 40,

                position: "absolute",
                marginTop: 15,
                margin: 10,
                backgroundColor: "white",
              }}
            >
              <Image
                source={require("..//assets/D.png")}
                style={{ height: 40, width: 40, borderRadius: 1000 }}
              ></Image>
            </View>
          </View>
          <View
            style={{
              margin: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              Pop Party Ticket
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "500" }}>$ 240 </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
