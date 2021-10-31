import React from "react";
import { Image, Text, View } from "react-native";
import { InputLoginStyle as styles } from "../theme/headerLogin.style";


export default function InputLogin(){
    const scr_image = require('../assets/images/login.jpg');
    return(
        <View style={styles.container}>
            <Image style={styles.img} source={scr_image}/>
            <Text style={styles.txt}>Chăm sóc sức khỏe</Text>
        </View>
    );
}