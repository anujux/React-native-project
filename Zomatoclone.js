import React, { useState } from "react";
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
import { Entypo } from "@expo/vector-icons";

const category = [
  {
    name: "abc",
  },
  {
    name: "yyyyy",
  },
  {
    name: "yyyyy",
  },
  {
    name: "yyyyy",
  },
  {
    name: "yyyyy",
  },
  {
    name: "yyyyy",
  },
];

export default function Second({ navigation }) {
  const [cat, setCat] = useState(category);
  return (
    <View style={{ flex: 1, margin: 10 }}>
      <View style={{ marginTop: 50 }}>
        <View style={{ flexDirection: "row", height: 50 }}>
          <Entypo
            name="location"
            size={24}
            color="red"
            style={{ position: "absolute" }}
          />
          <Text style={{ fontSize: 18, marginLeft: 29 }}>Home</Text>

          <Text
            style={{
              marginTop: 30,
              position: "absolute",
              fontWeight: "400",
              fontSize: 12,
            }}
          >
            108 Mangal Vihar gopal pura bye
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 250,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 1,
            }}
          >
            <Image
              source={require("../assets/Avtar.png")}
              style={{ height: 35, width: 35 }}
            ></Image>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <TextInput
            style={{
              height: 50,
              width: "100%",
              borderWidth: 1,
              borderColor: "gray",
              padding: 15,
              marginTop: 25,
              borderRadius: 8,
              borderColor: "lightgrey",
            }}
            placeholder={"Search"}
          ></TextInput>
          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    borderRadius: 4,
                    borderWidth: 1,
                    marginTop: 30,
                    height: 35,
                    width: 100,
                    margin: 5,
                    justifyContent: "center",
                    shadowColor: "grey",
                    shadowOpacity: 50,
                    shadowRadius: 5,
                  }}
                >
                  <Text style={{ textAlign: "center" }}>Pure Veg</Text>
                </View>
                <View
                  style={{
                    borderRadius: 4,
                    borderWidth: 1,
                    marginTop: 30,
                    height: 35,
                    width: 100,
                    margin: 5,
                    justifyContent: "center",
                    shadowColor: "grey",
                    shadowOpacity: 50,
                    shadowRadius: 5,
                  }}
                >
                  <Text style={{ textAlign: "center" }}>Pure Veg</Text>
                </View>
                <View
                  style={{
                    borderRadius: 4,
                    borderWidth: 1,
                    marginTop: 30,
                    height: 35,
                    width: 100,
                    margin: 5,
                    justifyContent: "center",
                    shadowColor: "grey",
                    shadowOpacity: 50,
                    shadowRadius: 5,
                  }}
                >
                  <Text style={{ textAlign: "center" }}>Pure Veg</Text>
                </View>
                <View
                  style={{
                    borderRadius: 4,
                    borderWidth: 1,
                    marginTop: 30,
                    height: 35,
                    width: 100,
                    margin: 5,
                    justifyContent: "center",
                    shadowColor: "grey",
                    shadowOpacity: 50,
                    shadowRadius: 5,
                  }}
                >
                  <Text style={{ textAlign: "center" }}>Pure Veg</Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <View>
            <Text style={{ fontSize: 24, fontWeight: "700", marginTop: 20 }}>
              Order Again
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View
                style={{
                  flexDirection: "row",
                  borderRadius: 4,
                  borderWidth: 0.2,
                  height: 100,
                  width: 240,
                  marginTop: 20,
                  margin: 5,
                  borderColor: "lightgrey",
                }}
              >
                <View style={{ flex: 1 }}>
                  <Image
                    source={require("../assets/Vector.png")}
                    style={{
                      height: 100,
                      width: 100,
                      borderBottomLeftRadius: 10,
                      borderTopLeftRadius: 10,
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignContent: "center",
                    padding: 10,
                  }}
                >
                  <Text>abzszjhbfdjxfdkghfgjkc</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  borderRadius: 4,
                  borderWidth: 0.2,
                  height: 100,
                  width: 240,
                  marginTop: 20,
                  margin: 5,
                  borderColor: "lightgrey",
                }}
              >
                <View style={{ flex: 1 }}>
                  <Image
                    source={require("../assets/Vector.png")}
                    style={{
                      height: 100,
                      width: 100,
                      borderBottomLeftRadius: 10,
                      borderTopLeftRadius: 10,
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignContent: "center",
                    padding: 10,
                  }}
                >
                  <Text>abzszjhbfdjxfdkghfgjkc</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  borderRadius: 4,
                  borderWidth: 0.2,
                  height: 100,
                  width: 240,
                  marginTop: 20,
                  margin: 5,
                  borderColor: "lightgrey",
                }}
              >
                <View style={{ flex: 1 }}>
                  <Image
                    source={require("../assets/Vector.png")}
                    style={{
                      height: 100,
                      width: 100,
                      borderBottomLeftRadius: 10,
                      borderTopLeftRadius: 10,
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignContent: "center",
                    padding: 10,
                  }}
                >
                  <Text>abzszjhbfdjxfdkghfgjkc</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  borderRadius: 4,
                  borderWidth: 0.2,
                  height: 100,
                  width: 240,
                  marginTop: 20,
                  margin: 5,
                  borderColor: "lightgrey",
                }}
              >
                <View style={{ flex: 1 }}>
                  <Image
                    source={require("../assets/Vector.png")}
                    style={{
                      height: 100,
                      width: 100,
                      borderBottomLeftRadius: 10,
                      borderTopLeftRadius: 10,
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignContent: "center",
                    padding: 10,
                  }}
                >
                  <Text>abzszjhbfdjxfdkghfgjkc</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  borderRadius: 4,
                  borderWidth: 0.2,
                  height: 100,
                  width: 240,
                  marginTop: 20,
                  margin: 5,
                  borderColor: "lightgrey",
                }}
              >
                <View style={{ flex: 1 }}>
                  <Image
                    source={require("../assets/Vector.png")}
                    style={{
                      height: 100,
                      width: 100,
                      borderBottomLeftRadius: 10,
                      borderTopLeftRadius: 10,
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignContent: "center",
                    padding: 10,
                  }}
                >
                  <Text>abzszjhbfdjxfdkghfgjkc</Text>
                </View>
              </View>
              {/* <View style={{borderRadius:4,borderWidth:0.2,height:100,width:240,marginTop:20,margin:5,borderColor:'lightgrey'}}><Image source={require('../assets/Vector.png')}style={{height:100,width:100,borderBottomLeftRadius:10,borderTopLeftRadius:10}}></Image></View> */}

              {/* <View style={{flexDirection:'column',flex:1}}>
                                            <View style={{borderRadius:4,borderWidth:0.2,height:100,width:240,marginTop:20,borderColor:'lightgrey',margin:5}}><Image source={require('../assets/Vector3.png')}style={{height:100,width:100,borderBottomLeftRadius:10,borderTopLeftRadius:10}}></Image></View>
                                            <View style={{borderRadius:4,borderWidth:0.2,height:100,width:240,marginTop:20,borderColor:'lightgrey',margin:5}}><Image source={require('../assets/Vector3.png')}style={{height:100,width:100,borderBottomLeftRadius:10,borderTopLeftRadius:10}}></Image></View>
                                                </View>   */}
            </ScrollView>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View
                style={{
                  flexDirection: "row",
                  borderRadius: 4,
                  borderWidth: 0.2,
                  height: 100,
                  width: 240,
                  marginTop: 20,
                  margin: 5,
                  borderColor: "lightgrey",
                }}
              >
                <View style={{ flex: 1 }}>
                  <Image
                    source={require("../assets/Vector.png")}
                    style={{
                      height: 100,
                      width: 100,
                      borderBottomLeftRadius: 10,
                      borderTopLeftRadius: 10,
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignContent: "center",
                    padding: 10,
                  }}
                >
                  <Text>abzszjhbfdjxfdkghfgjkc</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  borderRadius: 4,
                  borderWidth: 0.2,
                  height: 100,
                  width: 240,
                  marginTop: 20,
                  margin: 5,
                  borderColor: "lightgrey",
                }}
              >
                <View style={{ flex: 1 }}>
                  <Image
                    source={require("../assets/Vector.png")}
                    style={{
                      height: 100,
                      width: 100,
                      borderBottomLeftRadius: 10,
                      borderTopLeftRadius: 10,
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignContent: "center",
                    padding: 10,
                  }}
                >
                  <Text>abzszjhbfdjxfdkghfgjkc</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  borderRadius: 4,
                  borderWidth: 0.2,
                  height: 100,
                  width: 240,
                  marginTop: 20,
                  margin: 5,
                  borderColor: "lightgrey",
                }}
              >
                <View style={{ flex: 1 }}>
                  <Image
                    source={require("../assets/Vector.png")}
                    style={{
                      height: 100,
                      width: 100,
                      borderBottomLeftRadius: 10,
                      borderTopLeftRadius: 10,
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignContent: "center",
                    padding: 10,
                  }}
                >
                  <Text>abzszjhbfdjxfdkghfgjkc</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  borderRadius: 4,
                  borderWidth: 0.2,
                  height: 100,
                  width: 240,
                  marginTop: 20,
                  margin: 5,
                  borderColor: "lightgrey",
                }}
              >
                <View style={{ flex: 1 }}>
                  <Image
                    source={require("../assets/Vector.png")}
                    style={{
                      height: 100,
                      width: 100,
                      borderBottomLeftRadius: 10,
                      borderTopLeftRadius: 10,
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignContent: "center",
                    padding: 10,
                  }}
                >
                  <Text>abzszjhbfdjxfdkghfgjkc</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  borderRadius: 4,
                  borderWidth: 0.2,
                  height: 100,
                  width: 240,
                  marginTop: 20,
                  margin: 5,
                  borderColor: "lightgrey",
                }}
              >
                <View style={{ flex: 1 }}>
                  <Image
                    source={require("../assets/Vector.png")}
                    style={{
                      height: 100,
                      width: 100,
                      borderBottomLeftRadius: 10,
                      borderTopLeftRadius: 10,
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignContent: "center",
                    padding: 10,
                  }}
                >
                  <Text>abzszjhbfdjxfdkghfgjkc</Text>
                </View>
              </View>
              {/* <View style={{borderRadius:4,borderWidth:0.2,height:100,width:240,marginTop:20,margin:5,borderColor:'lightgrey'}}><Image source={require('../assets/Vector.png')}style={{height:100,width:100,borderBottomLeftRadius:10,borderTopLeftRadius:10}}></Image></View> */}

              {/* <View style={{flexDirection:'column',flex:1}}>
                                       <View style={{borderRadius:4,borderWidth:0.2,height:100,width:240,marginTop:20,borderColor:'lightgrey',margin:5}}><Image source={require('../assets/Vector3.png')}style={{height:100,width:100,borderBottomLeftRadius:10,borderTopLeftRadius:10}}></Image></View>
                                       <View style={{borderRadius:4,borderWidth:0.2,height:100,width:240,marginTop:20,borderColor:'lightgrey',margin:5}}><Image source={require('../assets/Vector3.png')}style={{height:100,width:100,borderBottomLeftRadius:10,borderTopLeftRadius:10}}></Image></View>
                                           </View>   */}
            </ScrollView>
          </View>

          <View style={{}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Spotify");
              }}
              style={{ alignItems: "center" }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../assets/GG3.png")}
                  style={{ height: 220, width: 410, marginTop: 40 }}
                ></Image>
                <View
                  style={{
                    borderColor: "red",
                    borderWidth: 2,
                    height: 35,
                    width: 300,
                    justifyContent: "center",
                    borderRadius: 5,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ fontSize: 14, fontWeight: "500", color: "red" }}
                  >
                    Click here To Order
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <Text
              style={{
                textAlign: "left",
                fontSize: 18,
                fontWeight: "800",
                marginTop: 20,
              }}
            >
              Eat What Makes you healthy
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  borderRadius: 200,
                  borderColor: "black",
                  height: 70,
                  width: 70,
                  borderWidth: 0.5,
                  margin: 8,
                  borderColor: "lightgrey",
                }}
              >
                <Image
                  source={require("../assets/FF2.png")}
                  style={{ height: 70, width: 70 }}
                ></Image>
                <Text
                  style={{
                    fontSize: 12,
                    color: "grey",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  Healthy
                </Text>
              </View>
              <View
                style={{
                  borderRadius: 200,
                  borderColor: "black",
                  height: 70,
                  width: 70,
                  borderWidth: 0.5,
                  margin: 8,
                  borderColor: "lightgrey",
                }}
              >
                <Image
                  source={require("../assets/FF2.png")}
                  style={{ height: 70, width: 70 }}
                ></Image>
                <Text
                  style={{
                    fontSize: 12,
                    color: "grey",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  Pizza
                </Text>
              </View>
              <View
                style={{
                  borderRadius: 200,
                  borderColor: "black",
                  height: 70,
                  width: 70,
                  borderWidth: 0.5,
                  margin: 8,
                  borderColor: "lightgrey",
                }}
              >
                <Image
                  source={require("../assets/FF2.png")}
                  style={{ height: 70, width: 70 }}
                ></Image>
                <Text
                  style={{
                    fontSize: 12,
                    color: "grey",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  Rools
                </Text>
              </View>
              <View
                style={{
                  borderRadius: 200,
                  borderColor: "black",
                  height: 70,
                  width: 70,
                  borderWidth: 0.5,
                  margin: 8,
                  borderColor: "lightgrey",
                }}
              >
                <Image
                  source={require("../assets/FF2.png")}
                  style={{ height: 70, width: 70 }}
                ></Image>
                <Text
                  style={{
                    fontSize: 12,
                    color: "grey",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  Burger
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  borderRadius: 200,
                  borderColor: "black",
                  height: 70,
                  width: 70,
                  borderWidth: 0.5,
                  margin: 8,
                  borderColor: "lightgrey",
                }}
              >
                <Image
                  source={require("../assets/FF2.png")}
                  style={{ height: 70, width: 70 }}
                ></Image>
                <Text
                  style={{
                    fontSize: 12,
                    color: "grey",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  Dal
                </Text>
              </View>
              <View
                style={{
                  borderRadius: 200,
                  borderColor: "black",
                  height: 70,
                  width: 70,
                  borderWidth: 0.5,
                  margin: 8,
                  borderColor: "lightgrey",
                }}
              >
                <Image
                  source={require("../assets/FF2.png")}
                  style={{ height: 70, width: 70 }}
                ></Image>
                <Text
                  style={{
                    fontSize: 12,
                    color: "grey",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  Sandwich
                </Text>
              </View>
              <View
                style={{
                  borderRadius: 200,
                  borderColor: "black",
                  height: 70,
                  width: 70,
                  borderWidth: 0.5,
                  margin: 8,
                  borderColor: "lightgrey",
                }}
              >
                <Image
                  source={require("../assets/FF2.png")}
                  style={{ height: 70, width: 70 }}
                ></Image>
                <Text
                  style={{
                    fontSize: 12,
                    color: "grey",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  Paratha
                </Text>
              </View>
              <View
                style={{
                  borderRadius: 200,
                  borderColor: "black",
                  height: 70,
                  width: 70,
                  borderWidth: 0.5,
                  margin: 8,
                  borderColor: "lightgrey",
                }}
              >
                <Image
                  source={require("../assets/FF2.png")}
                  style={{ height: 70, width: 70 }}
                ></Image>
                <Text
                  style={{
                    fontSize: 12,
                    color: "grey",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  Chatt
                </Text>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 50 }}>
            <Text
              style={{ fontSize: 18, textAlign: "left", fontWeight: "800" }}
            >
              Check This Out
            </Text>
            <View
              style={{
                borderRadius: 10,
                borderWidth: 1,
                backgroundColor: "black",
                height: 140,
                marginTop: 20,
                flexDirection: "row",
              }}
            >
              <AntDesign name="staro" size={50} color="yellow" />
              <AntDesign name="staro" size={50} color="yellow" />
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: 30 }}>
            <Text
              style={{ fontSize: 18, textAlign: "left", fontWeight: "800" }}
            >
              Recommended For you
            </Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {cat.map((item, index) => (
              <Product key={index} item={item} />
            ))}
          </ScrollView>
          <View></View>
        </ScrollView>
      </View>
    </View>
  );
}

function Product(props) {
  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          borderColor: "grey",
          height: 254,
          width: 160,
          borderWidth: 1,
          marginTop: 20,
          borderRadius: 20,
          margin: 8,
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <View style={{ flex: 1 }}>
            <Image
              source={require("../assets/Vector.png")}
              style={{
                height: 150,
                width: 160,
                borderTopLeftRadius: 19,
                borderTopRightRadius: 19,
              }}
            />
            <View style={{ height: 100, margin: 5 }}>
              <Text style={{ fontSize: 16 }}>{props.item.name}</Text>
              <Text style={{ fontSize: 14, marginTop: 10 }}>
                <Entypo name="location-pin" size={18} color="black" />
                30 min . 10 km
              </Text>
            </View>
          </View>
          {/* <View style={{flex:1, justifyContent:'center', alignContent:'center', padding:10}}>
                    <Text>abzszjhbfdjxfdkghfgjkc</Text>
                </View> */}
        </View>
      </View>
    </View>
  );
}
