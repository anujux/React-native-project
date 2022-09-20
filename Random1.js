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

export default function Random1({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{}}>
        <View style={{ alignItems: "center", marginTop: 100 }}>
          <Image
            source={require("../assets/As.png")}
            style={{ height: 341, width: 341, borderRadius: 200 }}
          ></Image>
          <View style={{ marginTop: 40 }}>
            <Text style={{ fontSize: 38, fontWeight: "800" }}>
              Register your Event
            </Text>
            <Text style={{ fontSize: 16, textAlign: "center", marginTop: 25 }}>
              Organise effcientlly
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{ marginTop: 150, alignItems: "center" }}
        onPress={() => {
          navigation.navigate("Spotify");
        }}
      >
        <View
          style={{
            height: 55,
            width: 328,

            justifyContent: "center",
            backgroundColor: "orange",
            borderRadius: 15,
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 18 }}>Next</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
