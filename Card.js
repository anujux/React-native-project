import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
export default function Card() {
    return (

        <>
<View style={{flex:1, backgroundColor:'white',marginTop:90,padding:10}}>
       <View style={{flexDirection:'row'}}>
       <ScrollView horizontal={true}>
       <View style={{flexDirection:'row',height:150,backgroundColor:'blue',borderRadius:10,marginHorizontal:5}}>
                <View style={{justifyContent:"center",alignItems:'center'}}>
                    <Text style={{fontSize:24,color:'white',fontWeight:'400',}}>
                        Join our community
                    </Text>
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('../assets/Group481319.png')}style={{width:100,height:100}}></Image>
                </View>
        </View>
        <View style={{flexDirection:'row',height:150,backgroundColor:'blue',borderRadius:10,marginHorizontal:5}}>
                <View style={{justifyContent:"center",alignItems:'center'}}>
                    <Text style={{fontSize:24,color:'white',fontWeight:'400',}}>
                        Join our community
                    </Text>
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('../assets/Group481319.png')}style={{width:100,height:100}}></Image>
                </View>
        </View>
       </ScrollView>
       </View>
       
</View>
</>
  );
}
