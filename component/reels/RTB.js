import React from "react"
import { View,Text,Image,StyleSheet,TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Instahome from "../../screens/Instahome";
import Feed from "../../screens/Feed";
import Profile from "../../screens/Profile";
// import Reels from "../../screens/Reels";
import Activity from "../../screens/Activity";
export default function RBT(){
    const navigation=useNavigation();
    return(
        <View style={styles.main}>
            <TouchableOpacity onPress={()=> navigation.navigate(Instahome)}>
            <Image style={styles.icon} source={require('../../image/icons8-home-48.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate(Feed)}>
            <Image style={styles.icon} source={require('../../image/icons8-search-30.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={styles.icon} source={require('../../image/icons8-instagram-darkreels.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate(Activity)}>
            <Image style={styles.icon} source={require('../../image/heart.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate(Profile)}>
            <Image style={[styles.icon,{borderRadius:50}]} source={{uri:'https://i.pinimg.com/originals/17/b6/ce/17b6cec812cd4e0e4bb2e2a2e949e68b.jpg'}}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        backgroundColor:"white",
        position:"absolute",
        bottom:0,
        width:"100%"
    },
    icon:{
        width:35,
        height:35,
        resizeMode:"contain"
         },
})