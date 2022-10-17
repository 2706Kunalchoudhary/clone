import React from "react"
import { View, Text, SafeAreaView, ScrollView } from "react-native"
import Header from "../component/home/Header"
import Post from "../component/home/Post"
import Stories from "../component/home/Stories"
import { POSTS } from "../data/post"
import BT from "../component/home/BT"
export default function Instahome() {

  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
      <Stories />
      <View style={{width:"100%",alignSelf:"center",borderWidth:0.2,borderColor:"grey"}}/>
      
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />

        ))}

      </ScrollView>
      
     <BT/>

    </SafeAreaView>

  )
}