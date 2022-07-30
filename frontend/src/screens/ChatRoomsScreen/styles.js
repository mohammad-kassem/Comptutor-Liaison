import { StyleSheet } from "react-native";

export default StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "700",
        lineHeight: 29,
        alignSelf: "center",
        margin: 25
    },

    room: {
        backgroundColor: "white",
        flexDirection: "row",
        marginBottom: 20,
        marginHorizontal: 25,
        padding: 15,
        alignItems: "center",
        borderRadius: 20,
        elevation: 10
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

    content:{
        width: "70%"
    },

    time: {
        color: "#E8A624",
        fontSize: 12,
        textAlignVertical: "center",
        alignSelf: "flex-end",
        fontWeight: "500"

    },

    header:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    
    contact: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 10,
        includeFontPadding: false
    },

    message: {
        color: "#919090",
        fontSize: 16,
        marginBottom: 15
    },
})