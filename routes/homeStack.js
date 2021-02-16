import { createStackNavigation } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const screens = {
    Home: {
        screen
    }
}

const HomeStack = createStackNavigation(screens)