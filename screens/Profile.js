import React from "react"
import {View,Text,Image,StyleSheet,SafeAreaView,StatusBar,TouchableOpacity,ScrollView} from "react-native"
// import ProfileBTab, {bottomTabIcons} from "../component/profile/ProfileBTab"
import PBT from "../component/profile/PBT"

export default function Profile(){
    return(
        <SafeAreaView  style={{flex:1}}>
            <StatusBar
            hidden={false}
            animated={true}
            backgroundColor="black"
            barStyle={"light-content"}
            />
           
            <ProfileHeader />
            <ScrollView>
            <ProfileDetails />
            <Edit />
            <StoryHighlights />
            
            </ScrollView>
            {/* <ProfileBTab icons={bottomTabIcons}/> */}
            <PBT/>
            
        </SafeAreaView>
    )
}

 const ProfileHeader = () => (
    <View style={styles.container}>
        <TouchableOpacity>
      <Text style={styles.text}>kunalchaudhary_ <Image style={styles.image} source={require("../image/icons8-chevron-25.png")}/></Text>
      </TouchableOpacity>
        <View style={styles.iconsContainer}>
            <TouchableOpacity>
           <Image source={require('../image/icons8-plus-64.png')} style={styles.icons}/>
           </TouchableOpacity>
           <TouchableOpacity>
           <Image source={require('../image/icons8-menu-24.png')} style={styles.icons}/>
           </TouchableOpacity>
        </View>
    </View>
 )
   
     const ProfileDetails = () => (
             <View style={{marginHorizontal:10}}>
             <View style={{marginHorizontal:10,marginTop:25,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <Image source={{uri:'https://i.pinimg.com/originals/17/b6/ce/17b6cec812cd4e0e4bb2e2a2e949e68b.jpg'}}
                style={styles.dp}/>
                <View style={{alignItems:"center"}}>
                    <Text style={{fontSize:20,color:"black",fontWeight:"bold"}}>10</Text>
                <Text style={{fontSize:15}}>Posts</Text>
                </View>
                <View style={{alignItems:"center"}}>
                    <Text style={{fontSize:20,color:"black",fontWeight:"bold"}}>10</Text>
                <Text style={{fontSize:15}}>Followers</Text>
                </View>
                <View style={{alignItems:"center"}}>
                    <Text style={{fontSize:20,color:"black",fontWeight:"bold"}}>10</Text>
                <Text style={{fontSize:15}}>Following</Text>
                </View>
                </View>
                <View>
                <Text style={{tintColor:"black",fontWeight:"bold",fontSize:15,marginTop:2}}>Kunal Chaudhary</Text>
                </View>
             </View>
             
     )

     const Edit = () => (
        <View style={{marginHorizontal:10,marginTop:20,flexDirection:"row",alignItems:"center",}}>
            <TouchableOpacity>
            <Text style={{ backgroundColor:`#d3d3d3`,color:'black',width:330,height:35,textAlign:"center",borderRadius:8,textAlignVertical:"center" }}>Edit profile</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{ backgroundColor:`#d3d3d3`,width:30,height:35,textAlign:"center",borderRadius:8,marginLeft:10,textAlignVertical:"center" }}><Image source={require('../image/icons8-add-user-64.png')} style={{width:20,height:20,resizeMode:"center"}}/></Text>
            </TouchableOpacity>
        </View>
     )

     const StoryHighlights =() => (
        <View>
            <TouchableOpacity style={{marginHorizontal:10,flexDirection:"row",alignItems:"center",marginTop:15,justifyContent:"space-between"}}>
            <Text style={{color:"black",fontWeight:"bold",fontSize:15}}>Story highlights</Text>
            <Image style={styles.image} source={require("../image/icons8-chevron-25.png")}/>
            </TouchableOpacity>
        </View>
     )



 const styles = StyleSheet.create({
    container:{
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        marginHorizontal:10,
        marginTop:5,
        // backgroundColor:"red"
       
    },
    iconsContainer:{
        flexDirection:"row",
        
    },
    icons:{
      width:30,
      height:30,
      marginLeft:30,
      resizeMode:"contain",  
    },
    text:{
        fontSize:20,
        color:"black",
        fontWeight:"bold",

    },
    image:{
        width:15,
        height:15,
        tintColor:"black",
        resizeMode:"contain",
        marginLeft:2
    },
    dp:{
        borderRadius:60,
        height:90,
        width:90,
        resizeMode:"contain",
        
    }
})