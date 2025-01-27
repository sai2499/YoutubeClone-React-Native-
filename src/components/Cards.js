import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import {AntDesign,Ionicons,MaterialIcons} from '@expo/vector-icons';
import {useNavigation,useTheme} from '@react-navigation/native';
const Card = (props) => {
    const {colors} = useTheme()
    const navigation=useNavigation();
    const textcolor=colors.iconColor
    const myColor="#212121";
    return(
        <TouchableOpacity onPress={()=> navigation.navigate("videoplayer",{videoId: props.videoId,title:props.title})}>
            <View style={{marginBottom: 10}}>
                <Image
                    source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}} 
                    style={{width: "100%",height: 200}}
                />
                <View style={{flexDirection:"row",margin: 5}}>
                    <MaterialIcons name="account-circle" size={40} color={myColor} />
                    <View style={{marginLeft: 10}}>
                        <Text style={{fontSize: 20,width: Dimensions.get("screen").width-50,color:textcolor}} ellipsizeMode="tail" numberOfLines={2}>{props.title}</Text>
                        <Text style={{color:textcolor}}>{props.channel}</Text>
                    </View>                
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card