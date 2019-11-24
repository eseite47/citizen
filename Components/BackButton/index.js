import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import TouchEvent from '../TouchEvent';

const BackButton = ({ prevQuestion, styles }) => {
  return (
    <TouchEvent onPress={prevQuestion}>
      <View style={styles.backButton}>
        <Text style={styles.buttonText}>{'<'}</Text>
      </View>
    </TouchEvent>
  );
};

BackButton.propTypes = {
  prevQuestion: PropTypes.func.isRequired,
};

export default BackButton;
