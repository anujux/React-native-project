import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native';

export default function Signup() {
  return (
<>
<View style={{alignItems:'center',paddingTop:100}}>
    <Image source={require('../assets/Group481319.png')} style={{height:300 , width:300}}></Image>
</View>
<View style={{backgroundColor:'white',alignItems:'center', justifyContent:'center'}}>
    <Text style={{fontSize:40, textAlign:'center', paddingTop:40, color:'green',fontWeight:'600'}}>
        All your Kitchen Needs Are here
    </Text>
</View>
   <View style={{justifyContent:'center', alignItems:'center',marginTop:20}}>
   <TouchableOpacity style={{backgroundColor:'black',height:55 , width:280,justifyContent:'center', alignItems:'center', marginTop:70}}>
        <Text style={{fontSize:24,color:'white'}}>
            Next
        </Text>
    </TouchableOpacity>
   </View>
</>
  );
}

