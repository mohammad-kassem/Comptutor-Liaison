import { StyleSheet } from "react-native";

export default StyleSheet.create({

    title: {
        fontSize: 24,
        fontWeight: "700",
        lineHeight: 29,
        marginTop: 25,
        alignSelf: "center"
    },

    
    infoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },

    category: {
        fontSize: 20,
        fontWeight: "500",
        marginBottom: 15,
    },

    edit: {
        flexDirection: "row",
        alignItems: "center"
    },

    editText:{
        marginRight: 5,
        color: "#4FC7E6"
    },

    penIcon: {
        fontSize: 24, 
        color: "#4FC7E6"
    },

    fieldTitle: {
        fontSize: 16,
        marginBottom: 5,
        color: "#919090",
        fontWeight: "500"
    },

    field: {
        marginBottom: 20,
        paddingBottom: 5,
        textAlignVertical: 'bottom',
        alignItems:"flex-start",
        fontSize: 18,
    },

    about: {
        marginBottom: 20,
        paddingBottom: 5,
        textAlignVertical: 'top',
        alignItems:"flex-start",
        fontSize: 18,
        height: 60,
    },

    degree: {
        marginBottom: 20,
        paddingBottom: 5,
        textAlignVertical: 'bottom',
        alignItems:"flex-start",
        fontSize: 15,
    },


    deleteIcon: {
        alignSelf: "stretch",
        textAlignVertical: "center",
    },

    subjectsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: 5
    },

    subjectContainer:{
        width: 120,
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

    deleteButton:{
        backgroundColor: "#e0474c",
        padding: 5,
        borderRadius: 20,
        marginVertical: 15
    },

    deleteText:{
        color: "white",
        textAlign: "center",
        fontWeight: "500",
        fontSize: 16
    },

})