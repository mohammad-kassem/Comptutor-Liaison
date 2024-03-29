import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  imageContainer: {
    width: 150,
    height: 150,
    marginVertical: "10%",
    alignSelf: "center",
    backgroundColor: "#C7E9F1",
    borderRadius: 100,
    padding: 30,
    marginTop: 60,
  },

  logo: {
    flex: 1,
    width: undefined,
    height: undefined,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 15,
    textAlign: "center",
    marginTop: 60,
  },

  message: {
    marginTop: 30,
    marginBottom: 15,
    // fontSize: 16,
    textAlign: "center",
  },

  codeFieldRoot: {
    marginTop: 20,
  },

  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#00000030",
    textAlign: "center",
  },

  focusCell: {
    borderColor: "black",
  },

  resendMessage: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },

  resendLink: {
    color: "#1877F2",
    fontWeight: "600",
  },
});
