import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ColourScreen from './src/screens/ColourScreen'
import ComponentScreen from './src/screens/ComponentScreen'
import CounterScreen from './src/screens/CounterScreen'
import ImageScreen from './src/screens/ImageScreen'
import ListScreen from './src/screens/ListScreen'
import SquareScreen from './src/screens/SquareScreen'
import TextScreen from './src/screens/TextScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    Image: ImageScreen,
    List: ListScreen,
    Counter: CounterScreen,
    Colour: ColourScreen,
    Square: SquareScreen,
    Text: TextScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'React Native Application'
    }
  }
);

export default createAppContainer(navigator);
