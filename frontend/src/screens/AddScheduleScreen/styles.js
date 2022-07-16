import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch",
        backgroundColor: "#f5f5f5",
        paddingVertical: 25,
        paddingHorizontal: "10%"
    },

    sectionPrompt: {
        fontSize: 20,
        fontWeight: "500",
        marginBottom: 15
    },

    title: {
        fontSize: 20,
        marginBottom: 5
    },

    field: {
        borderBottomWidth: 1,
        marginBottom: 20,
        padding: 0,
        textAlignVertical: 'bottom',
        alignItems:"flex-start",
        fontSize: 20
    },

    fieldText: {
        fontSize: 20
    }
})