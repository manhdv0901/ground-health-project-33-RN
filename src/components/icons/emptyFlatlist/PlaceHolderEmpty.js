import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Placeholder, PlaceholderLine, Shine} from 'rn-placeholder';

export default function PlaceholderEmpty() {
  const PlaceholderBox = () => {
    return (
      <Placeholder style={styles.shineBox} Animation={Shine}>
        <PlaceholderLine width={90} height={10} style={styles.shine} />
        <PlaceholderLine width={60} height={10} style={styles.shine} />
        <PlaceholderLine width={90} height={10} style={styles.shine} />
        <PlaceholderLine width={60} height={10} style={styles.shine} />
        <PlaceholderLine width={90} height={10} style={styles.shine} />
      </Placeholder>
    );
  };
  return (
    <View>
      <PlaceholderBox />
      <PlaceholderBox />
      <PlaceholderBox />
      <PlaceholderBox />
      <PlaceholderBox />
      <PlaceholderBox />
    </View>
  );
}
const styles = StyleSheet.create({
  shineBox: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  shine: {
    marginVertical: 2,
    alignSelf: 'center',
  },
});
