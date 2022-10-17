import React from "react"
import { View,Text,SafeAreaView,ScrollView,StatusBar,Image,StyleSheet } from "react-native"
import ABT from "../component/activity/ABT"
export default function Activity(){
    return(
        <SafeAreaView style={{flex:1}}>
            <StatusBar
            hidden={false}
            animated={true}
            backgroundColor="black"
            barStyle={"light-content"}

            />
        <View style={styles.main}>
            <Text style={styles.mainText}>Notifications</Text>
            </View>
        <View style={{width:"100%",alignSelf:"center",borderWidth:0.2,borderColor:"grey"}}/>
        <ScrollView>
        <View style={{width:"100%",height:150}}>
            <Text style={styles.text}>This Month</Text>
            <View style={{flexDirection:"row"}}>
            <Image style={styles.dp} source={{uri:'https://i.pinimg.com/originals/f0/20/db/f020db0277a4759bdbe67df6911d0b01.jpg'}}/>
            <Text style={{textAlignVertical:"center",marginLeft:5,color:"black",fontWeight:"bold"}}>rajeevjha74, </Text>
            <Text style={{textAlignVertical:"center"}}>who you might know, is on Instagram</Text>
            </View>
        </View>
        <View style={{width:"100%",height:150}}>
            <Text style={styles.text}>Earlier</Text>
        </View>
        <View style={{width:"100%",height:500}}>
            <Text style={styles.text}>Suggestions for you</Text>
        </View>
        </ScrollView>
        <ABT/>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    main:{
        width:"100%",
        height:50,
        justifyContent:"center"
    },
    mainText:{
        marginLeft:5,
        fontSize:30,
        color:"black",
        fontWeight:"bold"
    },
    dp:{
        borderRadius:60,
        height:50,
        width:50,
        resizeMode:"contain",
        marginTop:5,
        marginLeft:5
        },
        text:{
            marginLeft:5,
            fontWeight:"bold"
        }
})