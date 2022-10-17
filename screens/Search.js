import React from "react"
import { View,Text,TextInput,SafeAreaView,StyleSheet,Image,TouchableOpacity } from "react-native"
// import SearchBTab, {bottomTabIcons} from "../component/search/SearchBTab"
import Feed from "./Feed"
// import BT from "../component/home/BT"
export default function Search({navigation}){
    function handleNavigation(screenName){
        navigation.navigate(screenName)
    }
    return(
        <SafeAreaView style={{flex:1,justifyContent:"space-between"}}>
            
            <View style={{alignItems:"center",flexDirection:"row",marginTop:5,justifyContent:"space-around"}}>
                <TouchableOpacity onPress={()=>{handleNavigation(Feed)}}>
                <Image style={{width:30,resizeMode:"contain"}} source={require("../image/icons8-arrow-pointing-left-30.png")}/>
                </TouchableOpacity>
                <TextInput style={styles.textinput} placeholder="Search"></TextInput>
            </View>
            
            {/* <View>
            <SearchBTab icons={bottomTabIcons}/>
            </View> */}
            {/* <View>
            <BT/>
            </View> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textinput:{
        borderWidth:1,
        borderColor:'#d3d3d3',
        borderRadius:10,
        backgroundColor:"#d3d3d3",
        height:40,
        width:320,
       
       
        
        },
    })