import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Modal from "react-native-modal";

import styles from './styles'
import { addAppointment } from './controller';

export default function AppointmentModal({ modalIsVisable, setModalIsVisable, time, date, tutor, schedules, setSchedules }) {
  // console.log(date, time)
  return (
      <View style={styles.container}>
         <Modal
            isVisible={modalIsVisable}
            animationType='slide'
            transparent={true}
            backdropOpacity={0.3}
         >
          <View style={styles.modal}>
            <Text style={styles.title}>Confirm appointment</Text>
          </View>
          </Modal>
      </View>
    )
  }
