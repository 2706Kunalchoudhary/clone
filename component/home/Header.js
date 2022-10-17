import React from "react"
import { View,Text,Image,StyleSheet,TouchableOpacity, StatusBar } from "react-native"
export default function Header(){
    return(
        <View style={styles.container}>

            <StatusBar
            hidden={false}
            animated={true}
            backgroundColor="black"
            barStyle={"light-content"}

            />
            
            <TouchableOpacity style={{flexDirection:"row",alignItems:"center"}}>
            <Image style={styles.logo} source={require("../../image/Instalogo.png")}/>
            <Image style={{width:15,height:15,tintColor:"black",resizeMode:"contain",marginLeft:2}} source={require("../../image/icons8-chevron-25.png")}/>
            </TouchableOpacity>
           
            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                <Image style={styles.icons} source={require("../../image/icons8-plus-64.png")}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <Image style={styles.icons} source={require("../../image/icons8-messenger-50.png")}/>
                </TouchableOpacity>
                
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        marginHorizontal:20,
        
    
        
        
    
    },
    logo:{
        width:120,
        height:50,
        resizeMode:'contain',
        
       
    },
    iconsContainer:{
        flexDirection:"row",
        
    },
    icons:{
      width:30,
      height:30,
      marginLeft:30,
      resizeMode:"contain",  
    }
})