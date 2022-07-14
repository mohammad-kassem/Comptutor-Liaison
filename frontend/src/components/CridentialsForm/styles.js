import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "#f5f5f5",
        marginVertical: "25%"
    },

    messageContainer:{
        alignSelf: "center",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 60,
        paddingBottom: 40,
    },

    messageTitle:{
        fontSize: 30,
        fontWeight: "bold",
        paddingBottom: 15
    },

    messageContent:{
        fontSize: 24,
        textAlign: "center",
    },

    input:{
        backgroundColor: "#ffff",
        height: 55,
        marginHorizontal: 30,
        marginVertical: 10,
        padding: 15,
        borderRadius: 10
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
        color: "#1877F2"
    },

    link: {
        backgroundColor: "white"
    }
})