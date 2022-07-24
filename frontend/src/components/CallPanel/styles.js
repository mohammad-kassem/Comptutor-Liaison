import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    mainContainer: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      padding: 12,
    },
    thumbnailContainerOuterBase: {
      position: 'absolute',
      top: 0,
      left: 0,
    },
    thumbnailContainerOuterPortrait: {
      width: '100%',
      height: 100,
      paddingTop: 12,
    },
    thumbnailContainerOuterLandscape: {
      height: '100%',
      width: 100,
      paddingLeft: 12,
    },
    thumbnailContainerInnerPortrait: {
      marginLeft: 12,
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    thumbnailContainerInnerLandscape: {
      marginTop: 12,
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    messageContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 12,
    },
    largeTilesContainerOuter: {
      justifyContent: 'center',
    },
    largeTilesContainerInnerBase: {
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    largeTilesContainerInnerPortrait: {
      flexDirection: 'row',
      marginTop: 100,
      marginBottom: 90,
    },
    largeTilesContainerInnerLandscape: {
      flexDirection: 'column',
      marginLeft: 100,
      marginRight: 90,
    },
    devicesContainer: {
      position: 'absolute',
      flexDirection: 'row',
      bottom: 100,
    },
    devicesContainerInnerElement: {
      flex: 1,
      paddingHorizontal: 10,
    },
  });