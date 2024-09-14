
import React,{useEffect} from "react";
import { StyleSheet, Text, View,Image,Platform,StatusBar} from 'react-native';







export default function Splash2({ navigation}) {

useEffect (()=>{
setTimeout(() => {
    navigation.navigate('Home')
}, 3000);
})



  return (
    <View style={styles.container}>
    
    <Image  style={styles.wene}
    source={{uri:'https://firebasestorage.googleapis.com/v0/b/fir-auth-c35db.appspot.com/o/wenee%2FA5932F0F-1E3D-42BC-A924-5583231D25CD.gif?alt=media&token=1bee2947-c872-4f45-bd0f-be78cef1dd5c'}}
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
            width:'130%',
            height:250,
            top:'35%',
            left:'-15%'
        },
        ios: {
           width:'130%',
           height:250,
           top:'35%',
           left:'-15%'
        
        },
  
      }),
 }
});
