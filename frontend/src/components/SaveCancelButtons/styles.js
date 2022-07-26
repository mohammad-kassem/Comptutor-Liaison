
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    saveButton:{
        backgroundColor: "#1877F2",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        borderRadius: 10,
        width: "50%",
        height: 50,
    },

    saveButtonText:{
        fontSize: 16,
        fontWeight: '500',
        color: "white",
    },

    cancelButton:{
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "50%",
    },

    cancelButtonText:{
        flex: 1,
        textAlign: "center",
        textAlignVertical: "center",
        color: "#1877F2",
        fontSize: 16,
        fontWeight: "500"
    },
})