import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { useUser } from '../../Context/User'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import { setToken } from '../../components/utility/Token'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import { updateImage } from './controller'



export default function ProfileScreen() {

    const { user, setUser } = useUser()
    const [image, setImage] = useState(user.profile_image);

    const navigation = useNavigation()
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
            updateImage(`data:image/jpg;base64,${result.base64}`, user)
          }
        };


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
                {image ? 
                (<Image style={styles.profile} source={{uri: image}}/>
                ) : (
                    <Image style={styles.profile} source={require('../../../assets/logo.png')}/>
                )}
            </TouchableOpacity>
            <Text style={styles.name}>{user.fname} {user.lname}</Text>
            {user.role_id === 1 && <View style={styles.balanceContainer}>
                <Text style={styles.balance}>Balance</Text>
                <Text style={styles.balance}>$50</Text>
            </View>}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.editButton} onPress={()=>navigation.navigate("EditProfileStack")}>
                    <Text style={styles.butonText}>Edit</Text>
                    <Icon name="account-edit" size={24} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutButton} onPress={async ()=>{setUser({}); await setToken("")}}>
                    <Text style={styles.butonText}>Logout</Text>
                    <Icon name="logout" size={24} color="white"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}