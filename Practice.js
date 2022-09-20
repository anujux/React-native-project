import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons'; 
import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

export default function Practice() {
  return (
<>
<SafeAreaView style={{flex:1}}>
  <ScrollView style={{}}>
<View style={{margin:16}}>
<View style={{borderWidth:1,height:170,borderColor:'lightgrey',borderRadius:5,backgroundColor:'lightyellow'}}>
      <View style={{flexDirection:'row',margin:20}}>
      <View style={{}}>
        <Text style={{fontSize:16,fontWeight:'700',width:200}}>Go Premium with up to 5 lakh Cyber insurance</Text>
    <Text style={{fontSize:12,fontWeight:'400',width:200,paddingTop:8}}>Your premium benifits expire in 30 days</Text>
      <TouchableOpacity style={{paddingTop:25,}}>
          <View style={{flexDirection:'row',alignItems:'centre',backgroundColor:'lightblue'}}>
          <Text style={{fontSize:16}}>
            Get Quote
          </Text>
          <AntDesign name="arrowright" size={22} color="ligthgrey" />
          </View>
      </TouchableOpacity>
    </View>
        <Image source={require('../assets/web.png')} style={{height:100,width:100}}></Image>
      </View>
</View>

</View>
</ScrollView>
</SafeAreaView>
</>
  );
}
