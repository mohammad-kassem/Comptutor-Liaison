import { Text, View } from 'react-native';
import { useUser } from '../../Context/User';
import CridentialsFrom from '../../components/CridentialsForm';
import { login } from './controller';


export default function LoginScreen() {

	return (
		<CridentialsFrom type="login" onPressHandler={login}/>
	)
}
