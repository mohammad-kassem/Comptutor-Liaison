import { View, Text, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field'
import Container from '../../components/Container';
import { useUser } from '../../Context/User';
import { sendEmail, verifyEmail } from './controller';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function VerificationScreen() {
    const [value, setValue] = useState("");
    const ref = useBlurOnFulfill({value, cellCount: 4});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({value,setValue});
    const {user, setUser} = useUser()
    const navigation = useNavigation()

    return (
    <>
    <Container>
        <KeyboardAvoidingView keyboardVerticalOffset={-250} behavior='padding'>
        <ScrollView>
        <View style={styles.imageContainer}>
            <Image style={styles.logo} source={require('../../../assets/mail.png')} resizeMode="cover"/>
        </View>
            </ScrollView>
            </KeyboardAvoidingView>
        </Container>
      </>
  )
}