import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

export default function SaveCancelButtons({ onHandlePress }) {
    const navigation = useNavigation()
  return (
    <>
    <TouchableOpacity style={styles.saveButton}onPress={onHandlePress}><Text style={styles.saveButtonText}>Save</Text></TouchableOpacity>
    <TouchableOpacity style={styles.cancelButton} onPress={()=>navigation.goBack()}><Text style={styles.cancelButtonText}>Cancel</Text></TouchableOpacity>
    </>
  )
}