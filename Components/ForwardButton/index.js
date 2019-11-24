import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import TouchEvent from '../TouchEvent';

const styles = StyleSheet.create({
  forwardButton: {
    margin: 15,
    flex: 5,
    // width: '50%',
    height: 75,
    color: 'green',
    borderColor: '#2196F3',
    borderRadius: 4,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 30,
    fontFamily: 'Dosis',
  },
});

const ForwardButton = ({ nextQuestion }) => {
  return (
    <TouchEvent onPress={nextQuestion}>
      <View style={styles.forwardButton}>
        <Text style={styles.buttonText}>{`Next >`}</Text>
      </View>
    </TouchEvent>
  );
};

ForwardButton.propTypes = {
  nextQuestion: PropTypes.func.isRequired,
};

export default ForwardButton;
