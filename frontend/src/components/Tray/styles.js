import { StyleSheet } from "react-native";


export default styles = StyleSheet.create({
    containerBase: {
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    containerPortrait: {
      width: '100%',
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      borderTopWidth: 1,
      paddingVertical: 16,
      paddingHorizontal: 12,
    },
    containerLandscape: {
      height: '100%',
      position: 'absolute',
      right: 0,
      flexDirection: 'column-reverse',
      borderLeftWidth: 1,
      paddingHorizontal: 12,
      paddingVertical: 16,
    },
    controlsPortrait: {
      flexDirection: 'row',
    },
    controlsLandscape: {
      flexDirection: 'column-reverse',
    },
  });
  