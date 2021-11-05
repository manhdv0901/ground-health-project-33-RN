import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Modal from 'react-native-modalbox';
import Spinner from 'react-native-spinkit';
import { colors } from '../../theme/color';
export default function LoadingModal({visible}) {
    return (
        <Modal style={styles.modal} isOpen={visible} swipeToClose={false}>
            <Spinner isVisible={true} size={60} type="Circle" color={colors.BLUE_LIGHT}/>
        </Modal>
    )
}
const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'transparent'
  },
});

