import React,{Component,useState} from "react"
import { View,Text,SafeAreaView,Image,TouchableOpacity,Modal } from "react-native"
import RBT from "../component/reels/RTB"
export default function Reels(){
    const [modalVisible, setModalVisible] = useState(false)
// export default class Reels extends Component{
//     constructor()
//     {
//         super();
//         this.state={
//             show:false
//         }
//     }
//     render(){
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            {/* <TouchableOpacity onPress={()=>this.setState({show:true})}>
            <Image style={{width:50,height:50}} source={{uri:'https://i.pinimg.com/originals/17/b6/ce/17b6cec812cd4e0e4bb2e2a2e949e68b.jpg'}}/>
            </TouchableOpacity>
            
        <Modal visible={this.state.show} transparent={true}>
            <View style={{flex:1}}>
            <View style={{flex:1}}>
                <TouchableOpacity onPress={()=>this.setState({show:false})}>
                <Image style={{width:"100%",height:"100%"}} source={{uri:'https://i.pinimg.com/originals/17/b6/ce/17b6cec812cd4e0e4bb2e2a2e949e68b.jpg'}}/>
                </TouchableOpacity>
            </View>
            </View>
        </Modal> */}
        
        <TouchableOpacity onPress={()=> setModalVisible(true)}>
        <Image style={{width:50,height:50}} source={{uri:'https://i.pinimg.com/originals/17/b6/ce/17b6cec812cd4e0e4bb2e2a2e949e68b.jpg'}}/>
             </TouchableOpacity>
             <Modal visible={modalVisible} transparent={true}>
             <View style={{flex:1}}>
            <View style={{flex:1}}>
                <TouchableOpacity onPress={()=>setModalVisible(false)}>
                <Image style={{width:"100%",height:"100%"}} source={{uri:'https://i.pinimg.com/originals/17/b6/ce/17b6cec812cd4e0e4bb2e2a2e949e68b.jpg'}}/>
                </TouchableOpacity>
            </View>
            </View>
             </Modal>
        <RBT/>
        </View>
    )
// }
}