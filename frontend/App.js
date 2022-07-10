import 'react-native-gesture-handler';
import UserProvider from './src/Context/User';
import OnBoardingStack from './src/navigation/OnBoardingStack';

export default function App() {
  return (
    <>
    <UserProvider>
      <OnBoardingStack/>
    </UserProvider>
    </>
  );
}

