
import {Alert, Modal,StatusBar, StyleSheet,Image, Text, Pressable, View,TouchableOpacity,Platform,Linking} from 'react-native';
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from 'expo-linear-gradient';
import axios from "react-native-axios";
import {useState,useEffect} from "react";
import RNPickerSelect from "react-native-picker-select";
import { FontAwesome } from '@expo/vector-icons';

import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const Setting = ({ navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible11, setModalVisible11] = useState(false);

  const [rek1,setRek1] = useState([]);
useEffect(() => {
  axios.get('https://amedbaz.github.io/rekambadini/reklambadini.json')
  .then(result=>{
    setRek1(result.data.pes1)
  })
  }, []);


  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <View style={styles.centeredView}>
<View style={{marginBottom:10}}>
  <TouchableOpacity  onPress={() =>navigation.goBack()}>
    <View>
    
<FontAwesome6  onPress={() =>navigation.goBack()}
name='angle-down'
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
            marginTop:30
        },
  
      }),
}}

/>
        
    </View>
    </TouchableOpacity>
    
</View>




      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>من نحن - تم إنشاء أطلس لتعريفك بالسينما ولن نحرمك مرة أخرى من الأفلام والمسلسلات المقتبسة والمدبلجة بأفضل جودة على الإطلاق.-جميع الحقوق محفوظة أطلس</Text>
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle1}>خروج</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      
      <Pressable
           
           

        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>العربي</Text>
        <FontAwesome6  
name='angle-right'
style={{
    ...Platform.select({
        android: {
            fontSize:30,
            color:'#fff',
            left:255,
            top:-14
            
        },
        ios: {
            fontSize:30,
            color:'#fff',
            left:255,
            top:-12
        },
  
      }),
}}

/>
      </Pressable> */}
      

{/* badini */}
<View style={{top:-20}}>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible1(!modalVisible1);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>دەربارەی مە ـ ئەتلەس هاتیە دروسکرن دا هەوەیێن هێژا و خوشتڤی ئاشنابکەت دگەل سینەمایێ و هەوەیێن رێزدار بێ بارنەکەین ژ فیلم و زنجیرەیێن نوێ ب ژێرنڤیس و دوبلاج و ب باشترین کوالێتیا سەردەم-ماف یێ پاراستیە  ATLAS</Text>
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible1(!modalVisible1)}>
              <Text style={styles.textStyle1}>دەرکەتن</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      
      <Pressable
           
           

        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible1(true)}>
        <Text style={styles.textStyle2}>کوردی-بادینی</Text>
        <FontAwesome6  
name='angle-right'
style={{
    ...Platform.select({
        android: {
            fontSize:30,
            color:'#fff',
            left:255,
            top:-14
            
        },
        ios: {
            fontSize:30,
            color:'#fff',
            left:255,
            top:-12
        },
  
      }),
}}

/>
      </Pressable>
      </View>
{/* badini */}


{/* sorani */}
<View style={{top:-40}}>
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible11}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible11(!modalVisible11);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>ده‌رباره‌ی ئێمه‌_ئه‌تله‌س هاتیه‌ دروستكردن تائێوه‌ی هێژا و خوشه‌ویست ئاشنابكات له‌گه‌ل سینه‌ما ئێوه‌ی رێزدار بێ به‌هرناكه‌ین له‌ فیلم و زنجیره‌كان به‌ژێرنوس وه‌ دوبلاج به‌ باشترین كوالێتی سه‌رده‌میانه-هەموو مافەکان بۆ ئەتڵەس پارێزراوە</Text>
            <Pressable
              style={[styles.button1, styles.buttonClose]}
              onPress={() => setModalVisible11(!modalVisible11)}>
              <Text style={styles.textStyle1}>داخستن</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      
      <Pressable
           
           

        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible11(true)}>
        <Text style={styles.textStyle2}>کوردی-سورانی</Text>
        <FontAwesome6  
name='angle-right'
style={{
    ...Platform.select({
        android: {
            fontSize:30,
            color:'#fff',
            left:255,
            top:-14
            
        },
        ios: {
            fontSize:30,
            color:'#fff',
            left:255,
            top:-12
        },
  
      }),
}}

/>
      </Pressable>
      </View>
{/* sorani */}


<View style={{
        ...Platform.select({
          android: {
            marginTop:350,marginHorizontal:90,flexDirection:'row',marginBottom:500
          },
          ios: {
            marginTop:380,marginHorizontal:110,flexDirection:'row',marginBottom:400
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



 <View style={{...Platform.select({
        android: {
            
            top:-364
            
        },
        ios: {
          
            top:-470
        },
  
      }),}}>

    {
    rek1.map((data,klil)=>(
    
  
  
<Text style={styles.at}>{data.at}</Text>

 
    ))
}

   

</View> 







      <StatusBar 
     backgroundColor="black"
     barStyle="white"
      />
   
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor:'#1c1f20',

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
            
            width:300,
            height:50,
            marginHorizontal:50,
            marginTop:170,
            borderRadius:30,marginBottom:-80
        },
        ios: {
            width:300,
            height:50,
            marginHorizontal:50,
            marginTop:180,
            borderRadius:30,marginBottom:-80
        },
  
      }),
  },
  buttonOpen: {
    backgroundColor: '#2a2d2f',
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
            
            color: 'white',
            fontWeight: 'bold',
            fontSize:15,
            fontFamily:'k24',
            right:195,
            top:14
        },
        ios: {
            color: 'white',
            fontWeight: 'bold',
            fontSize:20,
            fontFamily:'k24',
            left:15,
            top:12
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
            
    fontSize:22,
    textAlign:'right',
    right:5,
    fontFamily:'k24',
    top:30,
   
        },
  
      }),




    
  },
  at: {
    ...Platform.select({
        android: {
          fontSize:20,
          textAlign:'center',
          fontFamily:'k24',
          top:-70,
          color:'#fff'
        },
        ios: {
            
    fontSize:25,
    textAlign:'center',
    fontFamily:'k24',
    top:90,
    color:'#fff'
   
        },
  
      }),




    
  },
});

export default  Setting;