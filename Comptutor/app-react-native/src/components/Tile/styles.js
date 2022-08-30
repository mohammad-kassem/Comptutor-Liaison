import { StyleSheet } from "react-native";


export default styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      overflow: 'hidden',
      aspectRatio: 1,
    },
    containerHalfPortrait: {
      width: '50%',
    },
    containerHalfLandscape: {
      height: '50%',
    },
    containerFullPortrait: {
      width: '133%',
    },
    containerFullLandscape: {
      height: '100%',
    },
    containerLoadingOrNotShowingVideo: {
      backgroundColor: "black",
    },
    media: {
      width: '100%',
      height: '100%',
      position: 'absolute',
    },
    overlayMessage: {
      color: "white",
      justifyContent: 'flex-end',
      alignItems: 'stretch',
    },
    cornerMessage: {
      color: "white",
      position: 'absolute',
      bottom: 0,
      left: 0,
      backgroundColor: "#1877F2",
      padding: 12,
    },
    iconContainer: {
      flexDirection: 'row',
    },
    icon: {
      marginHorizontal: 4,
      marginBottom: 16,
    },
  });