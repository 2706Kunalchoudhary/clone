import React from "react"
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native"
import Instahome from "./Instahome"
import LoginHelp from "./LoginHelp"

export default function Instalogin({navigation}) {
    function handleNavigation(screenName){
        navigation.navigate(screenName)
    }
    return (
        

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image style={{ width: 180, height: 50, marginBottom: 20 }}
                source={require("../image/Instalogo.png")}
            />

            <View style={{ alignItems: "center", justifyContent: "center" }}>

                <TextInput placeholder="Phone number, email or username" style={{ borderWidth: 1, borderColor: '#d3d3d3', borderRadius: 5, width: 350 }}></TextInput>
                <TextInput placeholder="Password" secureTextEntry={true} style={{ borderWidth: 1, borderColor: '#d3d3d3', borderRadius: 5, width: 350, marginTop: 15, marginBottom: 15 }}></TextInput>
                <View><TouchableOpacity onPress={()=> handleNavigation(Instahome)}>
                    <Text style={{ backgroundColor: "#4169e1", color: "#ffffff", width: 350, height: 45, textAlign: "center", borderRadius: 5, textAlignVertical: "center" }}>Log in</Text>
                </TouchableOpacity></View>
                <TouchableOpacity onPress={()=> handleNavigation(LoginHelp)}>
                    <Text style={{ marginTop: 15 }}>Forgot your login details? <Text style={{ fontWeight: "bold", color: "#000000" }}>Get help logging in.</Text></Text>
                </TouchableOpacity>
                <View style={{flexDirection:"row",marginTop:15}}>
                <View style={{width:"40%",alignSelf:"center",borderWidth:0.2,borderColor:"grey"}}/>
                    <Text style={{marginLeft:10,marginRight:10}}>OR</Text>
                    <View style={{width:"40%",alignSelf:"center",borderWidth:0.2,borderColor:"grey"}}/>
                    </View>
                <TouchableOpacity>
                    <Text style={{ height: 50, color: "#4169e1", marginTop: 20 }}>
                        <Image style={{ width: 40, height: 30 }} source={require("../image/facebooklogo.png")} />
                        Log in with Facebook</Text>
                </TouchableOpacity>
               
            </View>
            <TouchableOpacity style={{ position: "absolute", bottom: 30 }}>
                    <Text>Don't have an account? <Text style={{ fontWeight: "bold", color: "#000000" }}>Sign up</Text></Text>
                </TouchableOpacity>


        </View>


    )
}