import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomePage from './Views/HomePage'
import CatergoryOptions from './Views/CategoryOptions'
import FlashCardView from './Views/FlashCardView'

const MainNavigator = createStackNavigator({
  Home: {screen: HomePage},
  CatergoryOptions: {screen: CatergoryOptions},
  FlashCardView : {screen: FlashCardView}
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}