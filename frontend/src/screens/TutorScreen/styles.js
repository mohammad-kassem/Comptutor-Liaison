import { StyleSheet } from "react-native";

export default StyleSheet.create({
    scrollContainer:{
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "stretch",
    },

    imageContainer: {
        marginTop: 30,
        width: 100,
        height: 100,
        alignSelf: "center",
    },

    tutorProfile: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: "stretch",
        borderRadius: 100,

    },

    infoContainer: {
        backgroundColor: "#f5f5f5",
        width: "100%",
        justifyContent: "center",
        alignItems: "stretch",
    },

    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    },

    title: {
        paddingVertical: 15,
        paddingHorizontal: 25
    },

    tutorName: {
        fontWeight: "700",
        fontSize: 22,
        textAlign: "center"
    },

    titleContent: {
        fontSize: 18,
        color: "#919090",
        textAlign: "center"
    },

    rateContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },

    rate: {
        fontSize: 22,
        fontWeight: "600",
        color: "#E8A624",
        marginRight: 5
    },

    chat: {
        marginBottom: 15
    },

    infoCard: {
        padding: 15,
    },

    infoTitle: {
        fontSize: 22,
        paddingBottom: 10,
        fontWeight: "500"
    },

    infoText: {
        fontSize: 18,
        lineHeight: 30,
        textAlign: "justify"
    },

    subjectsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center"
    },

    subjectContainer: {
        padding: 10,
        backgroundColor: "#C7E9F1",
        borderRadius: 20,
        width: "30%",
        alignSelf: "center"
    },

    subjectName:{
        textAlign: "center",
        fontSize: 12,
        color: "#1877F2",
        fontWeight: "700",
    },

    blank: {
        marginTop: 45,
        marginBottom: 45
    }
})