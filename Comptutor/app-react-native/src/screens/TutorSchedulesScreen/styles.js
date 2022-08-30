import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 29,
    marginVertical: 25,
    alignSelf: "center",
  },

  timesContainer: {
    flex: 1,
    justifyContent: "space-between",
    margin: 25,
  },

  timeContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 5,
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 25,
    elevation: 10,
  },

  time: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 22,
    textAlign: "center",
    letterSpacing: 2,
  },

  addButton: {
    backgroundColor: "#C7E9F1",
    position: "absolute",
    bottom: 30,
    right: 25,
    padding: 10,
    borderRadius: 15,
  },

  icon: {
    fontSize: 40,
    color: "#1877F2",
  },
});
