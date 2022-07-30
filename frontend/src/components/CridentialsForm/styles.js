import { StyleSheet } from "react-native";

export default StyleSheet.create({
    // container:{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "stretch",
    //     backgroundColor: "#f5f5f5",
    // },

    imageContainer: {
        width: 130,
        height: 130, 
        marginVertical: "10%",
        alignSelf: "center"
    },

    logo: {
        flex: 1,
        width: undefined,
        height: undefined,
        borderRadius: 100
    },

    profile:{
        flex: 1,
        width: undefined,
        height: undefined,
        borderRadius: 100
    },

    profileIcon:{
        backgroundColor: "#bfbfbf",
        height: "100%",
        borderRadius: 100,
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 110,
        color: "white"
    },

    icon: {
        fontSize: 26,
        color:"#4FC7E6",
        position: "absolute",
        right: 5,
        bottom: 5,
        backgroundColor: "white",
        borderRadius: 25,
        padding: 5
    },

    messageContainer:{
        alignSelf: "center",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 60,
        marginTop: 30,
        marginBottom: 20
    },

    messageTitle:{
        fontSize: 30,
        fontWeight: "bold",
        paddingBottom: 15
    },

    messageContent:{
        fontSize: 18,
        textAlign: "center",
    },

    input:{
        backgroundColor: "#ffff",
        height: 55,
        marginHorizontal: 25,
        marginTop: 20,
        padding: 15,
        borderRadius: 50
    },

    loginButtonConatiner: {
        marginHorizontal: 25,
        marginTop: 90,
        marginBottom: 20

    },

    registerButtonConatiner: {
        marginHorizontal: 25,
        marginTop: 50,
        marginBottom: 20

    },

    fullWidthButton:{
        backgroundColor: "#1877F2",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 30,
        marginVertical: 10,
        padding: 15,
        borderRadius: 10
    },

    fullWidthButtonText:{
        fontSize: 16,
        fontWeight: '500',
        color: "white",
    },

    navigationMessage:{
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center"
    },

    navigationLink:{
        color: "#4FC7E6"
    },

    link: {
        backgroundColor: "white"
    },

    checkboxContainer:{
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 30,
        marginTop: 20,
    },

    isTutorMessage: {
        fontSize: 16,
        marginLeft: 15,
    }

})