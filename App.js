import React, { Component } from "react"
import {View, Text, StatusBar, StyleSheet, TouchableOpacity,Image} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Instalogin from "./screens/Instalogin";
import Instahome from "./screens/Instahome";
import LoginHelp from "./screens/LoginHelp";
import Profile from "./screens/Profile";
import Feed from "./screens/Feed";
import Search from "./screens/Search";
import Reels from "./screens/Reels";
import Activity from "./screens/Activity";
import ABT from "./component/activity/ABT";
import BT from "./component/home/BT";
import PBT from "./component/profile/PBT";
import RBT from "./component/reels/RTB";
import SBT from "./component/search/SBT";

export default function App () {
  
  const Stack = createNativeStackNavigator();
  

    return(
      
      <NavigationContainer>
      
       <Stack.Navigator initialRouteName="Instalogin">
        
         <Stack.Screen name="Instalogin" component={Instalogin} options={{headerShown:false}}/>
        <Stack.Screen name="Instahome" component={Instahome} options={{headerShown:false}}/>
        <Stack.Screen name="LoginHelp" component={LoginHelp} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
        <Stack.Screen name="Feed" component={Feed} options={{headerShown:false}}/>
        <Stack.Screen name="Search" component={Search} options={{headerShown:false}}/>
        <Stack.Screen name="Reels" component={Reels} options={{headerShown:false}}/>
        <Stack.Screen name="Activity" component={Activity} options={{headerShown:false}}/>
        <Stack.Screen name="ABT" component={ABT} options={{headerShown:false}}/>
        <Stack.Screen name="BT" component={BT} options={{headerShown:false}}/>
        <Stack.Screen name="PBT" component={PBT} options={{headerShown:false}}/>
        <Stack.Screen name="RBT" component={RBT} options={{headerShown:false}}/>
        <Stack.Screen name="SBT" component={SBT} options={{headerShown:false}}/>
        
        
      </Stack.Navigator>
      
    
      
       </NavigationContainer>
    
    )
  }
