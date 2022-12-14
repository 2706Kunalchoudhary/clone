import React, { useState } from "react"
import { View,Text,ScrollView,Image,StyleSheet,TouchableOpacity } from "react-native"

const postFooterIcons =[
    {
        name: 'Like',
        imageurl: 'https://img.icons8.com/ios/344/like--v1.png',
        likeImageUrl: 'https://img.icons8.com/emoji/344/heart-suit.png',
    },
    {
        name: 'Comment',
        imageurl: 'https://img.icons8.com/external-others-inmotus-design/344/external-Comment-basic-elements-others-inmotus-design.png',
    },
    {
        name: 'Share',
        imageurl: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/344/external-send-instagram-flatart-icons-outline-flatarticons.png',

    },
    {
        name: 'Save',
        imageurl: 'https://img.icons8.com/material-outlined/344/bookmark-ribbon--v1.png',
        likeImageUrl:'https://img.icons8.com/material-sharp/344/bookmark-ribbon--v1.png' 
    }
]

export default function Post({post}){
      
    return(
        <View style={{marginBottom:30}}>
            
           <PostHeader post={post}/>
           <PostImage post={post}/>
           <View style={{marginHorizontal:15,marginTop:10}}>
           <PostFooter post={post}/>
           </View>
           <Likes post={post}/>
           <Caption post={post}/>
           <CommentSection post={post}/>
        </View>
    )
}

const PostHeader = ({post}) => (
    <View style={{flexDirection:"row",justifyContent:"space-between",margin:5,alignItems:"center"}}>
        <View style={{flexDirection:"row",alignItems:"center"}}>
          <Image source={{uri: post.profile_picture}} style={styles.story}/>
          <Text style={{margin:5,color:"black",fontWeight:"bold"}}>{post.user}</Text>
        </View>
        <Text style={{fontWeight:'900',color:"black",transform:[{rotate:"90deg"}]}}>...</Text>
    </View>
)

const PostImage = ({post}) => (
    <View style={{width:"100%",height:450}}>
       <Image source={{uri:post.imageurl}} style={{height:'100%',resizeMode:"cover"}}/>
    </View>
)

const PostFooter = () => (

    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <View style={styles.leftFooterIconsContainer}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageurl} />
      <Icon imgStyle={[styles.footerIcon]} imgUrl={postFooterIcons[1].imageurl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageurl} />
      </View>
      <View>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageurl} />
      </View>
      </View>
)

   const Icon = ({imgStyle, imgUrl}) => (
    
    <TouchableOpacity>
        <Image style={imgStyle} source={{uri: imgUrl}}/>
        
    </TouchableOpacity>
   )
    const Likes = ({post}) => (
    <View>
        <Text style={{fontWeight:"bold",color:"black",marginLeft:15}}>{post.likes + " likes"}</Text>
        </View>
        )
        const Caption = ({post}) => (
        <View style={{flexDirection:"row",marginLeft:15}}>
        <Text style={{color:"black",fontWeight:"bold"}}>{post.user}</Text>
        <Text style={{marginLeft:5,color:"black"}}>{post.caption}</Text>
        </View>
        )
        const CommentSection =({post}) => (
        <View style={{marginLeft:15,marginBottom:30}}>
            {post.comments.length > 0 && (
            <TouchableOpacity>
                <Text>View{post.comments.length > 1 ? ' all' : ''} {post.comments.length}{' '}
                {post.comments.length > 1 ? 'comments' : 'comment'}
            
                </Text>
            </TouchableOpacity>
            )}
        </View>
        )

const styles = StyleSheet.create({
    story:{
      width:35,
      height:35,
      borderRadius: 50,
      marginLeft:6,
      borderWidth:1.6,
      borderColor:"red",
    },
    footerIcon:{
        width:33,
        height:33,
    },
    leftFooterIconsContainer:{
        flexDirection:"row",
        width:"32%",
        justifyContent:"space-between"
    }
})