import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch",
        backgroundColor: "#f5f5f5",
        paddingVertical: 25,
        paddingHorizontal: 35
    },

    title: {
        fontSize: 24,
        fontWeight: "700",
        lineHeight: 29,
        marginBottom: 25,
    },

    subjectsContainer:{
        justifyContent: "space-between",
        marginTop: 30,
    },

    imageContainer: {
        width: 120,
        height: 120, 
        marginRight: 15,
    },

    subjectImage: {
        flex: 1,
        width: undefined,
        height: undefined,
        borderRadius: 20
    },

    icon: {
        position: "absolute",
        top: "5%",
        right: "5%",
    },

    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
})