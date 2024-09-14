import React from "react";
import { StyleSheet,ActivityIndicator, Text,Button, View,Image, ScrollView,Platform, TouchableOpacity,TextInput,Linking,StatusBar} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { WebView } from 'react-native-webview';
import { Video, ResizeMode } from 'expo-av';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

import axios from "react-native-axios";
import {useState,useEffect} from "react";
import { horizontal } from "react-native-swiper-flatlist/src/themes";

export default function Toparabic({ navigation,route,klil, }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to simulate a long loading process (2000 seconds)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000); // 2000 seconds

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);
  const [rek1,setRek1] = useState([]);
  useEffect(() => {
    axios.get('https://amedbaz.github.io/mshahdreklam/mshahdreklam.json')
    .then(result=>{
      setRek1(result.data.mshahdreklam)
    })
    }, []);
  

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

 

  return (
    <View style={styles.container}>
     <StatusBar 
     backgroundColor="black"
     barStyle="white"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
     <Image key={klil} style={styles.wene} source={{uri:route.params.wene1}}/> 
     
    <View style={{marginBottom:10}}>
  <TouchableOpacity onPress={() =>navigation.goBack()} >
    <View 
 
    >
    
<FontAwesome6  onPress={() =>navigation.goBack()}
name="angle-left"
style={{
  ...Platform.select({
      android: {
        fontSize:40,
        color:'#fff',
        marginHorizontal:28,
        marginTop:30,
        position: 'absolute',
      },
      ios: {
        fontSize:40,
        color:'#fff',
        marginHorizontal:25,
        marginTop:60,
        position: 'absolute',
      },

    }),
}}
/>

    </View>
    </TouchableOpacity>
<View style={{
  ...Platform.select({
    android: {
      left:310,top:40
    },
    ios: {
      left:350,top:67
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
        </View>
</View>

 <View style={{
   ...Platform.select({
    android: {
      top:300
    },
    ios: {
      top:400
    },

  }),
 }}
><Text key={klil} style={styles.navo}>{route.params.ism}</Text>
<Text key={klil} style={styles.nav}>{route.params.nav}</Text>


</View>

<View style={{
  ...Platform.select({
    android: {
      top:370
    },
    ios: {
      top:470
    },

  }),
  }}>
<LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,0)','rgba(0,0,0,0.9)','black','black',]}
        start={{x: 0.5, y: 0}} end={{x: 0.5, y: 0.8}}
        style={styles.LinearGradient}
      />
      <View style={{flexDirection:'row',marginTop:-90,marginHorizontal:35}}>
<View style={{flexDirection:'row'}}>
  <FontAwesome6
  name={route.params.action}
  size={23}
  marginHorizontal={5}
  color={'#fda521'}
  top={-2}
  />
  <Text style={styles.aaction}>{route.params.aaction}</Text>
</View>
<View style={{flexDirection:'row'}}>
  <AntDesign
  name={route.params.raiting}
  size={25}
  marginHorizontal={5}
  marginTop={-4}
  color={'#fda521'}
  />
  <Text style={styles.aaction}>{route.params.araitng}</Text>
</View>
<View style={{flexDirection:'row'}}>
  <Ionicons
  name={route.params.time}
  size={25}
  marginHorizontal={5}
  color={'#fda521'}
  marginTop={-3}
  />
  <Text style={styles.aaction}>{route.params.atime}</Text>
</View>
</View>

</View>




    </View>
<View style={{
    ...Platform.select({
      android: {
        top:420
      },
      ios: {
        top:450
      },
  
    }),
  }}>
    <Text key={klil} style={styles.kurti}>{route.params.kurti}</Text>
<Text key={klil} style={styles.akurti}>{route.params.akurti}</Text>

<View>
{
    rek1.map((data,klil)=>(
    
  
  

    <Image
  style={styles.reklam} key={klil}  source={{uri:data.pe}}/>

 
    ))
}
</View >
<View style={{

...Platform.select({
  android: {
     top:70
  },
  ios: {
  top:20
  },

}),}}>
<Text key={klil} style={styles.kurti}>{route.params.trailer}</Text>
<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
<View style={{

...Platform.select({
  android: {
    horizontal:10,flexDirection:'row'
  },
  ios: {
    horizontal:10,flexDirection:'row',top:10
  },

}),
}} 

>
  <WebView style={styles.yout}
  source={{
    uri:"https://www.youtube.com/embed/"+route.params.youtube
  }}
  />
   <WebView style={styles.yout}
  source={{
    uri:"https://www.youtube.com/embed/"+route.params.youtube1
  }}
  />
    <WebView style={styles.yout}
  source={{
    uri:"https://www.youtube.com/embed/"+route.params.youtube2
  }}
  />
    <WebView style={styles.yout}
  source={{
    uri:"https://www.youtube.com/embed/"+route.params.youtube3
  }}
  />
</View>
</ScrollView>
</View>

<View style={{
        ...Platform.select({
            android: {
                backgroundColor:'#171717',width:365,height:376,marginTop:100,marginHorizontal:10,
                borderRadius:10,
                shadowColor: 'black',
                shadowRadius: 6,
                shadowOpacity: 0.6,
                elevation: 8,
                shadowOffset: {
                  width: 15,
                  height: 15,
                  
                },
            },
            ios: {
                backgroundColor:'#171717',width:390,height:356,marginTop:50,marginHorizontal:10,
                borderRadius:10,
                shadowColor: 'black',
            shadowRadius: 6,
            shadowOpacity: 0.6,
            elevation: 8,
            shadowOffset: {
              width: 15,
              height: 15,
              
            },
            },
      
          }),
      }}>
        <View style={{
     ...Platform.select({
      android: {
        top:20
      },
      ios: {
    top:20
      },

    }),
  
      
        }}>
       <Text key={klil} style={styles.jor}>{route.params.jor}</Text>
       </View>
       {loading ? (
        <>
          <ActivityIndicator size="large" color="#ff3d00" style={{top:105}} />
          
        </>
      ) : (
        
<Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      )}
      <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />

</View>
</View>
<View>
<Text key={klil} style={styles.trailer}>Actor</Text>
<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
<View style={{horizontal:10,flexDirection:'row'}}>
<Image key={klil} style={styles.actor} source={{uri:route.params.actor}}/>
<Image key={klil} style={styles.actor} source={{uri:route.params.actor1}}/>
<Image key={klil} style={styles.actor} source={{uri:route.params.actor2}}/>
<Image key={klil} style={styles.actor} source={{uri:route.params.actor3}}/>
<Image key={klil} style={styles.actor} source={{uri:route.params.actor4}}/>
<Image key={klil} style={styles.actor} source={{uri:route.params.actor5}}/>

</View>
</ScrollView>
</View>


<View style={{
        ...Platform.select({
          android: {
            marginTop:20,marginHorizontal:90,flexDirection:'row',marginBottom:450
          },
          ios: {
            marginTop:20,marginHorizontal:110,flexDirection:'row',marginBottom:500
          },
    
        }),
        
        }}>
        
        
        <TouchableOpacity onPress={()=> Linking.openURL('https://www.instagram.com/atlaskrd?igsh=MWNybWcwNmloZmxsdg==')}>
        <View style={{backgroundColor:'#333c4b',width:45,height:45,borderRadius:90,marginHorizontal:9,
      
        }}>
<FontAwesome 
name='instagram'
size={25}
color={'#fff'}
left={12}
marginTop={10}
/>
        </View>
</TouchableOpacity>
<TouchableOpacity onPress={()=> Linking.openURL('https://www.tiktok.com/@atlaskrd')}>
        <View style={{backgroundColor:'#333c4b',width:45,height:45,borderRadius:90,marginHorizontal:9,
        
        }}>
<Ionicons
name='logo-tiktok'
size={25}
color={'#fff'}
left={11}
marginTop={9}
/>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> Linking.openURL('https://t.me/Atlaskrdd')}>
        <View style={{backgroundColor:'#333c4b',width:45,height:45,borderRadius:90,marginHorizontal:9,
        
        }}>
<FontAwesome5
name='telegram-plane'
size={25}
color={'#fff'}
left={10}
marginTop={9}
/>
        </View>
        </TouchableOpacity>
        </View>
</View>
   
        
    </ScrollView>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
   
  },
  reklam:{
    ...Platform.select({
        android: {
            width:340,
            height:70,
            left:20,
       borderRadius:5,
       top:15
            
        },
        ios: {
           width:365,
           height:70,
       left:20,
       borderRadius:5,
       top:45
       
           
        
        },
  
      }),
 },
  wene:{
    ...Platform.select({
        android: {
            width:350,
            height:550,
            marginHorizontal:'4%',
            borderRadius:10,
            marginBottom:15,
            top:15,
            opacity: 0.6,
            position: 'absolute',
         ResizeMode:'cover'
        },
        ios: {
           width:"100%",
           height:700,
           marginHorizontal:0,
           borderRadius:10,
           marginBottom:15,
           top:0,
           opacity: 0.6,
           position: 'absolute',
        ResizeMode:'cover'
        },
  
      }),
 },
 nav:{
  ...Platform.select({
      android: {
        fontSize:25,
        fontWeight:'600',
        color:'#fff',
        left:25,
        top:50,
        fontFamily:'k24'
      },
      ios: {
        fontSize:25,
        fontWeight:'600',
        color:'#fff',
        left:10,
        top:50,
        fontFamily:'k24'
      
      },

    }),
},
navo:{
  ...Platform.select({
      android: {
        fontSize:20,
        fontWeight:'600',
        color:'#fff',
        color:'orange',
        right:30,
        top:50,
        fontFamily:'k24'
      },
      ios: {
        fontSize:25,
        fontWeight:'600',
        color:'orange',
       left:320,
       top:50,
       fontFamily:'k24'
      
      },

    }),
},
aaction:{
  ...Platform.select({
      android: {
        fontSize:20,
        fontWeight:'700',
        color:'#fff',
        marginTop:-4,
        marginHorizontal:0,
        fontFamily:'k24'
      },
      ios: {
        fontSize:25,
        fontWeight:'600',
        color:'#fff',
        marginTop:-4,
        marginHorizontal:0,
      fontFamily:'k24'
      },

    }),
},

text: {
  
  ...Platform.select({
    android: {
      backgroundColor: 'transparent',
      fontSize: 15,
      fontWeight:'600',
      marginTop:8,
      color: '#fff',
      left:-5
    },
    ios: {
      backgroundColor: 'transparent',
      fontSize: 15,
      fontWeight:'600',
      marginTop:8,
      color: '#fff',
      left:125
    },

  }),
  
},
text1: {

  ...Platform.select({
    android: {
      backgroundColor: 'transparent',
      fontSize: 15,
      fontWeight:'600',
      marginTop:8,
      color: '#fff',
      left:-5
    },
    ios: {
      backgroundColor: 'transparent',
  fontSize: 15,
  fontWeight:'600',
  marginTop:8,
  color: '#fff',
  left:170
    },

  
}),
},
wene2:{
  ...Platform.select({
      android: {
        width:220,
        height:190,
        marginHorizontal:-30,
        marginTop:-150
          
          
      },
      ios: {
         width:220,
         height:190,
         marginHorizontal:-20,
         marginTop:-150
      
      
      },

    }),
},

trailer: {

  ...Platform.select({
    android: {
      fontSize: 25,
      fontWeight:'700',
     marginHorizontal:15,
      color: '#fff',
      marginTop:20,
  fontFamily:'k24'
    },
    ios: {
      
  fontSize: 30,
  fontWeight:'700',
 marginHorizontal:15,
  color: '#fff',
  marginTop:20,
  fontFamily:'k24'

    },
  }),
  
},
video:{
  ...Platform.select({
    android: {
      width:340,
      height:204,
      marginHorizontal:10,
      marginTop:50
    },
    ios: {
      
 width:347,
 height:204,
 marginHorizontal:13,
 marginTop:50

    },
  }),
},
buttons:{

  ...Platform.select({
    android: {
      backgroundColor:'#fff',
  color:'#fff',
  height:36,
  width:200,
  borderRadius:40,
  marginHorizontal:80,
  marginTop:30
    },
    ios: {
      
      backgroundColor:'#fff',
      color:'#fff',
      height:40,
      width:200,
      borderRadius:40,
      marginHorizontal:90,
      marginTop:30,
    },
  }),
},
akurti: {

  ...Platform.select({
    android: {
      fontSize: 16,
  fontWeight:'400',
 marginHorizontal:10,
  color: '#fff',
  marginTop:5,
  fontFamily:'k24',
   textAlign:'right'
    },
    ios: {
      
  fontSize: 16,
  fontWeight:'400',
 marginHorizontal:15,
  color: '#fff',
  marginTop:10,
  fontFamily:'k24',
  textAlign:'right'

    },
  }),
  
},
kurti: {

    ...Platform.select({
        android: {
          fontSize: 20,
      fontWeight:'400',
     marginHorizontal:15,
      color: '#fff',
      marginTop:-25,
      fontFamily:'k24',
       textAlign:'right'
        },
        ios: {
          
      fontSize: 20,
      fontWeight:'400',
     marginHorizontal:20,
      color: '#fff',
      marginTop:60,
      fontFamily:'k24',
      textAlign:'right'
    
        },
      }),
},

sairkrdn: {

  ...Platform.select({
    android: {
      fontSize: 20,
      fontWeight:'800',
     marginHorizontal:15,
      color: '#fff',
      marginTop:20
    },
    ios: {
      
  fontSize: 25,
  fontWeight:'700',
 marginHorizontal:15,
  color: '#fff',
  marginTop:20

    },
  }),
  
},
linearGradient1: {
  ...Platform.select({
    android: {
        backgroundColor:'#073825',width:250,height:60,marginTop:30,marginHorizontal:60,borderRadius:10,
      
    },
    ios: {
        backgroundColor:'#073825',width:280,height:70,marginTop:30,marginHorizontal:60,borderRadius:10,
       
       
        
    },

  }),

},
innerContainer1: {
  borderRadius: 10, // <-- Inner Border Radius
  flex: 1,
  margin: 2, // <-- Border Width
  backgroundColor: 'black',
  justifyContent: 'center',
},
textv:{
  ...Platform.select({
    android: {
      fontSize:30,
      fontWeight:'600',
      color:'#fff',
      left:'27%',
      top:"35%"
    },
    ios: {
      fontSize:40,
      fontWeight:'600',
      color:'#fff',
      left:'25%',
      top:"30%"
    
    },

    }),
},
wenes:{
  ...Platform.select({
      android: {
        width:90,
         height:90,
         marginHorizontal:'4%',
         borderRadius:10,
         marginTop:-80,
     borderRadius:60
         
      },
      ios: {
         width:90,
         height:90,
         marginHorizontal:'4%',
         borderRadius:10,
         marginTop:-80,
     borderRadius:60
         
      
      },

    }),
},
actor:{
  ...Platform.select({
      android: {
       
        width:120,
        height:190,
       marginHorizontal:10,
          
          
      },
      ios: {
         width:120,
         height:190,
        marginHorizontal:10,
      
      
      },

    }),
},
yout:{
    ...Platform.select({
        android: {
         
            width:320,
            height:210,
           marginHorizontal:10,
           borderRadius:10
            
            
        },
        ios: {
           width:350,
           height:210,
          marginHorizontal:10,
          borderRadius:10
        
        
        },
  
      }),
  },
LinearGradient:{
  
  width:500,height:140,marginTop:'-1%', position:'relative'
  
  
      },
      jor:{
        ...Platform.select({
            android: {
             
              fontSize:20,
              color:'#fff',
              fontFamily:'k24',
              textAlign:'right',
              left:-10 
                
            },
            ios: {
          fontSize:20,
          color:'#fff',
          fontFamily:'k24',
          textAlign:'center',
          left:-10
            },
      
          }),
      },
});
