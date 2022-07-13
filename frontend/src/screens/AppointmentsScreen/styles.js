import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch",
        backgroundColor: "#f5f5f5",
        paddingVertical: 50,
        paddingHorizontal: "10%"
    },

    title: {
        fontSize: 24,
        fontWeight: "700",
        lineHeight: 29
    },

    appointmentCard: {
        marginTop: 25,
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 10,
        padding: 15,
    },

    date:{
        fontSize: 18,
        fontWeight: "400",
        lineHeight: 22,
        marginBottom: 5
    },

})