
import React from "react";
import { StyleSheet, StatusBar,Text, View,Image, ScrollView,Platform, TouchableOpacity,TextInput,Linking } from 'react-native';
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from 'expo-linear-gradient';
import axios from "react-native-axios";
import {useState,useEffect} from "react";







export default function Zedemshahdi({ navigation}) {
    const [mshahddi,setMshahddi] = useState([]);
    useEffect(() => {
      axios.get('https://amedbaz.github.io/mshahdbadini/mshahdbadini.json')
      .then(result=>{
        setMshahddi(result.data.mshahdbadini)
      })
      }, []);

///////////////////////////////////

const [rek2,setRek2] = useState([]);
useEffect(() => {
  axios.get('https://amedbaz.github.io/zedatrreklam/zedatrreklam.json')
  .then(result=>{
    setRek2(result.data.zedatrreklam)
  })
  }, []);
  return (
    <View style={styles.container}>
    
    
<View style={{marginBottom:10}}>
  <TouchableOpacity  onPress={() =>navigation.goBack()}>
    <View>
    
<FontAwesome6  onPress={() =>navigation.goBack()}
name='angle-left'
style={{
    ...Platform.select({
        android: {
            fontSize:40,
            color:'#fff',
            marginHorizontal:25,
            marginTop:20
        },
        ios: {
            fontSize:40,
            color:'#fff',
            marginHorizontal:25,
            marginTop:60
        },
  
      }),
}}

/>
        
    </View>
    </TouchableOpacity>
    
</View>



<ScrollView showsVerticalScrollIndicator={false}>

{/* reklam */}
<View style={{flexDirection:'row',marginTop:10}}>

    {
    rek2.map((data,klil)=>(
    
  
  

    <Image
  style={styles.reklam} key={klil}  source={{uri:data.pe}}/>

 
    ))
}

   

</View>
{/* reklam */}




<View style={{marginTop:30 ,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>
{
    mshahddi.map((data,klil)=>(
      <TouchableOpacity 
   onPress={() => navigation.navigate('Mshahdbadini',
    {
      wene:data.wene,
      wene1:data.wene1,
      nav:data.nav,
      action:data.action,
    aaction:data.aaction,
    raiting:data.raiting,
    araitng:data.araitng,
    time:data.time,
    atime:data.atime,
    trailer:data.trailer,
    youtube:data.youtube,
    youtube1:data.youtube1,
    youtube2:data.youtube2,
    youtube3:data.youtube3,
    jor:data.jor,
    play:data.play,
    kurti:data.kurti,
    akurti:data.akurti,
    ism:data.ism,
    actor:data.actor,
    actor1:data.actor1,
    actor2:data.actor2,
    actor3:data.actor3,
    actor4:data.actor4,
    actor5:data.actor5,
    new:data.new,
    }
   )}
      >
  <Image 
  
  style={styles.wene} key={klil}  source={{uri:data.wene}}/>
  </TouchableOpacity>
    ))
}
</View>
 
</ScrollView>


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
 for:{
    ...Platform.select({
        android: {
            fontSize:25,
            color:'#fda521',
           left:100,
            marginTop:-42,
            fontWeight:'600',
            fontFamily:'arab'
        },
        ios: {
           fontSize:30,
           color:'#fda521',
           marginHorizontal:100,
           marginTop:-45,
           fontWeight:'600',
           fontFamily:'arab'
        },
  
      }),
 },
 wene:{
  ...Platform.select({
    android: {
      width:160,
      height:280,
      marginHorizontal:-10,
    top:'-0%',
    borderRadius:10,
      marginBottom:10
     
    },
    ios: {
      width:170,
      height:270,
      marginHorizontal:10,
    top:'-0%',
    borderRadius:10,
      marginBottom:10
    },

  }),
 },
 reklam:{

    ...Platform.select({
      android: {
        width:330,
        height:60,
       marginHorizontal:25,
       borderRadius:10
      },
      ios: {
        width:400,
        height:80,
       marginHorizontal:4,
       borderRadius:10
      },
  
    }),


   },
});
