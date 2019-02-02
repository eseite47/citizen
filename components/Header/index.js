import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {Font} from 'expo'

class Header extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Charmonman Regular': require('../../assets/fonts/Charmonman-Regular.ttf')
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const {fontLoaded} = this.state
    return (
      <View>
        {
          fontLoaded ? (
            <Text style={styles.header}>Citizen</Text>
          ) : null
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    // marginTop: 10,
    height: 80,
    backgroundColor: '#fff',
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Charmonman Regular'
  },
});

export default Header