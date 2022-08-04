import { StyleSheet } from "react-native";

export default StyleSheet.create({
  sectionPrompt: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 25,
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

  about: {
    marginBottom: 20,
    paddingBottom: 5,
    textAlignVertical: "top",
    alignItems: "flex-start",
    fontSize: 18,
    height: 60,
    borderBottomWidth: 1,
    borderColor: "#919090",
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "55%",
  },
});
