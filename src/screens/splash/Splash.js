import React from "react";
import { Image, StyleSheet, View } from "react-native";
import normalize from "react-native-normalize";
import { colors } from "../../theme/color";

export default function Splash({navigation}){
    // const url_image =require('@assets/images/doctor_background.png');
    setTimeout(() =>navigation.navigate('login'),1000);
    const url = require('../../assets/images/doctor_backgroup.png');
    return(
        <View style={styles.container}>
            <Image style={styles.img} source={url}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.BLUE,
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        width:normalize(300),
        height:normalize(300),
    }
})