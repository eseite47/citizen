import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomePage from './Views/HomePage'
import CatergoryOptions from './Views/CategoryOptions'
import GovCards from './Views/GovCards'
import HistCards from './Views/HistCards'
import AllCards from './Views/AllCards'

const MainNavigator = createStackNavigator({
  Home: {screen: HomePage},
  CatergoryOptions: {screen: CatergoryOptions},
  // HistGeo: {screen: HistCards},
  // All: {screen: AllCards}
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}