import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import normalize from 'react-native-normalize';

export default function ItemPatients({data,renderItem,keyExtractor}) {
  return (
    <View>
      <FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
      <Text>123</Text>
    </View>
   
  );
}
