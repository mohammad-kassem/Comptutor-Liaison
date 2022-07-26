import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    dropdown: {
      marginVertical: 16,
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
      elevation: 2,
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
    },
  
    selectedTextStyle: {
      fontSize: 16,
    },
  
  });