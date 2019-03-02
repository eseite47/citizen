import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomePage from './Views/HomePage'
import CatergoryOptions from './Views/CategoryOptions'
import FlashCardView from './Views/FlashCardView'
import Finish from './Views/Finish'

const MainNavigator = createStackNavigator({
  Home: {screen: HomePage},
  CatergoryOptions: {screen: CatergoryOptions},
  FlashCardView : {screen: FlashCardView},
  Finish: {screen: Finish}
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}