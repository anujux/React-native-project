import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Login2() {
  return (
<>
<View style={{flex: 1, backgroundColor:'white'}}>
    <View>
        <Image  style={{width:400,height:400, }} source={require('../assets/Group481320.png')}></Image>
        <Text style={{color:'black',fontSize:34,fontWeight:'700',textAlign:'center',marginTop:50}}>
            Enter your Mobile No
        </Text>
    </View>
   <View >
     <View style={{backgroundColor:'lightgrey',width:400,height:60,justifyContent:'center',marginTop:100}}>
      <Text style={{textAlign:'center',fontWeight:'600',fontSize:18}}>Enter your Mobile NO</Text>
    </View>
    </View>
    
</View>
</>
  );
}
