import { StyleSheet } from "react-native";

export default StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "700",
        lineHeight: 29,
        marginBottom: 25,
        marginTop: 50,
        marginHorizontal: 25
    },

    roomContainer: {
        backgroundColor: "white",
    },


    room: {
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 25,
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#656565",
    },

    imageContainer: {
        width: 62,
        height: 62, 
        marginRight: 15    
    },

    profile: {
        flex: 1,
        width: undefined,
        height: undefined,
        borderRadius: 50
    },


    contact: {
        fontSize: 20,
        fontWeight: "600",
        color: "#1877F2",
    },

    message: {
        color: "#656565",
    }
})