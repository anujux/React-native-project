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
import ToggleSwitch from "toggle-switch-react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Random2({ navigation }) {
  return (
    // <SafeAreaView>
    <View style={{ flex: 1 }}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#F12711", "#F5AF19"]}
        style={{
          height: 170,
          width: 400,
        }}
      >
        <View>
          <View
            style={{
              height: 42,
              width: 200,
              borderWidth: 1,
              marginTop: 100,
              borderRadius: 5,
            }}
          >
            <View
              style={{
                height: 10,
                width: 25,
                borderWidth: 0.3,
                borderRadius: 5,
              }}
            ></View>
          </View>
        </View>
      </LinearGradient>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 24, fontWeight: "700", margin: 10 }}>
            Register Your Event
          </Text>
          <Text style={{ fontSize: 14, margin: 10 }}>
            Upload a Profile Picture
          </Text>
        </View>
        <View
          style={{
            height: 140,
            width: 126,
            borderWidth: 0.4,
            bottom: 45,
          }}
        >
          <Image
            source={require("../assets/Spo.png")}
            style={{ height: 140, width: 126 }}
          ></Image>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <TextInput
          style={{
            borderWidth: 0.5,
            height: 55,
            width: 350,
            margin: 16,
            borderRadius: 5,
            padding: 10,
            color: "grey",
          }}
        >
          Your Event Title
        </TextInput>
        <TextInput
          style={{
            borderWidth: 0.5,
            height: 55,
            width: 350,
            margin: 16,
            borderRadius: 5,
            padding: 10,
            color: "grey",
          }}
        >
          @Ankush Sharme
        </TextInput>
        <TextInput
          style={{
            borderWidth: 0.5,
            height: 55,
            width: 350,
            margin: 16,
            borderRadius: 5,
            padding: 10,
            color: "grey",
          }}
        >
          @Private
        </TextInput>
        <TextInput
          style={{
            borderWidth: 0.5,
            height: 55,
            width: 350,
            margin: 16,
            borderRadius: 5,
            padding: 10,
            color: "grey",
          }}
        >
          #15
        </TextInput>
        <ToggleSwitch
          isOn={false}
          onColor="green"
          offColor="red"
          label="Age Restrictions 18+ label"
          labelStyle={{ color: "black", fontWeight: "900" }}
          size="s,all"
          onToggle={(isOn) => console.log("changed to : ", isoff)}
        />
        <View
          style={{
            flexDirection: "row",
            width: 320,
            justifyContent: "flex-end",
            marginTop: 40,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Random1");
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#F12711", "#F5AF19"]}
              style={{
                borderRadius: 100,
                height: 60,
                width: 60,

                backgroundColor: "black",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View>
                <AntDesign name="arrowright" size={28} color="white" />
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    // </SafeAreaView>
  );
}
