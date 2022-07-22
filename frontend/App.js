import 'react-native-gesture-handler';
import UserProvider from './src/Context/User';
import BottomTabsStack from './src/navigation/BottomTabsStack';
import OnBoardingStack from './src/navigation/OnBoardingStack';
import NavigatorSwitch from './src/navigation/NavigatorSwitch';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';



export default function App() {
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
    <UserProvider>
      <NavigatorSwitch/>
    </UserProvider>
    </>
  );
}

