import React,{useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';
import Constant from 'expo-constants';
const VideoPlayer = ({route}) => {
    const {videoId,title} = route.params
    return (
        <View style={{flex:1,marginTop:Constant.statusBarHeight}}>
            <View style={{
                width: "100%",
                height:200
            }}>
                <WebView source={{uri:`https://www.youtube.com/embed/${videoId}`}} />
            </View>
            <Text style={{fontSize: 20,
                width: Dimensions.get("screen").width-50,
                 margin: 9}}
                 numberOfLines={2}
                 ellipsizeMode="tail">
                {title}
            </Text>
            <View
                style={{borderBottomWidth:1}} />
        </View>
    )
}
export default VideoPlayer