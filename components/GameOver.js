import React, { useState } from "react";
import { Button, Image, StyleSheet,Text, View } from "react-native";
import MainButton from "./MainButton";


const GameOver= props=>{
return(
    <View style={styles.screen}>
        <Text>!!Game Over!!</Text>
        <Image  style={styles.image} resizeMode='contain' source={{uri:
              'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg'}}/>
              <MainButton onPress={props.onRestart}>RESTART GAME</MainButton>
    </View>
);
};

const styles=StyleSheet.create({
screen:{
    justifyContent:'center',
    flex:1,
    alignItems:'center'
},
image:{
    width:'80%',
    height:300
}
});

export default GameOver