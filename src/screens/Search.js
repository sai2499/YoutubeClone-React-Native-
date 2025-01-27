import React,{useState} from 'react';
import {View, TextInput, FlatList, ActivityIndicator} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import MiniCard from '../components/MiniCard';
import Constant from 'expo-constants';
import { useTheme } from '@react-navigation/native';
import {useSelector,useDispatch} from 'react-redux';
import { color } from 'react-native-reanimated';
const SearchScreen = (props) => {
    const {colors} = useTheme()
    const myColor=colors.iconColor;
    const [value, setValue] = useState("")
    //const [MiniCardData, setMiniCard]=useState([])
    const dispatch=useDispatch()
    const MiniCardData=useSelector(state=>{
        return state.cardData
    })
    const [loading, setLoading] = useState(false)
    const fetchData = () => {
        setLoading(true)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyBjfMIxNfKqOAE86oHSHOPSTSHRh_7Nrdc`)
        .then(res=>res.json())
        .then(data=>{
            setLoading(false)
            dispatch({type:"add",payload:data.items})
            //setMiniCard(data.items)
        })
    }
    
    return(
        <View style={{flex:1,marginTop:Constant.statusBarHeight}}>
            <View style={{padding:5,
                flexDirection:"row",
                justifyContent:"space-around",
                elevation: 5,
                backgroundColor: colors.headerColor
                }}>
                <Ionicons style={{color:myColor}} name="md-arrow-back" size={32} onPress={()=>{props.navigation.goBack()}}/>
                <TextInput
                    style={{width:"70%",backgroundColor:"#e6e6e6"}}
                    value={value}
                    onChange={(text)=>setValue(text)} />
                <Ionicons style={{color:myColor}} name="md-send" size={32} onPress={()=>fetchData()}/>
            </View>
            {loading ?<ActivityIndicator style={{marginTop:10}} size="large" color="red"/>:
            <FlatList 
                data={MiniCardData}
                renderItem={({item})=>{
                    return <MiniCard
                        videoId={item.id.videoId}
                        title={item.snippet.title}
                        channel={item.snippet.channelTitle}
                />}}
                keyExtractor={item=>item.id.videoId}/>}
        </View>
    )
}

export default SearchScreen;

//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyCRNyC_oIpKTV3tkRXYnxRgFtOAilvgW8Y 
// AIzaSyBjfMIxNfKqOAE86oHSHOPSTSHRh_7Nrdc


