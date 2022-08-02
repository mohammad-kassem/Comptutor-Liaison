import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

export default function SegmenetdControl({setType}) {
    return (
        <View style={styles.segmentsContainer}>
            <View style={styles.segments}>
            <TouchableOpacity style={styles.approvedButton} onPress={()=>setType("approved")}>
                <Text style={styles.approved}>Approved</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pendingButton} onPress={()=>setType("pending")}>
                <Text style={styles.pending}>Pending</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}