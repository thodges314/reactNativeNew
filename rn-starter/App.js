import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen'
import CounterScreen from './src/screens/CounterScreen'
import ImageScreen from './src/screens/ImageScreen'
import ListScreen from './src/screens/ListScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    Image: ImageScreen,
    List: ListScreen,
    Counter: CounterScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'React Native Application'
    }
  }
);

export default createAppContainer(navigator);
