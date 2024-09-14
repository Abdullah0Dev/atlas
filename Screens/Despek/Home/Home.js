
import React from "react";
import { StyleSheet, Text,ActivityIndicator ,View,Image, ScrollView,Platform, TouchableOpacity,Linking,StatusBar} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Fontisto } from '@expo/vector-icons';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import axios from "react-native-axios";
import {useState,useEffect} from "react";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import NetInfo from '@react-native-community/netinfo';


export default function Home({navigation}) {

  const [isConnected, setIsConnected] = useState(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);



  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to simulate a long loading process (2000 seconds)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3500); // 2000 seconds

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  const [Kever1,setKever] = useState([]);
  useEffect(() => {
    axios.get('https://amedbaz.github.io/kever/kever.json')
    .then(result=>{
      setKever(result.data.Kever)
    })
    }, []);


    const [bnk1,setBnk1] = useState([]);
    useEffect(() => {
      axios.get('https://amedbaz.github.io/bnk/bnk.json')
      .then(result=>{
        setBnk1(result.data.bnk)
      })
      }, []);

  return (
    <View style={styles.container}>
    
     {loading ? (
        <>
        <ActivityIndicator size="large" color="#ff3d00" style={{top:450}} />
        
        </>
      ) : (
        
        <View>
           <View >
     
      <Text style={{color:'black',fontSize:50,}}>{isConnected ? '' :   <View style={{backgroundColor:'black',width:600,height:1000}}>
      <ActivityIndicator size="large" color="#ff3d00"  style={{
        ...Platform.select({
          android: {
            top:430,right:240
          },
          ios: {
            top:430,right:210
          },
      
        }),
        
     }}
         
        />
     <Text 
      style={{
        ...Platform.select({
          android: {
            color:'#fff',fontSize:20,left:115,top:400,fontFamily:'k24'
          },
          ios: {
           color:'#fff',fontSize:26,left:135,top:400,fontFamily:'k24'
          },
      
        }),
        
     }}>Waiting for network</Text>
 
    </View>}</Text>
    </View >
    <View style={{
          ...Platform.select({
            android: {
              top:-70
            },
            ios: {
              
            },
        
          }),
          }}>
        <View style={{
          ...Platform.select({
            android: {
              top:10
            },
            ios: {
              top:20
            },
        
          }),
          }}>
        <LinearGradient
                // Background Linear Gradient
                colors={['rgba(0,0,0,0)','rgba(0,0,0,0.9)','black']}
                start={{x: 0.5, y: 0}} end={{x: 0.5, y:0.7}}
                style={styles.LinearGradient}
              />
              <Image
                style={styles.logo}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-c35db.appspot.com/o/wenee%2Faaaat-removebg-preview.png?alt=media&token=324da7da-90b2-410e-b584-10f07390edf2',
                }}
              />
              <View style={{
            ...Platform.select({
              android: {
                left:285,top:-63,flexDirection:'row'
              },
              ios: {
                left:300,top:-47,flexDirection:'row'
              },
              
              }),
            }}>
            <TouchableOpacity onPress={()=> navigation.navigate('Search')}>
              
        <FontAwesome onPress={()=> navigation.navigate('Search')}
        name='search'
        size={30}
        color={'#fff'}
        
        
        />
        
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=> navigation.navigate('Setting')}>
        <Image
                style={styles.Logoset}
                source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-c35db.appspot.com/o/wenee%2Fset-removebg-preview.png?alt=media&token=59e9fa33-2a45-4298-86a7-a82d3eccdd58',
                }}
              />
                 </TouchableOpacity>
        
        </View>
        
        <View style={{
            ...Platform.select({
              android: {
                flexDirection:'row',  justifyContent:'space-around',top:-35,
              },
              ios: {
               flexDirection:'row',  justifyContent:'space-around',top:-25,left:-10
               
              },
              
              }),
            }} >
               <TouchableOpacity onPress={()=> navigation.navigate('Arabic')}>
          <Text style={styles.nav}>العربي</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('Badini')}>
          <Text style={styles.nav}>بادینی</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('Sorani')}>
          <Text style={styles.nav}>سورانی</Text>
          </TouchableOpacity>
        </View>
        
                </View>
                <ScrollView>
<View style={{
   ...Platform.select({
    android: {
     
      marginTop:5
    
    },
    ios: {
    
      marginTop:20
    
    },

  }),
 }}>
{
Kever1.map((data,klil)=>(
  <TouchableOpacity 
  key={klil}
onPress={() => navigation.navigate('Kever',
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

style={styles.wene29} key={klil.id}  source={{uri:data.wene}}/>
<Text key={klil.id} style={styles.navi}>{data.nav}</Text>

</TouchableOpacity>
))
}
<View style={{marginBottom:-20,position:"absolute"}}>
  
<View style={{
...Platform.select({
android: {
  top:295
},
ios: {
  top:350
},

}),
}}>
<LinearGradient
    // Background Linear Gradient
    colors={['rgba(0,0,0,0)','rgba(0,0,0,0.9)']}
    start={{x: 0.5, y: 0}} end={{x: 0.5, y: 0.8}}
    style={styles.LinearGradienti}
  />

    </View>
    <View style={{
...Platform.select({
android: {
  top:-20
},
ios: {
  top:0
},

}),
}}>
<LinearGradient
    // Background Linear Gradient
    colors={['rgba(0,0,0,0)','rgba(0,0,0,0.9)']}
    start={{x: 0.5, y: 0}} end={{x: 0.5, y: 0.8}}
    style={styles.LinearGradientii}
  />

    </View>
    
    </View>
</View>

{/* top */}
<View style={{

...Platform.select({
    android: {
    
    top:-40
    },
    ios: {
  
    },
 
  }),
}}>


<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View style={{marginTop:13,flexDirection:'row'}}>
    {
    bnk1.map((data,klil)=>(
      <TouchableOpacity 
      key={klil}
   onPress={() => navigation.navigate('Bnk',
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
  
  style={styles.wene2} key={klil.id}  source={{uri:data.wene}}/>
  </TouchableOpacity>
    ))
}
    </View>
  </ScrollView>


     
</View>
{/* top */}
</ScrollView>
                </View>
                </View>
      )}

     
     



        <View>

 
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
  LinearGradient:{
    ...Platform.select({
      android: {
       width:500,height:140, position:'absolute',
       transform: [{rotate: '180deg'}],
      },
      ios: {
       width:500,height:140, position:'absolute',
       transform: [{rotate: '180deg'}],
      },
  
    }),
   
    
    
        },
        logo:{
          ...Platform.select({
            android: {
              width:130,
              height:80,
              left:10,
              top:-10
            },
            ios: {
             width:130,
             height:80,
             left:10,
             top:5
            },
        
          }),
         
          
          
              },
  Logoset:{
                ...Platform.select({
                  android: {
                    width:50,
                    height:35,
                    left:10,
                    top:-1
                  },
                  ios: {
                   width:50,
                   height:35,
                   left:10,
                   top:-1
                  },
              
                }),
               
                
                
          },
 nav:{
                      ...Platform.select({
                        android: {
                          fontSize:15,
                          color:'#fff',
                        
                          fontWeight:'700',
                          fontFamily:'k24'
                        },
                        ios: {
                          fontSize:17,
                          color:'#fff',
                        left:10,
                          fontWeight:'700',
                          fontFamily:'k24'
                        },
                    
                      }),
                     
                      
                      
   },
   wene29:{
    ...Platform.select({
      android: {
          width:450,
          height:450,
          marginHorizontal:'-5%',
          borderRadius:10,
          
          top:-15,
          opacity: 0.5,
          
      
      },
      ios: {
         width:450,
         height:490,
         marginHorizontal:-20,
         borderRadius:10,
       
         top:0,
         opacity: 0.6,
         
      
      },

    }),
   },
   LinearGradienti:{
    ...Platform.select({
      android: {
       width:500,height:140,marginTop:'-85%', position:'absolute'
      },
      ios: {
       width:500,height:140,marginTop:'-245%', position:'absolute'
      },
  
    }),
   
    
    
        },
        LinearGradientii:{
          ...Platform.select({
            android: {
             width:500,height:100,marginTop:'-85%', position:'absolute',transform: [{rotate: '180deg'}],
            },
            ios: {
             width:500,height:30,marginTop:'-245%', position:'absolute',transform: [{rotate: '180deg'}],
            },
        
          }),
         
          
          
              },
        navi:{
          ...Platform.select({
            android: {
              position:'absolute',
              fontSize:25,
              marginTop:350,color:'#fff',fontFamily:'k24',left:20
            },
            ios: {
              position:'absolute',
              fontSize:25,
              marginTop:380,color:'#fff',fontFamily:'k24',left:20
            },
        
          }),
        },
        wene2:{
          ...Platform.select({
            android: {
              width:120,
              height:180,
              marginHorizontal:10,
              borderRadius:10,
              top:'-0%',
              
            },
            ios: {
              width:120,
              height:180,
              marginHorizontal:10,
              borderRadius:10,
              top:'0%',
              
            },
        
          }),
         },
});
