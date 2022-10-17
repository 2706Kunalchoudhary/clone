import React,{useState} from "react"
import { View,Text,ScrollView,Image,StyleSheet,TouchableOpacity,Modal } from "react-native"
import {USERS} from '../../data/Users'
export default function Stories(){
    const [modalVisible, setModalVisible] = useState(false)
    return(
        <View style={{marginBottom:13,flexDirection:"row"}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View>
                    <TouchableOpacity>
            <Image style={styles.story} source={{uri:'https://i.pinimg.com/originals/17/b6/ce/17b6cec812cd4e0e4bb2e2a2e949e68b.jpg'}}/>
            <Text style={{color:'black',marginLeft:6}}>Your story</Text>
            </TouchableOpacity>
            </View>
            {USERS.map((story, index) => (
            <View key={index} style={{alignItems:"center"}}>
                <TouchableOpacity onPress={()=> setModalVisible(true)}>
            <Image source={{uri: story.image}}
            style={styles.story}/>
            <Text style={{color:'black',marginLeft:6}}>{
            story.user.length > 10 ? story.user.slice(0,10).toLowerCase() + '...': story.user.toLowerCase()}</Text>
            </TouchableOpacity>
            </View>
           ))}
            </ScrollView>
            <Modal visible={modalVisible} transparent={true}>
             <View style={{flex:1}}>
            <View style={{flex:1}}>
                <TouchableOpacity onPress={()=>setModalVisible(false)}>
                <Image style={{width:"100%",height:"100%"}} source={{uri:'https://i.pinimg.com/originals/17/b6/ce/17b6cec812cd4e0e4bb2e2a2e949e68b.jpg'}}/>
                </TouchableOpacity>
            </View>
            </View>
             </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    story:{
      width:70,
      height:70,
      borderRadius: 50,
      marginLeft:6,
      borderWidth:3,
      borderColor:"red",
    }
})