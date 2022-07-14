import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        margin: 30,
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

    name: {
        fontSize: 28,
        fontWeight: "600",
        lineHeight: 34,
        marginTop: 25,
    },
})