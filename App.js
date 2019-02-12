import { createStackNavigator, createAppContainer } from "react-navigation";
import Loading from './screens/Loading'
import Main from './screens/Main'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import Profile from './screens/Profile'
import CardInfo from './screens/CardInfo'

console.disableYellowBox = true;

const AppNavigator = createStackNavigator(
  {
    Main: Main,
    SignUp: SignUp,
    Login: Login,
    Loading: Loading,
    Profile: Profile,
    CardInfo: CardInfo
  },
  {
    initialRouteName: 'Main'
  }
)

export default createAppContainer(AppNavigator);