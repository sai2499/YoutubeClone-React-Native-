import React from 'react';
import { StyleSheet, Text, View, ScrollView,FlatList } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Cards';
import {useSelector} from 'react-redux';
export default function HomeScreen() {
    const cardDatas= useSelector(state=> {
        return state.cardData
    })
  return (
    <View style={{flex:1}}>
      <Header />
        <FlatList data={cardDatas}
            renderItem={({item})=>{
                return <Card  
                    videoId={item.id.videoId}
                    title={item.snippet.title}
                    channel={item.snippet.channelTitle}
                    />
            }}keyExtractor={item=>item.id.videoId}/>
      
    </View>
  );
}


