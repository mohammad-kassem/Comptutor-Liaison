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
        marginVertical: 30
    },

    inputTitle: {
        fontSize: 18,
        marginBottom: 5
    },

    input: {
        borderBottomWidth: 1,
        marginBottom: 20,
        padding: 0,
        textAlignVertical: 'bottom',
        alignItems:"flex-start",
        fontSize: 16,
    },

    buttonContainer: {
        marginTop: 195,
        marginHorizontal: "-8%",
    }
})