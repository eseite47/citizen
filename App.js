import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomePage from './components/HomePage'
import GovCards from './components/GovCards'
import HistCards from './components/HistCards'
import AllCards from './components/AllCards'

const MainNavigator = createStackNavigator({
  Home: {screen: HomePage},
  Gov: {screen: GovCards},
  HistGeo: {screen: HistCards},
  All: {screen: AllCards}
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}