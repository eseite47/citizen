import React, {Fragment} from 'react';
import {StyleSheet, Text, View, Image, Button } from 'react-native';
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
              {/* <Text style={styles.text}>American Government</Text> */}
              <Button
                style={styles.text}
                title="American Government"
                onPress={() => this.props.navigation.navigate('Gov')}
              />
              {/* <Text style={styles.text}>History and Geography</Text> */}
              <Button
                style={styles.text}
                title="History and Geography"
                onPress={() => this.props.navigation.navigate('HistGeo')}
              />
              {/* <Text style={styles.text}>Everything </Text> */}
              <Button
                style={styles.text}
                title="Everything"
                onPress={() => this.props.navigation.navigate('All')}
              />
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
    lineHeight: 50,
    fontFamily: 'Poiret One',
    fontSize: 30
  }
});

export default HomePage