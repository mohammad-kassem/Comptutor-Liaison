import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#f5f5f5",
        position: "relative"
    },

    scrollContainer:{
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "stretch",
    },

    imageContainer: {
        width: "100%",
        height: 240,
    },

    tutorProfile: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: "stretch",
    },

})