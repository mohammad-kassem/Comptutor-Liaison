import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    dropdown: {
      marginBottom: 15,
      height: 50,
      backgroundColor: 'white',
      borderRadius: 12,
      padding: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },

      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 10,
      marginHorizontal: 100,
      marginTop: 25.
    },
  
    item: {
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  
    textItem: {
      flex: 1,
      fontSize: 16,
      textAlign: "center"
    },
  
    selectedTextStyle: {
      fontSize: 16,
    },
  
  });