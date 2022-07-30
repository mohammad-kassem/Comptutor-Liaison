import 'react-native-gesture-handler';
import UserProvider from './src/Context/User';
import BottomTabsStack from './src/navigation/BottomTabsStack';
import OnBoardingStack from './src/navigation/OnBoardingStack';
import NavigatorSwitch from './src/navigation/NavigatorSwitch';
import { useEffect, useState } from 'react';
import { Alert, StatusBar, Text, View } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import AnimatedSplash from 'react-native-animated-splash-screen'




export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log(remoteMessage)
      PushNotification.localNotification({
        channelId : 1,
        autoCancel: true,
        bigText: remoteMessage.notification.body,
        title: remoteMessage.notification.title,
        message: 'Expand me to see more',
        vibrate: true,
        vibration: 300,
        playSound: true,
        soundName: 'default',
      });
    });
    return unsubscribe;
  }, []);
  return (
    <>
     
    
     <AnimatedSplash
        isLoaded={isLoaded}
        backgroundColor={"white"}
        logoImage={require("./assets/logo.png")}
        logoHeight={252}
        logoWidth={238}

      >
     <StatusBar
        backgroundColor="#f5f5f5"
        barStyle="dark-content"
     />   
    <UserProvider>
      <NavigatorSwitch/>
    </UserProvider>
    </AnimatedSplash>
    </>
  );
}

