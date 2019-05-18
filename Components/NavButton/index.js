import React from 'react';
import {StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types'

const NavButton = ({option, onClick}) => {

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

  return (
    <TouchableNativeFeedback onPress={onClick}>
      <View style={styles.button}>
        <Text style={styles.text}>
          {option.text}
        </Text>
      </View>
    </TouchableNativeFeedback>
  )
}

NavButton.defaultProps = {
  option: {
    text: ''
  },
  onClick: () => {}
}

NavButton.propTypes = {
  option: PropTypes.shape({
    text: PropTypes.string
  }), 
  onClick: PropTypes.func
}

export default NavButton