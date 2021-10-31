import React from 'react'
import { View, Text } from 'react-native'
import  Icon  from 'react-native-vector-icons/Foundation'
export default function IconFoundation({name, size}) {
    return (
        <View>
            <Icon name ={name} size={size}/>
        </View>
    )
}
