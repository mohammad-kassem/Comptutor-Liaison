import { View, Text, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field'
import Container from '../../components/Container';
import { useUser } from '../../Context/User';
import { sendEmail, verifyEmail } from './controller';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function VerificationScreen({ route }) {
    const user = route.params.user
    const [value, setValue] = useState("");
    const ref = useBlurOnFulfill({value, cellCount: 4});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({value,setValue});
    const navigation = useNavigation()

    return (
    <>
    <Container>
        <KeyboardAvoidingView keyboardVerticalOffset={-250} behavior='padding'>
        <ScrollView>
        <View style={styles.imageContainer}>
            <Image style={styles.logo} source={require('../../../assets/mail.png')} resizeMode="cover"/>
        </View>
        <Text style={styles.title}>Email Verification</Text>
        <Text style={styles.message}>Please verify your email by entering the verification code sent to {user.email}</Text>
        <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={(enteredText) => {setValue(enteredText); verifyEmail(enteredText, user, navigation)}}
            cellCount={4}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
            <Text key={index} style={[styles.cell, isFocused && styles.focusCell]} onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
            )}
        />
        <View style={styles.resendMessage}>
            <Text>Didn't recieve the email?</Text>
            <TouchableOpacity>
                <Text style={styles.resendLink} onPress={()=>sendEmail()}> Resend</Text>
            </TouchableOpacity> 
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
    </Container>
      </>
  )
}