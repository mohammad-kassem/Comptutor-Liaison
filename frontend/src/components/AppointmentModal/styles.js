    import { StyleSheet } from "react-native";

    export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        },
        
        modal: {
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 20,
        },

        title: {
        marginTop: 30,
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 24,
        },

        content: {
        marginTop: 15,
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 19,
        },

        buttonsContainer: {
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        },

        leftButton:{
        flexDirection: "row",
        flex: 1,
        height: 46,
        },

        confirmButton:{
        backgroundColor: "#1877F2",
        flex: 1,
        borderBottomLeftRadius: 20,
        textAlign: "center",
        textAlignVertical: "center",
        color: "white",
        fontSize: 16,
        fontWeight: "500"
        },

        rightButton:{
        flexDirection: "row",
        flex: 1,
        },

        cancelButton:{
        flex: 1,
        height: 46,
        textAlign: "center",
        textAlignVertical: "center",
        color: "#1877F2",
        fontSize: 16,
        fontWeight: "500"
        },

});