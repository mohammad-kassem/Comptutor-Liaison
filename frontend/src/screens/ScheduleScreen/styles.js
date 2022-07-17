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
        lineHeight: 29
    },

    date: {
        fontSize: 20,
        lineHeight: 23,
        fontWeight: "500",
        borderBottomWidth: 1,
        paddingTop: 5,
    },

    timesContainer: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
    },

    timeCardLeft: {
        marginTop: 30,
        width: "50%",
        height: 50,
        justifyContent: "center",
        alignItems: "flex-start",
    },

    timeCardRight: {
        marginTop: 30,
        width: "50%",
        height: 50,
        justifyContent: "center",
        alignItems: "flex-end",

    },

    timeContainer :{
        backgroundColor: "white",
        width: 100,
        height: 50,
        borderRadius: 10,
        elevation: 5,
        justifyContent: "center",
    },

    time: {
        textAlign: "center",
        textAlignVertical: "center"
    },
})