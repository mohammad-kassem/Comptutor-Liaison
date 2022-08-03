import { View, Text } from 'react-native'
import React from 'react'
import * as ImagePicker from 'expo-image-picker';

export async function pickImage(setImage){
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
}