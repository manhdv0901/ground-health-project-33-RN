import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import HeaderLogin from "../../components/HeaderLogin";
import ScrollInput from "../../components/ScrollInput";
import ButtonLogin from '../../components/ButtonLogin'
import { colors } from "../../theme/color";
import LoadingModal from "../../components/loading/LoadingModal";
import {load} from '../redux/reducers/index';


export default function Login(){
    const {isLoad} = useSelector(state => state.load);
    return(
        <View style={{flex:1, backgroundColor: colors.WHITE}}>
            <HeaderLogin/>
            <ScrollInput/>
            <LoadingModal visible={isLoad} /> 
        </View>
    );
}