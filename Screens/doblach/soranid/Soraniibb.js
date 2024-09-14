
import React from "react";
import { StyleSheet, StatusBar,Text, View,Image, ScrollView,Platform, TouchableOpacity,TextInput,Linking } from 'react-native';
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from 'expo-linear-gradient';
import axios from "react-native-axios";
import {useState,useEffect} from "react";







export default function Soraniibb({ navigation}) {
    const [actionbadinii,setActionbadinii] = useState([]);
    useEffect(() => {
      axios.get('https://amedbaz.github.io/actionbadini/actionbadini.json')
      .then(result=>{
        setActionbadinii(result.data.actionbadini)
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
    
    


<Image style={styles.wa}
source={{uri:"https://firebasestorage.googleapis.com/v0/b/fir-auth-c35db.appspot.com/o/wenee%2Fwq.jpg?alt=media&token=5bf3ebb5-578b-451c-b2be-7071c4739e56"}}
/>

<Text style={styles.cha}>چاوەروانبن نێزیکترین کات</Text>
<View style={{}}>
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
            marginTop:10,
        },
        ios: {
            
            fontSize:40,
            color:'#fff',
            marginHorizontal:25,
            marginTop:30,
        },
  
      }),
}}

/>
        
    </View>
    </TouchableOpacity>
    
</View>
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
       borderRadius:5
      },
  
    }),


   },
   cha:{
    ...Platform.select({
      android: {
        color:'#fff',
        fontSize:25,
        fontFamily:'k24',
        textAlign:'center',
        top:200
      },
      ios: {
      color:'#fff',
      fontSize:25,
      fontFamily:'k24',
      textAlign:'center',
      top:200
      },
  
    }),


   },
   wa:{

    ...Platform.select({
      android: {
        width:'100%',
      height:'100%',
      position:'absolute',opacity:0.4
      },
      ios: {
      width:'100%',
      height:'100%',
      position:'absolute',opacity:0.5
      },
  
    }),


   },
});
