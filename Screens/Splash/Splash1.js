
import React,{useEffect} from "react";
import { StyleSheet, Text, View,Image,Platform,StatusBar} from 'react-native';







export default function Splash1({ navigation}) {

useEffect (()=>{
setTimeout(() => {
    navigation.navigate('Splash2')
}, 2500);
})



  return (
    <View style={styles.container}>
    
    <Image  style={styles.wene}
    source={{uri:'https://firebasestorage.googleapis.com/v0/b/fir-auth-c35db.appspot.com/o/wenee%2Fatlassplash.png?alt=media&token=381a23f9-821b-429a-bf19-74d20e18756d'}}
    />







<StatusBar 
     backgroundColor="black"
     barStyle="white"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
   
  },

 wene:{
    ...Platform.select({
        android: {
            width:'70%',
            height:150,
            top:'40%',
            left:'13%'
        },
        ios: {
           width:'70%',
           height:150,
           top:'40%',
           left:'13%'
        
        },
  
      }),
 }
});
