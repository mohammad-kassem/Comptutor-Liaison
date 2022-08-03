import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        margin: 35,
    },

    imageContainer: {
        marginTop: 75,
        width: 150,
        height: 150,
    },

    profile: {
        flex: 1,
        width: undefined,
        height: undefined,
        borderRadius: 150
    },

    cameraIcon: {
        fontSize: 26,
        color:"#4FC7E6",
        position: "absolute",
        right: 5,
        bottom: 5,
        backgroundColor: "white",
        borderRadius: 25,
        padding: 5
    },

    name: {
        fontSize: 28,
        fontWeight: "600",
        lineHeight: 34,
        marginVertical: 25,
    },

    balanceContainer:{
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 20,
        alignSelf: "stretch",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 25,
        aspectRatio: 4.75,
        elevation: 10,
    },

    balance: {
        fontSize: 16,
        fontWeight: "700",
    },

    buttonContainer: {
        flexDirection: "row",
        marginTop: 25,
    },

    editButton :{
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#C7E9F1",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 20,
        marginRight: 25,
        paddingHorizontal: 15,
        aspectRatio: 3,
    },

    editIcon: {
        fontSize: 24, 
        color: "#1877F2"
    },

    logoutButton :{
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#e0474c",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 20,
        paddingHorizontal: 15,
        aspectRatio: 3,
    },

    logoutIcon: {
        fontSize: 24,
        color: "white"
    },

    editButonText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#1877F2"
    },

    logoutButonText: {
        fontSize: 16,
        fontWeight: "500",
        color: "white"
    }

})