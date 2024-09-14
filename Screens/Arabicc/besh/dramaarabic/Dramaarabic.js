
import React from "react";
import { StyleSheet, StatusBar,Text, View,Image, ScrollView,Platform, TouchableOpacity,TextInput,Linking } from 'react-native';
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from 'expo-linear-gradient';
import axios from "react-native-axios";
import {useState,useEffect} from "react";







export default function Dramaarbic({ navigation}) {
    const [dramaarabicc,setDramaarabicc] = useState([]);
    useEffect(() => {
      axios.get('https://amedbaz.github.io/dramaarabic/dramaarabic.json')
      .then(result=>{
        setDramaarabicc(result.data.Dramaarabic)
      })
      }, []);

///////////////////////////////////

const [rek1,setRek1] = useState([]);
useEffect(() => {
  axios.get('https://amedbaz.github.io/mshahdreklam/mshahdreklam.json')
  .then(result=>{
    setRek1(result.data.mshahdreklam)
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
    rek1.map((data,klil)=>(
    
  
  

    <Image
  style={styles.reklam} key={klil}  source={{uri:data.pe}}/>

 
    ))
}

   

</View>
{/* reklam */}




<View style={{marginTop:30 ,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around'}}>
{
    dramaarabicc.map((data,klil)=>(
      <TouchableOpacity 
   onPress={() => navigation.navigate('Datadramaarabic',
    {
      xeleke:data.xeleke,
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
    x2:data.x2,
    x3:data.x3,
    x4:data.x4,
    x5:data.x5,
    x6:data.x6,
    x7:data.x7,
    x8:data.x8,
    x9:data.x9,
    x10:data.x10,
    x11:data.x11,
    x12:data.x12,
    x13:data.x13,
    x14:data.x14,
    x15:data.x15,
    x16:data.x16,
    x17:data.x17,
    x18:data.x18,
    x19:data.x19,
    x20:data.x20,
    x21:data.x21,
    x21:data.x21,
    x22:data.x22,
    x23:data.x23,
    x24:data.x24,
    x25:data.x25,
    x26:data.x26,
    x27:data.x27,
    x28:data.x28,
    x29:data.x29,
    x30:data.x30,
    x31:data.x31,
    x32:data.x32,
    x33:data.x33,
    x34:data.x34,
    x35:data.x35,
    x36:data.x36,
    x37:data.x37,
    x38:data.x38,
    x39:data.x39,
    x40:data.x40,
   st:data.st,
   play2:data.play2,
   play3:data.play3,
   play4:data.play4,
   play5:data.play5,
   play6:data.play6,
   play7:data.play7,
   play8:data.play8,
   play9:data.play9,
   play10:data.play10,
   play11:data.play11,
   play12:data.play12,
   play13:data.play13,
   play14:data.play14,
   play15:data.play15,
   play16:data.play16,
   play17:data.play17,
   play18:data.play18,
   play19:data.play19,
   play20:data.play20,
   play21:data.play21,
   play22:data.play22,
   play23:data.play23,
   play24:data.play24,
   play25:data.play25,
   play26:data.play26,
   play27:data.play27,
   play28:data.play28,
   play29:data.play29,
   play30:data.play30,
   play31:data.play31,
   play32:data.play32,
   play33:data.play33,
   play34:data.play34,
   play35:data.play35,
   play36:data.play36,
   play37:data.play37,
   play38:data.play38,
   play39:data.play39,
   play40:data.play40,
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
        height:70,
       marginHorizontal:4,
       borderRadius:10
      },
  
    }),


   },
});
