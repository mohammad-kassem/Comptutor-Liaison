import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import styles from './styles'
import { useUser } from '../../Context/User';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { deleteDegree, deleteSubject } from './controller';



export default function EditProfileScreen() {
    const {user, setUser} = useUser()
    const [degrees, setDegrees] = useState(user.degrees)
    const [subjects, setSubjects] = useState(user.subjects)
    navigation = useNavigation()

    return (
        <>  
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Edit profile</Text>
                <View style={styles.infoContainer}>
                    <Text style={styles.category}>Info</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate("EditProfileStack", { screen: "EditInfoScreen"},)}>
                        <Icon name="pen" size={30} color="#1877F2"/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.fieldTitle}>First name</Text>
                <Text style={styles.field}>{user.fname}</Text>
                <Text style={styles.fieldTitle}>Last name</Text>
                <Text style={styles.field}>{user.lname}</Text>
                {user.role_id === 2 && 
                <>
                <Text style={styles.fieldTitle}>Rate</Text>
                <Text style={styles.field}>{user.rate}</Text>
                <Text style={styles.fieldTitle}>Teaching since</Text>
                <Text style={styles.field}>{user.since}</Text>
                <Text style={styles.fieldTitle}>About</Text>
                <Text style={styles.about} multiline={true}>{user.about}</Text>  
                <View style={styles.infoContainer}>
                    <Text style={styles.category}>Degrees</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate( "EditDegreeScreen", { user: user, stackType: "EditProfile", setDegrees: setDegrees })}>
                        <Icon name="pen" size={30} color="#1877F2"/>
                    </TouchableOpacity>
                </View>
                </>}
                    {degrees.map((degree)=>{return(
                        <View style={styles.infoContainer}>
                        <Text style={styles.category}>{degree.university} - {degree.degree}</Text>
                        <TouchableOpacity onPress={()=>deleteDegree(degree.id, degrees, setDegrees, user, setUser)}>
                            <Icon name="delete" size={24} color="#1877F2"/>
                        </TouchableOpacity>
                        </View>
                    )}
                )} 
                
                <View style={styles.infoContainer}>
                    <Text style={styles.category}>Subjects</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate("EditSubjectsScreen", { user: user, stackType: "EditProfile", setUserSubjects: setSubjects })}>
                        <Icon name="pen" size={30} color="#1877F2"/>
                    </TouchableOpacity>
                </View>
                    {subjects.map((subject)=>{return(
                        <>
                        <View style={styles.subjectCard}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.subjectImage} source={{uri:subject.image,}}/>
                            </View>
                            <Text style={styles.name}>{subject.subject}</Text>
                            <TouchableOpacity onPress={()=>deleteSubject(subject.id, subjects, setSubjects, user, setUser)}>
                                <Icon name="delete" size={24} color="#1877F2"/>
                            </TouchableOpacity>
                        </View> 
                        </>                      
                    )})}
                </View>
            </ScrollView>
        </>   
    )
}