import { StyleSheet } from "react-native";

export default StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    margin: 25,
    marginBottom: 0,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 29,
    alignSelf: "center",
  },

  subjectsContainer: {
    justifyContent: "space-between",
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

  icon: {
    position: "absolute",
    top: "5%",
    right: "5%",
  },
});
