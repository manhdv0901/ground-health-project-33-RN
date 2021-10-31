import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import normalize from 'react-native-normalize';
import  Icon  from 'react-native-vector-icons/Fontisto'
import {IconFoundation} from 'react-native-vector-icons/Foundation'

export default function IconFontisto({name,size}) {
    return (
        <View>
            <Icon name={name} size={size}/>
        </View>
    )
}

