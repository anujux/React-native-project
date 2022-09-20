import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
export default function Loading() {
    return (

        <>
<View style={{flex:1, backgroundColor:'white', alignItems:'center', justifyContent:"center"}}>
<View>
    <Image  source={require('../assets/Coook.png')}style={{height:350,width:350,margin:50}}></Image>
    <Text style={{textAlign:'center', fontSize:12, fontWeight:'500'}}>
        Almost there....
    </Text>
</View>

<View style={{paddingTop:200}}>
<Text style={{fontSize:10,color:'gray'}}>
       Your all new Delivery partner
    </Text>
</View>
</View>
</>
  );
}
