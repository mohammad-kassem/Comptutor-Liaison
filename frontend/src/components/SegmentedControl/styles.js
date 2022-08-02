import { StyleSheet } from "react-native";

export default StyleSheet.create({   
    segmentsContainer: {
        backgroundColor: "white",
        padding: 25,
    },

    segments: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#1877F2",
    },

    activeButton: {
        backgroundColor: "#1877F2",
        padding: 10,
        alignSelf: "stretch",
        flex: 1,
    },

    active: {
        fontSize: 18,
        fontWeight: "600",
        color: "white",
        textAlign: "center",
    },

    inactiveButton: {
        backgroundColor: "white",
        padding: 10,
        flex: 1,
        borderRadius: 10
    },

    inactive: {
        fontSize: 18,
        fontWeight: "600",
        color: "#1877F2",
        textAlign: "center"
    },
})