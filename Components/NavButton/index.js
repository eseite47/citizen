import React from 'react';
import {StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import {Font} from 'expo'

class NavButton extends React.Component {
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
    const {option, onClick} = this.props
    return (
      <TouchableNativeFeedback  onPress={onClick}>
        <View style={styles.button}>
          <Text style={styles.text}>
            {option.text}
          </Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

const styles = StyleSheet.create({
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
  }
});

export default NavButton