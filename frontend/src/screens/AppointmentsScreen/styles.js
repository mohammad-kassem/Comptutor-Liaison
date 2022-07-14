import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch",
        backgroundColor: "#f5f5f5",
        marginTop: 50,
    },

    title: {
        fontSize: 24,
        fontWeight: "700",
        lineHeight: 29,
        marginHorizontal: "10%",
        marginBottom: 25,
    },

    appointmentCard: {
        marginBottom: 25,
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 10,
        padding: 15,
        marginHorizontal: "10%"

    },

    date:{
        fontSize: 18,
        fontWeight: "400",
        lineHeight: 22,
        marginBottom: 5
    },

    details: {
        fontSize: 16,
        lineHeight: 19,
        color: "#0787F9"
    },

    sheetText:{
        fontSize: 24,
        fontWeight: "500",
        textAlign: "center"
    },

    cancel:{
        backgroundColor: "#FF3142",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        borderRadius: 10,
        margin: 30,
        
    },

    go:{
        backgroundColor: "#1877F2",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        borderRadius: 10,
        margin: 30,
    },
    }

})