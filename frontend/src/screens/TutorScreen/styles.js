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

    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    title: {
        paddingVertical: 15,
        paddingHorizontal: 25
    },

    tutorName: {
        fontWeight: "600",
        fontSize: 24
    },

    tutorExperince: {
        fontSize: 18,
        color: "#656565"
    },

    chatting: {
        flexDirection: "row",
        marginHorizontal: 25,
        backgroundColor: "#1877F2",
        padding: 15,
        borderRadius: 15,
    },

    chattingText: {
        paddingLeft: 5,
        fontSize: 14,
        color: "white",
    },

    ratesContainer: {
        width: "100%",
        height: 60,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent: "center",
    },

    videoRate: {
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: 18,
        color: "#1877F2",
        alignSelf: "stretch",
        paddingHorizontal: 60,
        lineHeight: 22,
    },


    infoCard: {
        margin: 15,
        marginHorizontal: 25,
        padding: 15,
        backgroundColor: "white",
        borderRadius: 20,
        elevation: 10,  
    },

    infoTitle: {
        fontSize: 18,
        lineHeight: 22,
        color: "#FF3142",
        paddingBottom: 10,
    },

    infoMain: {
        paddingBottom: 10,
    },

    infoText: {
        fontSize: 18,
        lineHeight: 30,
        textAlign: "justify"
    },

    blank: {
        marginTop: 45,
        marginBottom: 45
    }
})