import React, {Fragment} from 'react';
import {StyleSheet, Text, View, Image, Button, TouchableNativeFeedback } from 'react-native';
import {Font} from 'expo'

import Header from '../../Components/HomeHeader'
import NavButton from '../../Components/NavButton'
import {NavOptions} from './config'

class HomePage extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Poiret One': require('../../assets/fonts/PoiretOne-Regular.ttf')
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    const {fontLoaded} = this.state
    return (
      <Fragment>
        <View style={styles.container}>
          <Header
            title={'Nicely Done!'}
          />
          {/* <Text>Nicely Done!</Text> */}
        </View>
        {
          fontLoaded ? ( 
            <View style={styles.NavOptions}>
            {/* <Text style={styles.textHeader}>What are we studying today?</Text> */}

            {
              NavOptions.map((option, i) => {
                return (
                  <NavButton key={i}
                    option={option}
                    onClick={() => this.props.navigation.navigate(option.onPressNav, option.onPressProps)}
                  />
                )
              })
            }
            </View>
          ) : null
        }
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DC143C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  NavOptions: {
    flex:2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    margin: 10,
    fontFamily: 'Poiret One',
    fontSize: 20
  },
  text: {
    lineHeight: 40,
    fontFamily: 'Poiret One',
    fontSize: 25
  },
});

export default HomePage