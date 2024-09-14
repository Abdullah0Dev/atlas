import React from "react";
import { StyleSheet, ActivityIndicator,Alert, Modal,Pressable,Text,Button, View,Image, ScrollView,Platform, TouchableOpacity,TextInput,Linking,StatusBar} from 'react-native';
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
import SwitchSelector from "react-native-switch-selector";
import axios from "react-native-axios";
import {useState,useEffect} from "react";

export default function Datadramasorani({ navigation,route,klil, }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to simulate a long loading process (2000 seconds)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 5000); // 2000 seconds

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);
  const [rek2,setRek2] = useState([]);
  useEffect(() => {
    axios.get('https://amedbaz.github.io/zedereklamsorani/zedereklamsorani.json')
    .then(result=>{
      setRek2(result.data.zedatrreklam1)
    })
    }, []);
  
  
      const [modalVisible1, setModalVisible1] = useState(false);
      const [modalVisible2, setModalVisible2] = useState(false);
      const [modalVisible3, setModalVisible3] = useState(false);
      const [modalVisible4, setModalVisible4] = useState(false);
      const [modalVisible5, setModalVisible5] = useState(false);
      const [modalVisible6, setModalVisible6] = useState(false);
      const [modalVisible7, setModalVisible7] = useState(false);
      const [modalVisible8, setModalVisible8] = useState(false);
      const [modalVisible9, setModalVisible9] = useState(false);
      const [modalVisible10, setModalVisible10] = useState(false);
      const [modalVisible11, setModalVisible11] = useState(false);
      const [modalVisible12, setModalVisible12] = useState(false);
      const [modalVisible13, setModalVisible13] = useState(false);
      const [modalVisible14, setModalVisible14] = useState(false);
      const [modalVisible15, setModalVisible15] = useState(false);
      const [modalVisible16, setModalVisible16] = useState(false);
      const [modalVisible17, setModalVisible17] = useState(false);
      const [modalVisible18, setModalVisible18] = useState(false);
      const [modalVisible19, setModalVisible19] = useState(false);
      const [modalVisible20, setModalVisible20] = useState(false);
      const [modalVisible21, setModalVisible21] = useState(false);
      const [modalVisible22, setModalVisible22] = useState(false);
      const [modalVisible23, setModalVisible23] = useState(false);
      const [modalVisible24, setModalVisible24] = useState(false);
      const [modalVisible25, setModalVisible25] = useState(false);
      const [modalVisible26, setModalVisible26] = useState(false);
      const [modalVisible27, setModalVisible27] = useState(false);
      const [modalVisible28, setModalVisible28] = useState(false);
      const [modalVisible29, setModalVisible29] = useState(false);
      const [modalVisible30, setModalVisible30] = useState(false);
      const [modalVisible31, setModalVisible31] = useState(false);
      const [modalVisible32, setModalVisible32] = useState(false);
      const [modalVisible33, setModalVisible33] = useState(false);
      const [modalVisible34, setModalVisible34] = useState(false);
      const [modalVisible35, setModalVisible35] = useState(false);
      const [modalVisible36, setModalVisible36] = useState(false);
      const [modalVisible37, setModalVisible37] = useState(false);
      const [modalVisible38, setModalVisible38] = useState(false);
      const [modalVisible39, setModalVisible39] = useState(false);
      const [modalVisible40, setModalVisible40] = useState(false);
      

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
    rek2.map((data,klil)=>(
    
  
  

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
                backgroundColor:'#232628',width:365,height:376,marginTop:100,marginHorizontal:10,
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
                backgroundColor:'#232628',width:395,height:376,marginTop:50,marginHorizontal:10,
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
       <Text key={klil} style={styles.jor1}>{route.params.jor}</Text>
       </View>
       {loading ? (
        <>
          <ActivityIndicator size="large" color="#ff3d00" style={{top:105}} />
          
        </>
      ) : (
        
<Video
        ref={video}
        style={styles.video10}
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
      
</View>



<View style={{
        ...Platform.select({
            android: {
                backgroundColor:'#ff98008c',width:365,height:56,marginTop:100,marginHorizontal:10,
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
              backgroundColor:'#171717',width:390,height:56,marginTop:50,marginHorizontal:10,
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
<Text style={{color:'#ff8800',fontSize:25,fontFamily:'k24',textAlign:'center',top:14}}>{route.params.xeleke}</Text>
</View>







{/* badini */}
<View style={{top:10 ,flexDirection:"row-reverse",flexWrap:'wrap',justifyContent:'space-around'}}>


<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible2(!modalVisible2);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible2(!modalVisible2)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x2}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play2,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible2(true)}>
      
        <Text  
        
        style={styles.textStyle2}>{route.params.x2}</Text>
        
</TouchableOpacity>
      

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible3}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible3(!modalVisible3);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible3(!modalVisible3)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x3}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play3,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible3(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x3}</Text>
</TouchableOpacity>



<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible4}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible4(!modalVisible4);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible4(!modalVisible4)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x4}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play4,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible4(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x4}</Text>
</TouchableOpacity>


<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible5}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible5(!modalVisible5);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible5(!modalVisible5)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x5}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play5,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible5(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x5}</Text>
</TouchableOpacity>
      




      
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible6}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible6(!modalVisible6);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible6(!modalVisible6)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x6}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play6,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible6(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x6}</Text>
</TouchableOpacity>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible7}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible7(!modalVisible7);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible7(!modalVisible7)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x7}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play7,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible7(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x7}</Text>
</TouchableOpacity>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible8}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible8(!modalVisible8);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible8(!modalVisible8)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x8}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play8,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible8(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x8}</Text>
</TouchableOpacity>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible9}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible9(!modalVisible9);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible9(!modalVisible9)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x9}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play9,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible9(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x9}</Text>
</TouchableOpacity>


<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible10}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible10(!modalVisible10);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible10(!modalVisible10)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x10}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play10,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible10(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x10}</Text>
</TouchableOpacity>



<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible11}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible11(!modalVisible11);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible11(!modalVisible11)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x11}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play11,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible11(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x11}</Text>
</TouchableOpacity>


<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible12}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible12(!modalVisible12);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible12(!modalVisible12)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x12}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play12,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible12(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x12}</Text>
</TouchableOpacity>


<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible13}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible13(!modalVisible13);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible13(!modalVisible13)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x13}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play13,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible13(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x13}</Text>
</TouchableOpacity>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible14}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible14(!modalVisible14);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible14(!modalVisible14)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x14}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play14,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible14(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x14}</Text>
</TouchableOpacity>


<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible15}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible15(!modalVisible15);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible15(!modalVisible15)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x15}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play15,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible15(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x15}</Text>
</TouchableOpacity>


<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible16}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible16(!modalVisible16);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible16(!modalVisible16)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x16}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play16,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible16(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x16}</Text>
</TouchableOpacity>


<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible17}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible17(!modalVisible17);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible17(!modalVisible17)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x17}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play17,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible17(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x17}</Text>
</TouchableOpacity>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible18}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible18(!modalVisible18);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible18(!modalVisible18)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x18}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play18,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible18(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x18}</Text>
</TouchableOpacity>


<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible19}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible19(!modalVisible19);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible19(!modalVisible19)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x19}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play19,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible19(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x19}</Text>
</TouchableOpacity>


<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible20}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible20(!modalVisible20);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible20(!modalVisible20)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x20}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play20,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible20(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x20}</Text>
</TouchableOpacity>





<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible21}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible21(!modalVisible21);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible21(!modalVisible21)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x21}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play21,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible21(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x21}</Text>
</TouchableOpacity>


<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible22}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible22(!modalVisible22);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible22(!modalVisible22)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x22}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play22,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible22(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x22}</Text>
</TouchableOpacity>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible23}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible23(!modalVisible23);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible23(!modalVisible23)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x23}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play23,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible23(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x23}</Text>
</TouchableOpacity>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible24}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible24(!modalVisible24);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible24(!modalVisible24)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x24}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play24,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible24(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x24}</Text>
</TouchableOpacity>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible25}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible25(!modalVisible25);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible25(!modalVisible25)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x25}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play25,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible25(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x25}</Text>
</TouchableOpacity>


<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible26}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible26(!modalVisible26);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible26(!modalVisible26)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x26}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play26,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible26(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x26}</Text>
</TouchableOpacity>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible27}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible27(!modalVisible27);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible27(!modalVisible27)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x27}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play27,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible27(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x27}</Text>
</TouchableOpacity>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible28}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible28(!modalVisible28);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible28(!modalVisible28)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x28}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play28,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible28(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x28}</Text>
</TouchableOpacity>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible29}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible29(!modalVisible29);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible29(!modalVisible29)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x29}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play29,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible29(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x29}</Text>
</TouchableOpacity>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible30}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible30(!modalVisible30);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible30(!modalVisible30)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x30}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play30,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible30(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x30}</Text>
</TouchableOpacity>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible31}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible31(!modalVisible31);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible31(!modalVisible31)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x31}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play31,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible31(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x31}</Text>
</TouchableOpacity>


<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible32}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible32(!modalVisible32);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible32(!modalVisible32)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x32}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play32,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible32(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x32}</Text>
</TouchableOpacity>


<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible33}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible33(!modalVisible33);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible33(!modalVisible33)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x33}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play33,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible33(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x33}</Text>
</TouchableOpacity>


<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible34}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible34(!modalVisible34);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible34(!modalVisible34)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x34}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play34,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible34(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x34}</Text>
</TouchableOpacity>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible35}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible35(!modalVisible35);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible35(!modalVisible35)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x35}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play35,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible35(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x35}</Text>
</TouchableOpacity>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible36}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible36(!modalVisible36);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible36(!modalVisible36)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x36}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play36,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible36(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x36}</Text>
</TouchableOpacity>


<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible37}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible37(!modalVisible37);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible37(!modalVisible37)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x37}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play37,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible37(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x37}</Text>
</TouchableOpacity>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible38}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible38(!modalVisible38);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible38(!modalVisible38)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x38}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play38,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible38(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x38}</Text>
</TouchableOpacity>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible39}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible39(!modalVisible39);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible39(!modalVisible39)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x39}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play39,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible39(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x39}</Text>
</TouchableOpacity>

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible40}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible30(!modalVisible40);
        }}>
       
          <View style={styles.modalView}>
        
       
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible40(!modalVisible40)}>
              <FontAwesome 
name="close"
style={{
  ...Platform.select({
      android: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
      },
      ios: {
        fontSize:30,
        color:'#ef7000',
        marginHorizontal:13,
        top:8
       
       
      },

    }),
}}
/>
            </Pressable>
            <Text key={klil} style={styles.jor}>{route.params.x40}</Text>
            <Video
        ref={video}
        style={styles.video}
        source={{
          uri:route.params.play40,
          type:'video/mp4'
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
       <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
       />
       </View>
        </View>
      </Modal>
      
    <TouchableOpacity onPress={() => setModalVisible40(true)}>
        <Text  
        
        style={styles.textStyle2}>{route.params.x40}</Text>
</TouchableOpacity>

      </View>
{/* badini */}























{/* 
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
                backgroundColor:'#171717',width:395,height:376,marginTop:50,marginHorizontal:10,
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
      <View style={styles.buttons}>
        <Button
        
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />

</View>
</View> */}
<View style={{ ...Platform.select({
          android: {
            marginTop:10
          },
          ios: {
            marginTop:0
          },
    
        }),}}>
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
      width:327,
      height:204,
      marginHorizontal:13,
      marginTop:120
    },
    ios: {
      
 width:367,
 height:204,
 marginHorizontal:13,
 marginTop:100

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
  marginTop:10
    },
    ios: {
      
      backgroundColor:'#fff',
      color:'#fff',
      height:40,
      width:200,
      borderRadius:40,
      marginHorizontal:90,
      marginTop:20,
    },
  }),
},
video10:{
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
buttons10:{

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
      jor1:{
        ...Platform.select({
            android: {
             
              fontSize:20,
          color:'#fff',
          fontFamily:'k24',
          textAlign:'right',
          right:20,
          top:0
                
            },
            ios: {
          fontSize:20,
          color:'#fff',
          fontFamily:'k24',
          textAlign:'right',
          right:20,
          top:0
            },
      
          }),
      },


      jor:{
        ...Platform.select({
            android: {
              fontSize:20,
              color:'black',
              fontFamily:'k24',
              textAlign:'right',
              left:120,
              top:80
                
            },
            ios: {
          fontSize:20,
          color:'black',
          fontFamily:'k24',
          textAlign:'right',
          left:130,
          top:90
            },
      
          }),
      },


      modalView: {
        ...Platform.select({
            android: {
               
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        width:345,
        height:400,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        top:120
            },
            ios: {
               
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        width:380,
        height:400,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        top:150
            },
      
          }),
    
      },
      button: {
        ...Platform.select({
            android: {
                
                width:300,
                height:50,
                marginHorizontal:40,
                marginTop:60,
                borderRadius:30
            },
            ios: {
                width:300,
                height:50,
                marginHorizontal:50,
                marginTop:60,
                borderRadius:30
            },
      
          }),
      },
      button1: {
        ...Platform.select({
            android: {
                
              width:50,
                height:50,
                right:130,
                marginTop:20,
                borderRadius:30,marginBottom:-80
            },
            ios: {
                width:50,
                height:50,
                right:150,
                marginTop:20,
                borderRadius:30,marginBottom:-80
            },
      
          }),
      },
      buttonOpen: {
        backgroundColor: '#36454F',
      },
      buttonClose: {
        backgroundColor: '#36454F',
      },
      textStyle: {
        ...Platform.select({
            android: {
                
                color: 'white',
                fontWeight: 'bold',
                fontSize:15,
                fontFamily:'k24',
                right:225,
                top:14
            },
            ios: {
                color: 'white',
                fontWeight: 'bold',
                fontSize:20,
                fontFamily:'k24',
                left:15,
                top:10
            },
      
          }),
      },
    
      textStyle1: {
        ...Platform.select({
            android: {
                
                color: 'white',
                fontWeight: 'bold',
                fontSize:20,
                fontFamily:'k24',
                textAlign:'center',
                top:10
            },
            ios: {
                color: 'white',
                fontWeight: 'bold',
                fontSize:25,
                fontFamily:'k24',
               textAlign:'center',
               top:10
            },
      
          }),
      },
      textStyle2: {
        ...Platform.select({
            android: {
              color: '#9e9e9e',
              fontWeight: 'bold',
              fontSize:20,
              fontFamily:'k24',
              textAlign:'center',
              top:-3,
              marginHorizontal:10,
              padding:10,
            },
            ios: {
                color: '#9e9e9e',
                fontWeight: 'bold',
                fontSize:25,
                fontFamily:'k24',
                textAlign:'center',
                top:-3,
                marginHorizontal:10,
                padding:10,
                
                
            },
      
          }),
      },
      
      modalText: {
        ...Platform.select({
            android: {
              
        fontSize:15,
        textAlign:'right',
        right:5,
        fontFamily:'k24',
        alignItems:'center',
        justifyContent:'center',
        top:15
            },
            ios: {
                
        fontSize:18,
        textAlign:'right',
        right:5,
        fontFamily:'k24',
        top:15
       
            },
      
          }),
    
    
    
    
        
      },
      at: {
        ...Platform.select({
            android: {
              
        fontSize:15,
        textAlign:'right',
        right:5,
        fontFamily:'k24',
        alignItems:'center',
        justifyContent:'center',
        top:15
            },
            ios: {
                
        fontSize:25,
        textAlign:'center',
        fontFamily:'k24',
        
        color:'#fff'
       
            },
      
          }),
    
    
    
    
        
      },
      backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        resizeMode:'contain'
      },
});
