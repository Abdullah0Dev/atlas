import { StyleSheet, Text,ActivityIndicator ,View,Image,Platform,StatusBar,Dimensions,Linking ,FlatList,ScrollView,TouchableOpacity, NativeEventEmitter} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Fontisto } from '@expo/vector-icons';
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { colors } from 'react-native-swiper-flatlist/src/themes';
import axios from "react-native-axios";
import {useState,useEffect} from "react";
import MarqueeView from 'react-native-marquee-view';
import { ResizeMode } from 'expo-av';



export default function Arabic({ navigation}) {


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to simulate a long loading process (2000 seconds)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // 2000 seconds

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);





  //////////////////////////////////////////////////////
    const [home,setHome] = useState([]);
    
    useEffect(() => {
        axios.get('https://amedbaz.github.io/caroselarabic/caroselarabic.json')
        .then(result=>{
          setHome(result.data.carosel)
        })
        }, []);
///////////////////////////////////////////////////////////////
const [rek,setRek] = useState([]);
useEffect(() => {
  axios.get('https://amedbaz.github.io/reklamara/reaklamaraa.json')
  .then(result=>{
    setRek(result.data.pes)
  })
  }, []);
  //////////////////////////////////////////////////////////////  
  const [mshahdd,setMshahdd] = useState([]);
  useEffect(() => {
    axios.get('https://amedbaz.github.io/mshahd/mshahd.json')
    .then(result=>{
      setMshahdd(result.data.mshahd)
    })
    }, []);
//////////////////////////////////////////////////////////////////
const [romancii,setRomancii] = useState([]);
useEffect(() => {
  axios.get('https://amedbaz.github.io/romansiarabic/romanciarabic.json')
  .then(result=>{
    setRomancii(result.data.romanci)
  })
  }, []);
  //////////////////////////////////////////////////////////////////////
  const [topp,setTopp] = useState([]);
useEffect(() => {
  axios.get('https://amedbaz.github.io/toparabic/toparabic.json')
  .then(result=>{
    setTopp(result.data.top)
  })
  }, []);
  //////////////////////////////////////////////////////////////////
  const [seenn,setSeenn] = useState([]);
  useEffect(() => {
    axios.get('https://amedbaz.github.io/seenarabic/seenarabic.json')
    .then(result=>{
      setSeenn(result.data.seen)
    })
    }, []);
    ///////////////////////////////////////////////////////////////
    const [serii,setSerii] = useState([]);
  useEffect(() => {
    axios.get('https://amedbaz.github.io/seriarabic/sariarabic.json')
    .then(result=>{
      setSerii(result.data.seri)
    })
    }, []);
    return (
        <View style={styles.container}>

{loading ? (
        <>
          <ActivityIndicator size="large" color="#ff3d00" style={{top:450}} />
          
        </>
      ) : (
        
//   <ScrollView  showsVerticalScrollIndicator={false}>
//   <View style={{marginTop:0}}>
//     {
//     serii.map((data,klil)=>(
//       <TouchableOpacity 
//    onPress={() => navigation.navigate('Ser',
//     {
//       wene:data.wene,
//       wene1:data.wene1,
//       nav:data.nav,
//       action:data.action,
//     aaction:data.aaction,
//     raiting:data.raiting,
//     araitng:data.araitng,
//     time:data.time,
//     atime:data.atime,
//     trailer:data.trailer,
//     youtube:data.youtube,
//     youtube1:data.youtube1,
//     youtube2:data.youtube2,
//     youtube3:data.youtube3,
//     jor:data.jor,
//     play:data.play,
//     kurti:data.kurti,
//     akurti:data.akurti,
//     ism:data.ism,
//     actor:data.actor,
//     actor1:data.actor1,
//     actor2:data.actor2,
//     actor3:data.actor3,
//     actor4:data.actor4,
//     actor5:data.actor5,
//     new:data.new,
//     }
//    )}
//       >
//   <Image 
  
//   style={styles.wene29} key={klil.id}  source={{uri:data.wene}}/>
//   <Text key={klil.id} style={styles.nav}>{data.nav}</Text>

//   </TouchableOpacity>
//     ))
// }
// <View style={{marginBottom:-20,position:"absolute"}}>
//              <View>

// <FontAwesome6 onPress={() =>navigation.goBack()}
// name='angle-left'
// style={{
//     ...Platform.select({
//         android: {
//             fontSize:40,
//             color:'#fff',
//             marginHorizontal:25,
//             marginTop:20
//         },
//         ios: {
//             fontSize:40,
//             color:'#fff',
//             marginHorizontal:25,
//             marginTop:60,
//         },
//       }),
//      }}
// />
    
// </View>


//   <View style={{
//     ...Platform.select({
//       android: {
//         left:325,top:-40
//       },
//       ios: {
//         left:360,top:-33
//       },
      
//       }),
//     }}>
//     <TouchableOpacity onPress={()=> navigation.navigate('Search')}>
      
// <FontAwesome onPress={()=> navigation.navigate('Search')}
// name='search'
// size={30}
// color={'#fff'}


// />
       
//         </TouchableOpacity>
        


// </View>
// <LinearGradient
//         // Background Linear Gradient
//         colors={['rgba(0,0,0,0)','rgba(0,0,0,0.9)','black']}
//         start={{x: 0.5, y: 0}} end={{x: 0.5, y:0.7}}
//         style={styles.LinearGradient2}
//       />
// <View style={{
//   ...Platform.select({
//     android: {
//       top:370
//     },
//     ios: {
//       top:470
//     },

//   }),
//   }}>
// <LinearGradient
//         // Background Linear Gradient
//         colors={['rgba(0,0,0,0)','rgba(0,0,0,0.9)',]}
//         start={{x: 0.5, y: 0}} end={{x: 0.5, y: 0.8}}
//         style={styles.LinearGradient}
//       />
//         </View>
        
        
//         </View>
//     </View>
    
//      {/* badini u sorani */}
//   <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
//           <View style={{flexDirection:'row',marginTop:2,right:10}} >
//             <TouchableOpacity onPress={()=> navigation.navigate('Actionarabic1')}>
            
//           <LinearGradient
//         colors={['black', '#fff', '#fff']}
//         start={{ x: 1, y: 0 }}
//         end={{ x: 0, y: 0 }}
//         style={styles.linearGradient1}
//       >
//         <View style={styles.innerContainer1}>
//         <Text style={styles.text}>أكشن</Text>
//         </View>
//       </LinearGradient>
//       </TouchableOpacity>
// <TouchableOpacity onPress={()=> navigation.navigate('Dramaarabic')}>
//  <LinearGradient
//       colors={['black', '#fff', '#fff']}
//         start={{ x: 1, y: 0 }}
//         end={{ x: 0, y: 0 }}
//         style={styles.linearGradient1}
//       >
//         <View style={styles.innerContainer1}>
//         <Text style={styles.text}>دراما</Text>
//         </View>
//       </LinearGradient>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={()=> navigation.navigate('Animiarabic')}>
//       <LinearGradient
//         colors={['black', '#fff', '#fff']}
//         start={{ x: 1, y: 0 }}
//         end={{ x: 0, y: 0 }}
//         style={styles.linearGradient1}
//       >
//         <View style={styles.innerContainer1}>
//         <Text style={styles.text}>أنيمي</Text>
//         </View>
//       </LinearGradient>
//       </TouchableOpacity>
//       {/* <TouchableOpacity onPress={()=> navigation.navigate('Comediarabic')}>
//       <LinearGradient
//        colors={['black', '#ff9800','#e23600']}
//         start={{ x: 1, y: 0}}
//         end={{ x: 0, y: 0}}
//         style={styles.linearGradient1}
//       >
//         <View style={styles.innerContainer1}>
//         <Text style={styles.text}>كوميدية</Text>
//         </View>
//       </LinearGradient>
//       </TouchableOpacity> */}
//       <TouchableOpacity onPress={()=> navigation.navigate('Trsarabic')}>
//       <LinearGradient
//        colors={['black', '#fff', '#fff']}
//         start={{ x: 1, y: 0}}
//         end={{ x: 0, y: 0}}
//         style={styles.linearGradient1}
//       >
//         <View style={styles.innerContainer1}>
//         <Text style={styles.text}>ألرعب</Text>
//         </View>
//       </LinearGradient>
//       </TouchableOpacity>
//         </View>
//         </ScrollView>
// {/* badini u sorani */}


// {/* biner */}




// {/* biner */}







// <View>




// {/* reklam */}
// <View style={{flexDirection:'row',marginTop:30}}>

//     {
//     rek.map((data,klil)=>(
    
  
  

//     <Image
//   style={styles.reklam} key={klil}  source={{uri:data.pe}}/>

 
//     ))
// }

   

// </View>
// {/* reklam */}








// <View style={{
//   ...Platform.select({
//     android: {
//       marginTop:250
//     },
//     ios: {
//       marginTop:-70
//     },

//   }),
//   }}>
// {/* new */}
// <View style={{

// ...Platform.select({
//     android: {
//     top:'-13%',
//     marginBottom:-170
//     },
//     ios: {
//    top:100,
//         marginBottom:100
//     },
 
//   }),
// }}>

// <Text 
//  style={styles.text4}>الجديد</Text>
// <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//     <View style={{marginTop:10,flexDirection:'row'}}>
//     {
//     home.map((data,klil)=>(
//       <TouchableOpacity 
//    onPress={() => navigation.navigate('Carosell',
//     {
//       wene:data.wene,
//       wene1:data.wene1,
//       nav:data.nav,
//       action:data.action,
//     aaction:data.aaction,
//     raiting:data.raiting,
//     araitng:data.araitng,
//     time:data.time,
//     atime:data.atime,
//     trailer:data.trailer,
//     youtube:data.youtube,
//     youtube1:data.youtube1,
//     youtube2:data.youtube2,
//     youtube3:data.youtube3,
//     jor:data.jor,
//     play:data.play,
//     kurti:data.kurti,
//     akurti:data.akurti,
//     ism:data.ism,
//     actor:data.actor,
//     actor1:data.actor1,
//     actor2:data.actor2,
//     actor3:data.actor3,
//     actor4:data.actor4,
//     actor5:data.actor5,
//     new:data.new,
//     }
//    )}
//       >
//   <Image 
  
//   style={styles.wene2} key={klil.id}  source={{uri:data.wene}}/>
//   <Image 
  
//   style={styles.new} key={klil.id}  source={{uri:data.new}}/>
//   </TouchableOpacity>
//     ))
// }
//     </View>
//   </ScrollView>


     
// </View>
// {/*new */}



// <View style={{
  
//   ...Platform.select({
//     android: {
//       top:-100
//     },
//     ios: {
//       top:-50
//     },

//   }),}}>
// {/* for you */}
// <View style={{

// ...Platform.select({
//     android: {
//     top:'-8%'
//     },
//     ios: {
//    top:35
      
//     },
 
//   }),
// }}>
// <View style={{

// ...Platform.select({
//     android: {
//     top:'2%'
//     },
//     ios: {
   
//       top:'3%'
//     },
 
//   }),
// }}>
// <Text 
//  style={styles.text2}>أكثر الافلام مشاهدة</Text>
//  <TouchableOpacity  onPress={()=> navigation.navigate('Zedemshahd')}>
// <LinearGradient
//         colors={['#c10d0d', '#ff8000','#fff']}
//         start={{ x: 1.9, y: 0.1 }}
//         end={{ x: 0.9, y: 4 }}
//         style={styles.linearGradient13}
//       >
//         <View style={styles.innerContainer13}>
//         <FontAwesome6 
// name='angle-left'
// size={25}
// color={'#fff'}
// marginHorizontal={5}
// marginTop={5}
// />
//   <Text style={styles.text1}>ألمزيد</Text>
//         </View>
//       </LinearGradient>
//       </TouchableOpacity>
//       </View>
// <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//     <View style={{marginTop:0,flexDirection:'row'}}>
//     {
//     mshahdd.map((data,klil)=>(
//       <TouchableOpacity 
//    onPress={() => navigation.navigate('Mshahd',
//     {
//       wene:data.wene,
//       wene1:data.wene1,
//       nav:data.nav,
//       action:data.action,
//     aaction:data.aaction,
//     raiting:data.raiting,
//     araitng:data.araitng,
//     time:data.time,
//     atime:data.atime,
//     trailer:data.trailer,
//     youtube:data.youtube,
//     youtube1:data.youtube1,
//     youtube2:data.youtube2,
//     youtube3:data.youtube3,
//     jor:data.jor,
//     play:data.play,
//     kurti:data.kurti,
//     akurti:data.akurti,
//     ism:data.ism,
//     actor:data.actor,
//     actor1:data.actor1,
//     actor2:data.actor2,
//     actor3:data.actor3,
//     actor4:data.actor4,
//     actor5:data.actor5,
//     new:data.new,
//     }
//    )}
//       >
//   <Image 
  
//   style={styles.wene2} key={klil.id}  source={{uri:data.wene}}/>
//   </TouchableOpacity>
//     ))
// }
//     </View>
//   </ScrollView>


     
// </View>
// {/* for you */}



// {/* romanci */}
// {/* <View style={{

// ...Platform.select({
//     android: {
//     top:'-20%'
//     },
//     ios: {
//    top:70
      
//     },
 
//   }),
// }}>
// <View style={{

// ...Platform.select({
//     android: {
//     top:'2%'
//     },
//     ios: {
   
//       top:'3%'
//     },
 
//   }),
// }}>
// <Text 
//  style={styles.text21}>رومانسي</Text>
//  <TouchableOpacity  onPress={()=> navigation.navigate('Zederomanci')}>
// <LinearGradient
//         colors={['#c10d0d', '#ff8000','#fff']}
//         start={{ x: 1.9, y: 0.1 }}
//         end={{ x: 0.9, y: 4 }}
//         style={styles.linearGradient13}
//       >
//         <View style={styles.innerContainer13}>
//         <FontAwesome6 
// name='angle-left'
// size={25}
// color={'#fff'}
// marginHorizontal={5}
// marginTop={5}
// />
//   <Text style={styles.text1}>ألمزيد</Text>
//         </View>
//       </LinearGradient>
//       </TouchableOpacity>
//       </View>
// <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//     <View style={{marginTop:0,flexDirection:'row'}}>
//     {
//     romancii.map((data,klil)=>(
//       <TouchableOpacity 
//    onPress={() => navigation.navigate('Romanci',
//     {
//       wene:data.wene,
//       wene1:data.wene1,
//       nav:data.nav,
//       action:data.action,
//     aaction:data.aaction,
//     raiting:data.raiting,
//     araitng:data.araitng,
//     time:data.time,
//     atime:data.atime,
//     trailer:data.trailer,
//     youtube:data.youtube,
//     youtube1:data.youtube1,
//     youtube2:data.youtube2,
//     youtube3:data.youtube3,
//     jor:data.jor,
//     play:data.play,
//     kurti:data.kurti,
//     akurti:data.akurti,
//     ism:data.ism,
//     actor:data.actor,
//     actor1:data.actor1,
//     actor2:data.actor2,
//     actor3:data.actor3,
//     actor4:data.actor4,
//     actor5:data.actor5,
//     new:data.new,
//     }
//    )}
//       >
//   <Image 
  
//   style={styles.wene2} key={klil.id}  source={{uri:data.wene}}/>
//   </TouchableOpacity>
//     ))
// }
//     </View>
//   </ScrollView>


     
// </View> */}
// {/* romanci */}




// {/* top */}
// <View style={{

// ...Platform.select({
//     android: {
//     top:'1%',
//     marginBottom:-50
//     },
//     ios: {
//    top:100,
//         marginBottom:100
//     },
 
//   }),
// }}>

// <Text 
//  style={styles.text4}>توب <Text style={{color:'#fda521'}}>5</Text></Text>
// <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//     <View style={{marginTop:20,flexDirection:'row'}}>
//     {
//     topp.map((data,klil)=>(
//       <TouchableOpacity 
//    onPress={() => navigation.navigate('Toparabic',
//     {
//       wene:data.wene,
//       wene1:data.wene1,
//       nav:data.nav,
//       action:data.action,
//     aaction:data.aaction,
//     raiting:data.raiting,
//     araitng:data.araitng,
//     time:data.time,
//     atime:data.atime,
//     trailer:data.trailer,
//     youtube:data.youtube,
//     youtube1:data.youtube1,
//     youtube2:data.youtube2,
//     youtube3:data.youtube3,
//     jor:data.jor,
//     play:data.play,
//     kurti:data.kurti,
//     akurti:data.akurti,
//     ism:data.ism,
//     actor:data.actor,
//     actor1:data.actor1,
//     actor2:data.actor2,
//     actor3:data.actor3,
//     actor4:data.actor4,
//     actor5:data.actor5,
//     new:data.new,
//     }
//    )}
//       >
//   <Image 
  
//   style={styles.wene2} key={klil.id}  source={{uri:data.wene}}/>
//   </TouchableOpacity>
//     ))
// }
//     </View>
//   </ScrollView>


     
// </View>
// {/* top */}
// </View>
// </View>
// </View>
//   </ScrollView>
<View>
<FontAwesome6 onPress={() =>navigation.goBack()}
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
            marginTop:60,
        },
      }),
     }}
/>
<Text style={styles.cha}>قريبا</Text>
</View>
      )}





        </View>
    )

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
     
    },
    linearGradient1: {
        height: 45,
        width: 120,
        borderRadius: 10, // <-- Outer Border Radius
        left:'17%',
        
        marginRight:20
      },
      innerContainer1: {
        borderRadius: 10, // <-- Inner Border Radius
        flex: 1,
        margin: 2, // <-- Border Width
        backgroundColor: 'black',
        justifyContent: 'center',
      },
      text:{
        color:'#fff',
        
        ...Platform.select({
          android: {
            textAlign:'center',
            fontFamily:'k24',
            fontSize:14,
            fontWeight:'600'
          },
          ios: {
            textAlign:'center',
            fontFamily:'k24',
        fontSize:15,
        fontWeight:'600'
          },
    
        }),
      },
      sli:{
        ...Platform.select({
          android: {
            color:'#fff',
           fontSize:20,
           fontFamily:'k24',
           textAlign:'right',
           right:20
          },
          ios: {
           color:'#fff',
           fontSize:20,
           fontFamily:'k24',
           textAlign:'right',
           right:20
          },
      
        }),
      
      },
      linearGradient111: {
        ...Platform.select({
          android:{
           backgroundColor:'#1C1C1C',width:350,height:290,marginHorizontal:15,top:10,   borderRadius:10,
           shadowColor: '#fff',
           shadowRadius: 70,
           shadowOpacity: 0.6,
           elevation: 8,
           shadowOffset: {
             width: 10,
             height: 15
           }
          },
          ios:{
           backgroundColor:'#1C1C1C',width:380,height:300,marginHorizontal:20,top:20,  borderRadius:10,
           shadowColor: '#fff',
           shadowRadius: 70,
           shadowOpacity:0.7 ,
           elevation: 8,
           shadowOffset: {
             width: 10,
             height: 15
           }
          },
      }),
      
      },
      innerContainer111: {
       
      },
      wene21:{
        ...Platform.select({
          android: {
            width:310,
            height:200,
            marginHorizontal:20,
            borderRadius:10,
            top:'5%',
            // resizeMode: 'contain',
            // transform: [{rotate: '30deg'}]
          },
          ios: {
            width:330,
            height:200,
            marginHorizontal:10,
            borderRadius:7,
            top:'5%',
            // resizeMode: 'contain',
            // transform: [{rotate: '30deg'}]
          },
      
        }),
       },
       hl:{
        ...Platform.select({
          android: {
            right:60,
            fontSize:20,
            color:'#fff',
            fontFamily:'k24',
            top:-30
            
          },
          ios: {
          left:70,
           fontSize:20,
           color:'#fff',
           fontFamily:'k24',
           top:-30
          },
      
        }),
      
      },
      wene211:{
        ...Platform.select({
          android: {
            width:75,
            height:120,
            top:-350,
            right:0
          },
          ios: {
            width:80,
            height:130,
            top:-370,
            right:0
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
       linearGradient12: {
        ...Platform.select({
          android:{
           backgroundColor:'#fff',width:350,height:70,marginHorizontal:15,  borderRadius:10,
           shadowColor: '#fff',
           shadowRadius: 10,
           shadowOpacity: 0.6,
           elevation: 8,
           shadowOffset: {
             width: 0,
             height: 4
           }
          },
          ios:{
           backgroundColor:'#1fbae4',width:380,height:60,marginHorizontal:15,  borderRadius:10,
           shadowColor: '#fff',
           shadowRadius: 3,
           shadowOpacity:0.8 ,
           elevation: 8,
           shadowOffset: {
             width: 5,
             height: 5
           }
          },
    }),
    
      },
      innerContainer12: {
       
      },
      linearGradient13: {
        ...Platform.select({
          android:{
           backgroundColor:'#fff',width:85,height:35,marginHorizontal:25,  borderRadius:10,top:-30,
           shadowColor: '#fff',
           shadowRadius: 10,
           shadowOpacity: 0.6,
           elevation: 8,
           shadowOffset: {
             width: 0,
             height: 4
           }
          },
          ios:{
           backgroundColor:'#1fbae4',width:85,height:35,marginHorizontal:25,  borderRadius:10,top:-30,
           shadowColor: '#fff',
           shadowRadius: 3,
           shadowOpacity:0.8 ,
           elevation: 8,
           shadowOffset: {
             width: 5,
             height: 5
           }
          },
      }),
      
      },
      innerContainer13: {
       
      },
      text1:{
  
        ...Platform.select({
          android: {
            fontSize:17,
            color:'#fff',
           right:'20%',
            marginTop:-23,
            fontWeight:'600',  fontFamily:'k24',
          },
          ios: {
            fontSize:20,
            color:'#fff',
            left:27,
            marginTop:-23,
            fontWeight:'600',
            fontFamily:'k24',
          },
      
        }),
       },
       text2:{
     
        ...Platform.select({
          android: {
            fontSize:16,
            color:'#fff',
            right:"7%",
            marginTop:167,
            fontWeight:'600', fontFamily:'k24'
          },
          ios: {
            fontSize:20,
            color:'#fff',
            left:"60%",
            marginTop:-15,
            fontWeight:'700',
            fontFamily:'k24'
          },
      
        }),
       },
       wene2:{
        ...Platform.select({
          android: {
            width:200,
            height:300,
            marginHorizontal:10,
            borderRadius:10,
            top:'-0%',
            
          },
          ios: {
            width:200,
            height:300,
            marginHorizontal:10,
            borderRadius:10,
            top:'0%',
            
          },
      
        }),
       },
       linearGradient10: {
        ...Platform.select({
          android: {
              backgroundColor:'#073825',width:250,height:60,marginTop:-70,marginHorizontal:60,borderRadius:10,
            
          },
          ios: {
              backgroundColor:'#073825',width:280,height:70,marginTop:30,marginHorizontal:60,borderRadius:10,
             
             
              
          },
      
        }),
      
      },
      innerContainer10: {
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
            left:'30%',
            top:"0%",
            fontFamily:'k24'
          },
          ios: {
            fontSize:40,
            fontWeight:'600',
            color:'#fff',
            left:'25%',
            top:"0%",
            fontFamily:'k24'
          
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
      text21:{
     
        ...Platform.select({
          android: {
            fontSize:16,
            color:'#fff',
            right:"7%",
            marginTop:157,
            fontWeight:'600', fontFamily:'k24'
          },
          ios: {
            fontSize:20,
            color:'#fff',
            left:"80%",
            marginTop:-15,
            fontWeight:'700',
            fontFamily:'k24'
          },
      
        }),
       },
       text4:{
 
        ...Platform.select({
          android: {
            fontSize:16,
            color:'#fff',
            right:"7%",
            marginTop:-15,
            fontWeight:'600', fontFamily:'k24'
          },
          ios: {
            fontSize:25,
            color:'#fff',
            left:"80%",
            marginTop:1,
            fontWeight:'700',
            fontFamily:'k24'
          },
      
        }),
       },
       new:{
        ...Platform.select({
          android: {
            width:80,
            height:90,
            left:130,
            borderRadius:10,
            top:'-77%',
            
          },
          ios: {
            width:80,
            height:90,
            left:130,
            borderRadius:10,
            top:'-77%',
            
            
          },
      
        }),
       },
       wene29:{
        ...Platform.select({
          android: {
              width:450,
              height:550,
              marginHorizontal:'-5%',
              borderRadius:10,
              
              top:-15,
              opacity: 0.5,
              
          
          },
          ios: {
             width:450,
             height:550,
             marginHorizontal:-20,
             borderRadius:10,
           
             top:0,
             opacity: 0.6,
             
          
          },
    
        }),
       },
       nav:{
        ...Platform.select({
          android: {
            position:'absolute',
            fontSize:25,
            marginTop:420,color:'#fff',fontFamily:'k24',left:20
          },
          ios: {
            position:'absolute',
            fontSize:25,
            marginTop:430,color:'#fff',fontFamily:'k24',left:20
          },
      
        }),
      },
      LinearGradient:{
        ...Platform.select({
          android: {
           width:500,height:140,marginTop:'-85%', position:'absolute'
          },
          ios: {
           width:500,height:140,marginTop:'-245%', position:'absolute'
          },
      
        }),
       
        
        
            },
            LinearGradient2:{
              ...Platform.select({
                android: {
                 width:500,height:18, position:'absolute',
                 transform: [{rotate: '180deg'}],
                },
                ios: {
                 width:500,height:50, position:'absolute',
                 transform: [{rotate: '180deg'}],
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
                  top:0
                },
                ios: {
                color:'#fff',
                fontSize:25,
                fontFamily:'k24',
                textAlign:'center',
                top:0
                },
            
              }),
          
          
             },
})