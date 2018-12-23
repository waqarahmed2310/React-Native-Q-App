import LoginScreen from '../component/login';
import HomeScreen from '../component/home';
import CompanyScreen from '../component/company'
import UserScreen from '../component/user'
import {
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';
  

  const AppNavigator = createStackNavigator({
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
    Company: { screen: CompanyScreen },
    User: { screen: UserScreen},
  })
  export default createAppContainer(AppNavigator);