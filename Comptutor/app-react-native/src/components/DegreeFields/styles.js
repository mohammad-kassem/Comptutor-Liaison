import { StyleSheet } from "react-native";

export default StyleSheet.create({
  dropdown: {
    marginTop: 10,
    marginBottom: 20,
    height: 62,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },

    shadowOpacity: 0.2,
    shadowRadius: 1.4,
    elevation: 10,
  },

  selectedTextStyle: {
    fontSize: 18,
    height: 50,
    textAlignVertical: "center",
  },

  fieldTitle: {
    fontSize: 16,
    marginBottom: 5,
    color: "#919090",
    fontWeight: "500",
  },

  field: {
    marginBottom: 20,
    paddingBottom: 5,
    textAlignVertical: "bottom",
    alignItems: "flex-start",
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: "#919090",
  },
});
