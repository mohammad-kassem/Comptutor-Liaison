import { StyleSheet } from "react-native";

export default StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "700",
        lineHeight: 29,
        marginVertical: 25,
        alignSelf: "center"
    },

    appointmentCard: {
        padding: 20,
        marginVertical: 15,
        marginHorizontal: 25,
        borderRadius: 20,
        backgroundColor: "white",
        elevation: 10,
        alignSelf: "stretch",
        height: 100,
        justifyContent: "space-between",
        alignItems: "center"
    },

    date:{
        fontSize: 20,
        fontWeight: "500",
        lineHeight: 22,
        textAlign: "center",
        letterSpacing: 5
    },

    appointmentWith:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    imageContainer: {
        width: 24,
        height: 24, 
        marginHorizontal: 5    
    },

    profile: {
        flex: 1,
        width: undefined,
        height: undefined,
        borderRadius: 50
    },

    details: {
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 22,
        textAlign: "center"
    },

    sheetText:{
        fontSize: 24,
        fontWeight: "500",
        textAlign: "center",
        marginTop: 15
    },

    cancel:{
        backgroundColor: "#e0474c",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        borderRadius: 20,
        margin: 30,
        marginTop: 0
        
    },

    go:{
        backgroundColor: "#C7E9F1",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        borderRadius: 20,
        margin: 30,
    },

    disabled:{
        backgroundColor: "#bfbfbf",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        borderRadius: 20,
        margin: 30,
    },

    cancelText: {
        fontSize: 16,
        fontWeight: '500',
        color: "white",
    },

    goText: {
        fontSize: 16,
        fontWeight: '500',
        color: "#1877F2",
    },

    disabledText:{
        color: "white"
    },

})