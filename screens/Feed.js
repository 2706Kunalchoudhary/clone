import React from "react"
import {View,Text,TouchableOpacity,StyleSheet,Image,ScrollView,SafeAreaView,StatusBar} from "react-native"
import SBT from "../component/search/SBT"
import Search from "./Search"
export default function Feed({navigation}){
    function handleNavigation(screenName){
        navigation.navigate(screenName)
    }
    return(
      <SafeAreaView style={{flex:1}}>
        <StatusBar
            hidden={false}
            animated={true}
            backgroundColor="black"
            barStyle={"light-content"}

            />
        <ScrollView>
        <View style={{alignItems:"center",justifyContent:"center"}}>
            <TouchableOpacity onPress={()=>{handleNavigation(Search)}}>
            <Text style={styles.textinput}>  <Image style={styles.image} source={require("../image/icons8-search-30.png")}/>   Search</Text>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row",flexWrap:"wrap"}}>
                <Image style={styles.box} source={require("../image/virat.jpg")}/>
                <Image style={styles.box} source={{uri:'https://container-news.com/wp-content/uploads/2021/04/Picture-1-1024x683.jpg'}}/>
                <Image style={styles.box} source={{uri:'https://images.news18.com/ibnlive/uploads/2022/06/solo-travel-16560450913x2.png?impolicy=website&width=510&height=356'}}/>
                <Image style={styles.box} source={{uri:'https://www.gamespot.com/a/uploads/scale_super/171/1712892/3383309-anthony-bourdain-parts-unknown.jpg'}}/>
                <Image style={styles.box} source={{uri:'https://i.pinimg.com/564x/30/71/5e/30715ed115f3a0dda40fe120b1c8be7e.jpg'}}/>
                <Image style={styles.box} source={{uri:'https://i.pinimg.com/564x/9a/9a/e4/9a9ae404c951816e2205e73cc9a72024.jpg'}}/>
                <Image style={styles.box} source={{uri:'https://dvyvvujm9h0uq.cloudfront.net/com/articles/1593544514-899073-viktor-juric-yhgwqxukabs-unsplashjpg.jpg'}}/>
                <Image style={styles.box} source={{uri:'https://i.pinimg.com/564x/ad/ea/a1/adeaa1d253aa4b4f103f88aec77bb0eb.jpg'}}/>
                <Image style={styles.box} source={{uri:'https://i.pinimg.com/564x/e3/fe/39/e3fe3913712955ba7cef98f73ddd0039.jpg'}}/>
                <Image style={styles.box} source={{uri:'https://i.pinimg.com/564x/b8/6c/a1/b86ca13d887764e51df4b45183dbc0a6.jpg'}}/>
                <Image style={styles.box} source={{uri:'https://i.pinimg.com/564x/e2/e5/c2/e2e5c2d4046cd7551d440bde99bf8c84.jpg'}}/>
                <Image style={styles.box} source={{uri:'https://i.pinimg.com/564x/20/d6/c8/20d6c85dda4c826847406b1beef9fcb8.jpg'}}/>
                <Image style={styles.box} source={{uri:'https://i.pinimg.com/474x/d4/f3/a8/d4f3a81c9fb30a9a46b320585b9da19e.jpg'}}/>
                <Image style={styles.box} source={{uri:'https://i.pinimg.com/564x/73/89/d5/7389d5247ea6cd6ee5ede34146fe98da.jpg'}}/>
                <Image style={styles.box} source={{uri:'https://i.pinimg.com/564x/5a/c7/7d/5ac77d4e4da2c2028759fb7f08b44b1e.jpg'}}/>
                <Image style={styles.box} source={{uri:'https://i.pinimg.com/474x/bf/22/46/bf22467abcc7ee96400a0e8d098fd276.jpg'}}/>
                <Image style={styles.box} source={{uri:'https://i.pinimg.com/564x/a4/cf/cd/a4cfcdfea64aa6a68dcb416deb77ad95.jpg'}}/>
                <Image style={styles.box} source={{uri:'https://i.pinimg.com/564x/8f/9a/9c/8f9a9ca8f192348193a8ae3f2870e5ec.jpg'}}/>
                <Image style={styles.box} source={{uri:'https://i.pinimg.com/564x/35/39/7f/35397f433c699400e42a353841218874.jpg'}}/>
                <Image style={styles.box} source={{uri:'https://i.pinimg.com/564x/a2/b0/11/a2b011df9fe12211696723605a1d1183.jpg'}}/>
                <Image style={styles.box} source={{uri:'https://i.pinimg.com/564x/4f/05/76/4f0576f9f58d1c215a11f3ebe5b29ac3.jpg'}}/>
                <Image style={styles.box} source={{uri:'https://i.pinimg.com/564x/a5/b3/d1/a5b3d1106397fe99f58c4f3c8d23ee74.jpg'}}/>
                <Image style={styles.box} source={{uri:'https://i.pinimg.com/564x/93/0f/d7/930fd702382eb3564e7ee9556de14c51.jpg'}}/>
                <Image style={styles.box} source={{uri:'https://i.pinimg.com/564x/a6/fc/1b/a6fc1b5d111efafdf9eed1f4e3c00a3f.jpg'}}/>
                
            </View>
            
            </ScrollView>
            <SBT />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  textinput:{
      borderWidth:1,
      borderColor:'#d3d3d3',
      borderRadius:10,
      width:370,
      marginHorizontal:10,
      marginLeft:10,
      height:40,
      backgroundColor:"#d3d3d3",
      textAlignVertical:"center",
      
      
      
  },
  container:{
    // width:"100%",
    // height:"90%",
    padding:5,
    flexDirection:"row",
    flexWrap:"wrap",
    flex:1,
    // backgroundColor:"yellow"
},
box:{
    width:"32.824%",
    height:120,
    marginRight:2,
    marginTop:2,
    // resizeMode:"contain"
    
},
inner:{
    flex:1,
    backgroundColor:'yellow',
    alignItems:"center",
    justifyContent:"center"
},
})
