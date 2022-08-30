import { StyleSheet } from "react-native";

export default StyleSheet.create({
  subjectsContainer: {
    justifyContent: "space-between",
    marginTop: 25,
  },

  imageContainer: {
    width: 120,
    height: 120,
  },

  subjectImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    borderRadius: 20,
  },

  iconContainer: {
    position: "absolute",
    top: "5%",
    right: "5%",
  },

  icon: {
    fontSize: 24,
    color: "#1877F2",
  },
});
