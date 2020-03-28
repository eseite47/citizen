import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import TouchEvent from '../TouchEvent';

const styles = StyleSheet.create({
  button: {
    margin: 15,
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

const ShowAnswerButton = ({ flipCard, showAnswer }) => {
  const buttonText = showAnswer ? 'Show Question' : 'Show Answer';
  return (
    <TouchEvent onPress={flipCard}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
    </TouchEvent>
  );
};

ShowAnswerButton.propTypes = {
  showAnswer: PropTypes.bool,
  flipCard: PropTypes.func.isRequired,
};

export default ShowAnswerButton;
