import { StyleSheet } from "react-native";

export default StyleSheet.create({

    title: {
        fontSize: 24,
        fontWeight: "700",
        lineHeight: 29,
        marginVertical: 25,
        alignSelf: "center"
    },

    tutorCard: {
        padding: 15,
        paddingBottom: 10,
        marginVertical: 15,
        marginHorizontal: 25,
        borderRadius: 20,
        backgroundColor: "white",
        elevation: 10
    },

    
    cardContent:{
        flexDirection: "row",
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
        alignSelf: "center"
    },

    tutorName: {
        fontSize: 16,
        fontWeight: "500",
        includeFontPadding: false
    },

    tutorDetail: {
        fontSize: 14,
        marginTop: 5,
        color: "#919090"
    },

    rateContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "flex-start"
    },

    rate: {
        fontSize: 12,
        color: "#E8A624",
        fontWeight: "500"
    },


    subjectsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        marginLeft: "27%",
        marginTop: 15
    },

    subjectContainer: {
        padding: 5,
        backgroundColor: "#C7E9F1",
        borderRadius: 20,
        width: "30%",
        alignSelf: "center"
    },

    subjectName:{
        textAlign: "center",
        fontSize: 10,
        fontWeight: "700",
        color: "#1877F2"
    },


})