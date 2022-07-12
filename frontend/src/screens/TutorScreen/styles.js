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

    infoContainer: {
        backgroundColor: "#f5f5f5",
        elevation: 1,
        width: "100%"
    },

    title: {
        paddingVertical: 15,
        paddingHorizontal: 15
    },

    tutorName: {
        fontWeight: "600",
        fontSize: 24
    },

    tutorExperince: {
        fontSize: 18,
        color: "#656565"
    },

    ratesContainer: {
        width: "100%",
        height: 60,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "stretch"
    },

    zoomRate: {
        borderRightColor: "black",
        borderRightWidth: 1,
        textAlignVertical: "center",
        width: "50%",
        textAlign: "center",
        fontSize: 18,
        color: "#1877F2",
        paddingHorizontal: 60,
        lineHeight: 22
    },

    chatRate: {
        textAlignVertical: "center",
        width: "50%",
        textAlign: "center",
        fontSize: 18,
        color: "#1877F2",
        paddingHorizontal: 60,
        lineHeight: 22
    },

})