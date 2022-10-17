import React from "react";
import { View,Text,TextInput,TouchableOpacity,Image,StyleSheet } from "react-native";
export default function LoginHelp(){
    return(
        <View style={{flex:1}}>
            <View style={{width:"100%",height:"10%",flex:0.4}}>
            <Text style={{color:"black",fontSize:25,marginLeft:5,fontWeight:"bold"}}>Login help</Text>
            </View>
            <View style={{flex:2,alignItems:"center"}}>
                <Text style={{color:"black",fontSize:23,fontWeight:"bold",marginBottom:10}}>Find your account</Text>
            
                <Text>Enter your username or email or</Text>
                <Text>phone number linked to your account.</Text>
                <TextInput placeholder="Username, email or phone" style={{borderWidth:2,borderRadius:5,marginTop:60,width:"80%",borderColor:'#d3d3d3'}}></TextInput>
              
                    <TouchableOpacity>
                    <Text style={{ backgroundColor:"#4169e1",color:"#ffffff",width:315,height:45,textAlign:"center",borderRadius:7,textAlignVertical:"center",marginTop:15 }}>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={{color:"#4169e1",marginTop:15}}>Can't reset your password</Text>
                </TouchableOpacity>
                <View style={{flexDirection:"row",marginTop:15}}>
                <View style={{width:"35%",alignSelf:"center",borderWidth:0.2,borderColor:"grey"}}/>
                    <Text style={{marginLeft:10,marginRight:10}}>OR</Text>
                    <View style={{width:"35%",alignSelf:"center",borderWidth:0.2,borderColor:"grey"}}/>
                    </View>
                    <TouchableOpacity>
                    <Text style={{ backgroundColor:"#d3d3d3",color:"black",width:315,height:45,textAlign:"center",borderRadius:7,textAlignVertical:"center",marginTop:15,fontWeight:"bold",fontSize:15 }}>Log in with Facebook</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}
