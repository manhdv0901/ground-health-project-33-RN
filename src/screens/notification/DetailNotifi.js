import React from 'react'
import { View, Text } from 'react-native'
import {notifiStyle as styles} from '../../theme/notifi.style';

export default function DetailNotifi() {
    return (
        <View style={styles.container}>
            <View style={styles.itemDetail}>
                <View>
                <Text style={styles.txtNameDetail}>Nguyễn Văn Anh</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.room}>Phòng01</Text>
                <Text style={styles.room}>Nhiệt độ cơ thể cao</Text>
            </View>
            <Text style={styles.room}>Chuẩn đoán của hội đồng</Text>
            <Text style={styles.room}>Thuốc điều trị</Text>
            <Text style={styles.txt}>Thuốc hạ sốt</Text>
            <Text style={styles.room}>Liều lượng và cách dùng</Text>
            <Text style={styles.txt}>Ngày 2 lần mỗi lần 2 viên</Text>
            </View>
        </View>
    )
}
