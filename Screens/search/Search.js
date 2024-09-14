import React, { useEffect, useState } from "react";
import { StyleSheet, StatusBar, Text, View, Image, ScrollView, Platform, TouchableOpacity, TextInput, Linking, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import axios from "react-native-axios";

export default function Search({ navigation }) {

  const [originalList, setOriginalList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get('https://amedbaz.github.io/search/search.json')
      .then(result => {
        setOriginalList(result.data.Searchii);
        setFilteredList(result.data.Searchii);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (search === "") {
      setFilteredList(originalList);
    } else {
      const newList = originalList.filter((val) =>
        val.lable.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
      setFilteredList(newList);
    }
  }, [search, originalList]);

  return (
    <View style={styles.container}>
      <View style={{ marginTop:10 }}>
        
        <View style={{...Platform.select({
        android: {
           top:-1
        },
        ios: {
            top:45
        },
  
      }),}}> 
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
            marginTop:10
        },
  
      }),
}}/>
</View>
          <Image
            style={{
              ...Platform.select({
                android: {
                  color: '#fda521', textAlign: 'center',
                  fontSize: 30,
                  fontWeight: '700',
                  marginTop: '-12%',
                  width: 155,
                  height: 50,
                  left: 100
                },
                ios: {
                  color: '#fda521', textAlign: 'center',
                  fontSize: 30,
                  fontWeight: '700',
                  marginTop: '0%',
                  width: 155,
                  height: 50,
                  left: 120
                },
              }),
            }}
            source={{
              uri: 'https://www.evernote.com/shard/s475/sh/7a82b274-4eb5-e4c8-4fad-1e80e5f5ce9c/qtAKaZrE97jG-Cu9TnXZ0GRJHmsdBGM9Hlivd0D9pg5PGcPPxgCzng_Odg/res/36ead5a7-3735-b08a-de36-01ba530dd691'
            }}
          />

          <StatusBar backgroundColor="black" barStyle="white" />
        </View>
      

      <View style={{ margin: 20, flexDirection: 'row' }}>
        <LinearGradient
          colors={['#ff9800', '#ff3d00', '#ff3d00']}
          start={{ x: 1.2, y: 2 }}
          end={{ x: 0.5, y: 2.5 }}
          style={styles.search}
        >
          <View style={styles.innerContainer12}>
            <FontAwesome5
            
              name='search'
              size={25}
              margin={13}
              left={0}
              color={'#fff'}
              
            />
          </View>
        </LinearGradient>
        <TextInput
          style={styles.input}
          placeholder="Search"
          fontWeight="600"
          fontFamily={'k24'}
          fontSize={22}
          placeholderTextColor={'grey'}
          aria-checked={"mixed"}
          onChangeText={(val) => setSearch(val)}
        />
      </View>

      <View style={{ marginBottom: 210 }}>
        <FlatList
          data={filteredList}
          
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('DataSearch', {
                  xeleke:item.xeleke,
                  wene1: item.wene1,
                  lable: item.lable,
                  wene: item.wene,
                  nav: item.nav,
                  action: item.action,
                  aaction: item.aaction,
                  raiting: item.raiting,
                  araitng: item.araitng,
                  time: item.time,
                  atime: item.atime,
                  trailer: item.trailer,
                  youtube: item.youtube,
                  youtube1:item.youtube1,
                  youtube2:item.youtube2,
                  youtube3:item.youtube3,
                  jor: item.jor,
                  play: item.play,
                  kurti: item.kurti,
                  akurti: item.akurti,
                  ism: item.ism,
                  actor: item.actor,
                  actor1: item.actor1,
                  actor2: item.actor2,
                  actor3: item.actor3,
                  actor4: item.actor4,
                  actor5: item.actor5,
                  x2:item.x2,
                  x3:item.x3,
                  x4:item.x4,
                  x5:item.x5,
                  x6:item.x6,
                  x7:item.x7,
                  x8:item.x8,
                  x9:item.x9,
                  x10:item.x10,
                  x11:item.x11,
                  x12:item.x12,
                  x13:item.x13,
                  x14:item.x14,
                  x15:item.x15,
                  x16:item.x16,
                  x17:item.x17,
                  x18:item.x18,
                  x19:item.x19,
                  x20:item.x20,
                  x21:item.x21,
                  x21:item.x21,
                  x22:item.x22,
                  x23:item.x23,
                  x24:item.x24,
                  x25:item.x25,
                  x26:item.x26,
                  x27:item.x27,
                  x28:item.x28,
                  x29:item.x29,
                  x30:item.x30,
                  x31:item.x31,
                  x32:item.x32,
                  x33:item.x33,
                  x34:item.x34,
                  x35:item.x35,
                  x36:item.x36,
                  x37:item.x37,
                  x38:item.x38,
                  x39:item.x39,
                  x40:item.x40,
                 st:item.st,
                 play2:item.play2,
                 play3:item.play3,
                 play4:item.play4,
                 play5:item.play5,
                 play6:item.play6,
                 play7:item.play7,
                 play8:item.play8,
                 play9:item.play9,
                 play10:item.play10,
                 play11:item.play11,
                 play12:item.play12,
                 play13:item.play13,
                 play14:item.play14,
                 play15:item.play15,
                 play16:item.play16,
                 play17:item.play17,
                 play18:item.play18,
                 play19:item.play19,
                 play20:item.play20,
                 play21:item.play21,
                 play22:item.play22,
                 play23:item.play23,
                 play24:item.play24,
                 play25:item.play25,
                 play26:item.play26,
                 play27:item.play27,
                 play28:item.play28,
                 play29:item.play29,
                 play30:item.play30,
                 play31:item.play31,
                 play32:item.play32,
                 play33:item.play33,
                 play34:item.play34,
                 play35:item.play35,
                 play36:item.play36,
                 play37:item.play37,
                 play38:item.play38,
                 play39:item.play39,
                 play40:item.play40,
                })}
              >
                <Image style={styles.wene2} source={{ uri: item.wene }} />
                <Text style={styles.lable}>{item.lable}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  for: {
    ...Platform.select({
      android: {
        fontSize: 25,
        color: '#fff',
        marginHorizontal: 140,
        marginTop: -42,
        fontWeight: '600'
      },
      ios: {
        fontSize: 30,
        color: '#fff',
        marginHorizontal: 150,
        marginTop: -39,
        fontWeight: '600'
      },
    }),
  },
  search: {
    ...Platform.select({
      android: {
        width: 70,
        height: 50,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
      },
      ios: {
        width: 70,
        height: 50,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
      },
    }),
  },
  input: {
    ...Platform.select({
      android: {
        flex: 1,
        backgroundColor: '#fff',
        fontSize: 20,
        padding: 5,
        right: 15,
        borderRadius: 10,
      },
      ios: {
        flex: 1,
        backgroundColor: '#fff',
        fontSize: 20,
        padding: 10,
        right: 15,
        borderRadius: 10,
        color: 'black',
      },
    }),
  },
  wene2: {
    ...Platform.select({
      android: {
        width: '90%',
        height: 200,
        marginHorizontal: 15,
        borderRadius: 8,
        marginTop: 20
      },
      ios: {
        width: '90%',
        height: 200,
        marginHorizontal: 20,
        borderRadius: 8,
        marginTop: 20,
      },
    }),
  },
  lable: {
    ...Platform.select({
      android: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        marginTop: 5,
        fontWeight: '600',
         fontFamily:'k24'
      },
      ios: {
        fontSize: 20,
        color: '#fff',
        marginTop: 5,
        textAlign: 'center',
        fontWeight: '600',
        fontFamily:'k24'
      },
    }),
  },
});
