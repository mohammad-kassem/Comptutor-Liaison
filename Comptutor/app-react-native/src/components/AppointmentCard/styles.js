import { StyleSheet } from "react-native";

export default StyleSheet.create({
  appointmentCard: {
    padding: 20,
    marginVertical: 15,
    marginHorizontal: 25,
    borderRadius: 20,
    backgroundColor: "white",
    elevation: 10,
    alignSelf: "stretch",
    height: 100,
    justifyContent: "space-between",
    alignItems: "center",
  },

  date: {
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 22,
    textAlign: "center",
    letterSpacing: 5,
  },

  appointmentWith: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  imageContainer: {
    width: 24,
    height: 24,
    marginHorizontal: 5,
  },

  profile: {
    flex: 1,
    width: undefined,
    height: undefined,
    borderRadius: 50,
  },

  details: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 22,
    textAlign: "center",
  },
});
