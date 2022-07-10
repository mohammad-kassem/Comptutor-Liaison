import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
})