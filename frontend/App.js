import 'react-native-gesture-handler';
import UserProvider from './src/Context/User';
import BottomTabsStack from './src/navigation/BottomTabsStack';
import OnBoardingStack from './src/navigation/OnBoardingStack';
import NavigatorSwitch from './src/navigation/NavigatorSwitch';


export default function App() {
  return (
    <>
    <UserProvider>
      <NavigatorSwitch/>
    </UserProvider>
    </>
  );
}

