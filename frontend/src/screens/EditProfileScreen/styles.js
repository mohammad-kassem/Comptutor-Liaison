import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch",
        backgroundColor: "#f5f5f5",
        marginTop: 25,
        marginHorizontal: 25
    },

    title: {
        fontSize: 24,
        fontWeight: "700",
        lineHeight: 29,
        marginBottom: 25,
    },

    infoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },

    category: {
        fontSize: 20,
        fontWeight: "500",
        marginBottom: 30
    },

    fieldTitle: {
        fontSize: 18,
        marginBottom: 5
    },

    field: {
        borderBottomWidth: 1,
        marginBottom: 20,
        paddingBottom: 5,
        textAlignVertical: 'bottom',
        alignItems:"flex-start",
        fontSize: 16,
    },

    about: {
        borderBottomWidth: 1,
        marginBottom: 20,
        paddingBottom: 5,
        textAlignVertical: 'top',
        alignItems:"flex-start",
        fontSize: 16,
        height: 60,
    },

    details: {
        fontSize: 16,
        lineHeight: 19,
        color: "#0787F9"
    },

    sheetText:{
        fontSize: 24,
        fontWeight: "500",
        textAlign: "center"
    },

    cancel:{
        backgroundColor: "#FF3142",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        borderRadius: 10,
        margin: 30,
        
    },

    go:{
        backgroundColor: "#1877F2",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        borderRadius: 10,
        margin: 30,
    },

    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: "white",
    },

    subjectCard: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 25,
        borderWidth: 1,
        backgroundColor: "white",
        padding: 15,
    },

    imageContainer: {
        width: 35,
        height: 35, 
        marginRight: 15,
    },

    subjectImage: {
        flex: 1,
        width: undefined,
        height: undefined,
        borderRadius: 24
    },

    deleteButton: {
        borderWidth: 1
    }

})