import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import TouchEvent from '../TouchEvent';

const styles = StyleSheet.create({
  backButton: {
    margin: 15,
    width: '30%',
    height: 75,
    color: '#e7e7e7',
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

const BackButton = ({ prevQuestion }) => {
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
