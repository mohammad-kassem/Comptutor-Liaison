import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import Container from "../../components/Container";
import { sendEmail, verifyEmail } from "./controller";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useUserOnBoarding } from "../../Context/UserOnBoarding";

export default function VerificationScreen() {
  const { userOnBoarding, setUserOnBoarding } = useUserOnBoarding();
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: 4 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <KeyboardAvoidingView keyboardVerticalOffset={-250} behavior="padding">
          <ScrollView>
            <View style={styles.imageContainer}>
              <Image
                style={styles.logo}
                source={require("../../../assets/mail.png")}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.title}>Email Verification</Text>
            <Text style={styles.message}>
              Please verify your email by entering the verification code sent to{" "}
              {userOnBoarding.email}
            </Text>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={(enteredText) => {
                setValue(enteredText);
                verifyEmail(enteredText, setUserOnBoarding, navigation);
              }}
              cellCount={4}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({ index, symbol, isFocused }) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}
                >
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
            <View style={styles.resendMessage}>
              <Text>Didn't recieve the email?</Text>
              <TouchableOpacity>
                <Text style={styles.resendLink} onPress={() => sendEmail()}>
                  {" "}
                  Resend
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Container>
    </>
  );
}
