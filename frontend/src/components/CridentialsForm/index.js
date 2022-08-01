import { View, Text, TextInput, ImageBackground, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/core';
import { ScrollView } from 'react-native-gesture-handler';
import Checkbox from 'expo-checkbox';
import { useUser } from '../../Context/User';
import FullWidthButton from '../FullWidthButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as ImagePicker from 'expo-image-picker';



export default function CridentialsFrom({type, onPressHandler }) {
    const navigation = useNavigation()
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isTutor, setIsTutor] = useState(false)
    const [image, setImage] = useState()
    const {user, setUser} = useUser()
    let size = "80%"

    size = type === 'register' ? "75%" : "90%"

    async function pickImage(){
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          base64: true,
          aspect: [4, 4],
          quality: 1,
        });
        
        if (!result.cancelled) {
            setImage(`data:image/jpg;base64,${result.base64}`);
          }
        };

    return (
    <>  
        <View style={styles.container}>
        <KeyboardAvoidingView keyboardVerticalOffset={-250} behavior='padding'>
        <ScrollView>
        <ImageBackground source={require('../../../assets/background.png')} style={{width: '100%', height: size}} resizeMode="cover">
        {type === 'login' ? 
        <>
        <View style={styles.imageContainer}>
            <Image style={styles.logo} source={require('../../../assets/logo.png')} resizeMode="cover"/>
        </View>
        
        <View style={styles.messageContainer}>
                <Text style={styles.messageTitle}>{type === "login" ? "Hello Again!" : "Hello friend!"}</Text>
                <Text style={styles.messageContent}>{type === "login" ? "Welcome back you've been missed!" : "Welcome to Comptutor"}</Text>
            </View>
        </>
        :
        <>
            <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
            {image ? 
                (<Image style={styles.profile} source={{uri: image}}/>
                ) : (
                    <Icon name="person" style={styles.profileIcon}/>
                )}
                <Icon name="camera-alt" style={styles.cameraIcon}/>
            </TouchableOpacity>
        </>
        }
            {type === "register" && 
            <>
            <TextInput style={styles.input} placeholder="First name" onChangeText={(enteredText)=>{setFname(enteredText)}}/>
            <TextInput style={styles.input} placeholder="Last name" onChangeText={(enteredText)=>{setLname(enteredText)}}/>
            </>
            }
            <TextInput style={styles.input} placeholder="Email" onChangeText={(enteredText)=>{setEmail(enteredText)}}/>
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} onChangeText={(enteredText)=>{setPassword(enteredText)}}/>

            {type === "login" ?
            (<>
            <View style={styles.loginButtonConatiner}>
            <FullWidthButton text="Log In" onHandlePress={()=>onPressHandler({email, password}, setUser, navigation)}/>
            </View>
            <View style={styles.navigationMessage}>
                <Text>Not a member?</Text>
                <TouchableOpacity>
                <Text style={styles.navigationLink} onPress={()=>navigation.navigate("RegisterScreen")}> Register</Text>
                </TouchableOpacity> 
            </View></>) : (
            <>
            <View style={styles.checkboxContainer}>
                <Checkbox
                    disabled={false}
                    value={isTutor}
                    color={"#4FC7E6"}
                    onValueChange={(newValue) => setIsTutor(newValue)}
                />
                <Text style={styles.isTutorMessage}>Register as tutor</Text>
                </View>
                <View style={styles.registerButtonConatiner}>
                <FullWidthButton text="Register" onHandlePress={()=>onPressHandler({fname, lname, email, password, image, is_tutor: isTutor}, navigation)}/>
                </View>
                <View style={styles.navigationMessage}>
                <Text>Already a member?</Text>
                <TouchableOpacity>
                <Text style={styles.navigationLink} onPress={()=>navigation.navigate("LoginScreen")}> Login</Text>
                </TouchableOpacity>
            </View></>)}
            </ImageBackground>

            </ScrollView>
            
        </KeyboardAvoidingView>
        </View>
    </>
    )
}