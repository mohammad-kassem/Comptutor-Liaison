import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch",
        backgroundColor: "#f5f5f5",
        paddingVertical: 15
    },

    title:{
        justifyContent: "center",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 1,
    },

    titleText: {
        fontSize: 20
    },

    searchBar: {
        backgroundColor: "#ffff",
        flexDirection: "row",
        height: 44,
        marginHorizontal: 25,
        marginTop: 25,
        padding: 15,
        borderRadius: 20,
        elevation: 20,
    },

    searchIcon: {
        color: "#1877F2",
        fontSize: 24,
        margin: -7.5,
        marginRight: 10,
    },

    searchInput: {
        flex: 1,
        textAlignVertical: "center",
    },

    tutorCard: {
        borderColor: "black",
        borderWidth: 1,
        padding: 20,
        paddingBottom: 10,
        margin: 25,
        borderRadius: 20,
        backgroundColor: "white",
        elevation: 20
    },

    
    cardContent:{
        flexDirection: "row",
        // borderColor: "black",
        // borderWidth: 1,
    },

    imageContainer: {
        width: 62,
        height: 62, 
        marginRight: 15    
    },

    tutorProfile: {
        flex: 1,
        width: undefined,
        height: undefined,
        borderRadius: 50
    },

    tutorInfo: {
        flex: 1,
    },

    tutorName: {
        fontSize: 14,
        includeFontPadding:false
    },

    tutorRates: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    tutorDetail: {
        fontSize: 12,
        color: "#656565",
        marginTop: 10
    },

    tutorSubjects: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        marginTop: 10,
    },
    
    tutorSubject: {
        width: 68,
        height: 20,
        backgroundColor: "#FF3142",
        color: "white",
        textAlign: "center",
        textAlignVertical: "center",
        borderRadius: 20,
        fontSize: 12,
        marginBottom: 10,
    }

})