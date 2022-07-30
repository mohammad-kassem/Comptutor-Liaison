import { StyleSheet } from "react-native";

export default StyleSheet.create({
    searchBar: {
        backgroundColor: "#ffff",
        flexDirection: "row",
        height: 45,
        padding: 15,
        borderRadius: 30,
        elevation: 10,
        marginHorizontal: 25,
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
})