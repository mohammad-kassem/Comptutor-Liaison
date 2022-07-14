import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        margin: 30,
    },

    imageContainer: {
        marginTop: 75,
        width: 150,
        height: 150,
    },

    profile: {
        flex: 1,
        width: undefined,
        height: undefined,
        borderRadius: 150
    },

    name: {
        fontSize: 28,
        fontWeight: "600",
        lineHeight: 34,
        marginVertical: 25,
    },

    balanceContainer:{
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 20,
        alignSelf: "stretch",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 25,
        aspectRatio: 4.75,
        elevation: 10,
    },

    balance: {
        fontSize: 16,
        fontWeight: "700",
    },

    buttonContainer: {
        flexDirection: "row",
    },

    editButton :{
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#1877F2",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
        marginRight: 25,
        paddingHorizontal: 15,
        aspectRatio: 3,
    },
})