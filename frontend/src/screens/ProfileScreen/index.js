import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { useUser } from "../../Context/User";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { setToken } from "../../components/utility/Token";
import { pickImage } from "./controller";

export default function ProfileScreen() {
  const { user, setUser } = useUser();
  const [image, setImage] = useState(user.profile_image);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => pickImage(setImage, user)}
      >
        {image ? (
          <Image style={styles.profile} source={{ uri: image }} />
        ) : (
          <Image
            style={styles.profile}
            source={require("../../../assets/logo.png")}
          />
        )}
        <Icon name="camera" style={styles.cameraIcon} />
      </TouchableOpacity>
      <Text style={styles.name}>
        {user.fname} {user.lname}
      </Text>
      {/* {user.role_id === 1 && <View style={styles.balanceContainer}>
                <Text style={styles.balance}>Balance</Text>
                <Text style={styles.balance}>$50</Text>
            </View>} */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate("EditProfileStack")}
        >
          <Text style={styles.editButonText}>Edit</Text>
          <Icon name="account-edit" style={styles.editIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={async () => {
            setUser({});
            await setToken("");
          }}
        >
          <Text style={styles.logoutButonText}>Logout</Text>
          <Icon name="logout" style={styles.logoutIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
