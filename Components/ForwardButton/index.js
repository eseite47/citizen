import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import TouchEvent from '../TouchEvent';

const ForwardButton = ({ nextQuestion, styles }) => {
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
