import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
});
