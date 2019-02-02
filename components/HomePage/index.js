import React, {Fragment} from 'react';
import {StyleSheet, Text, View, Image, Button, TouchableNativeFeedback } from 'react-native';
import {Font} from 'expo'

import Header from '../Header'

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
          <Header />
          <Image style={styles.seal} source={require('../../assets/Great_Seal_of_the_United_States.png')} />
        </View>
        {
          fontLoaded ? ( 
            <View style={styles.NavOptions}>
              <Text style={styles.textHeader}>What are we studying today?</Text>
              <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Gov')}>
                <View style={styles.button}>
                  <Text style={styles.text}>
                    American Government
                  </Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('HistGeo')}>
                <View style={styles.button}>
                  <Text style={styles.text}>
                    History and Geography
                  </Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('All')}>
                <View style={styles.button}>
                  <Text style={styles.text}>
                    Everything 
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          ) : null
        }
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  seal: {
    width: 200, 
    height: 200
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  NavOptions: {
    margin: 20,
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
  button: {
    marginBottom: 25,
    width: 300,
    height: 50,
    alignItems: 'center',
    borderColor: '#2196F3',
    borderRadius: 4,
    borderWidth: 0.5,
    // FontColor: 'white',
  }
});

export default HomePage