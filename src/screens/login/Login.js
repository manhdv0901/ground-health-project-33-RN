import React from "react";
import { Text, View } from "react-native";
import HeaderLogin from "../../components/HeaderLogin";
import ScrollInput from "../../components/ScrollInput";
import ButtonLogin from '../../components/ButtonLogin'
import { colors } from "../../theme/color";

export default function Login({navigation}){
    return(
        <View style={{flex:1, backgroundColor: colors.WHITE}}>
            <HeaderLogin/>
            <ScrollInput/>
        </View>
    );
}