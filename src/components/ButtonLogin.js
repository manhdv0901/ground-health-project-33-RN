import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import normalize from 'react-native-normalize';
import { colors } from '../theme/color';
import { max_width } from '../theme/headerLogin.style';

export default function ButtonLogin ({onPress,title}) {
    return (
        <TouchableOpacity style={styles.container}
        onPress={onPress}>
            <Text style={styles.txt}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:normalize(40),
        backgroundColor: colors.BLUE_LIGHT,
        width: max_width * 0.80,
        alignSelf:'center',
        borderRadius:normalize(10),
    },
    txt:{
        textAlign:'center',
        fontSize:22,
        color: colors.WHITE,
        padding:20,
    }
});
