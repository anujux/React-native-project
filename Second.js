import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons'; 
import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity, SafeAreaView, ScrollView, TextInput } from 'react-native';

export default function Second() {
  return (

<View style={{backgroundColor:'#fff'}}>
  <ScrollView style={{}}>
            <View style={{marginTop:100, justifyContent:'center',padding:10}}>
                <Text>First Name</Text>
                <TextInput style={{height:50,width:'100%',borderWidth:1, borderColor:'gray',padding:10}} placeholder={'Anuj'}></TextInput>
            </View>
                
</ScrollView>
</View>
  );
}